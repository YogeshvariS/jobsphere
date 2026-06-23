import { NextResponse } from "next/server";

import { connectDB } from "@/lib/db/mongodb";
import User from "@/database/models/User";

import { loginSchema } from "@/modules/auth/validations/login.schema";
import { comparePassword } from "@/modules/auth/services/login.service";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const validatedData = loginSchema.parse(body);

    await connectDB();

    const user = await User.findOne({
      email: validatedData.email,
    });

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid email or password",
        },
        {
          status: 401,
        }
      );
    }

    const isPasswordValid = await comparePassword(
      validatedData.password,
      user.password || ""
    );

    if (!isPasswordValid) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid email or password",
        },
        {
          status: 401,
        }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Login successful",
        data: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Login Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to login",
      },
      {
        status: 500,
      }
    );
  }
}