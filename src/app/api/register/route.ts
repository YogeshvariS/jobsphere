import { NextResponse } from "next/server";

import User from "@/database/models/User";
import { connectDB } from "@/lib/db/mongodb";

import { hashPassword } from "@/modules/auth/services/register.service";
import { registerSchema } from "@/modules/auth/validations/register.schema";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const validatedData = registerSchema.parse(body);

    await connectDB();

    const existingUser = await User.findOne({
      email: validatedData.email,
    });

    if (existingUser) {
      return NextResponse.json(
        {
          success: false,
          message: "User already exists",
        },
        {
          status: 409,
        }
      );
    }

    const hashedPassword = await hashPassword(
      validatedData.password
    );

    const userDoc = await User.create({
      name: validatedData.name,
      email: validatedData.email,
      password: hashedPassword,
      role: validatedData.role,
    });

    return NextResponse.json(
      {
        success: true,
        message: "User registered successfully",
        data: {
          id: userDoc._id?.toString(),
          email: userDoc.email,
          role: userDoc.role,
        },
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error("Registration Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to register user",
      },
      {
        status: 500,
      }
    );
  }
}