import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";

import { authOptions } from "@/lib/auth/auth.config";
import { connectDB } from "@/lib/db/mongodb";

import { createJobSchema } from "@/modules/jobs/schemas/job.schema";
import {
  createJob,
  getAllJobs,
} from "@/modules/jobs/services/job.service";

import { getErrorMessage } from "@/lib/api/error";

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json(
        {
          message: "Unauthorized",
        },
        {
          status: 401,
        }
      );
    }

    if (session.user.role !== "EMPLOYER") {
      return NextResponse.json(
        {
          message: "Only employers can post jobs.",
        },
        {
          status: 403,
        }
      );
    }

    await connectDB();

    const body = await request.json();

    const data = createJobSchema.parse(body);

    const job = await createJob(
      data,
      session.user.id
    );

    return NextResponse.json(
      {
        message: "Job created successfully.",
        job,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: getErrorMessage(error),
      },
      {
        status: 400,
      }
    );
  }
}

export async function GET() {
  try {
    await connectDB();

    const jobs = await getAllJobs();

    return NextResponse.json(
      {
        jobs,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: getErrorMessage(error),
      },
      {
        status: 500,
      }
    );
  }
}