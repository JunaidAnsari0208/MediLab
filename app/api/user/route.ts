import { db } from "@/lib/db";
import { hash } from "bcrypt";
import { NextResponse } from "next/server";
import * as z from "zod";

//Define the schema for the request body
const userSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must have 8 characters"),
  name: z.string().min(1, "Please enter your name").max(100),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password, name } = userSchema.parse(body);

    // Check if email already exists
    const existingUser = await db.user.findUnique({
      where: { email: email },
    });
    if (existingUser) {
      return NextResponse.json(
        { message: "User with this email already exists" },
        { status: 409 }
      );
    }

    // Hash password
    const hashedPassword = await hash(password, 10);

    const newUser = await db.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    const { password: newUserPassword, ...rest } = newUser;
    return NextResponse.json(
      { user: rest, message: "User created successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "There was an error! Please try again" },
      { status: 500 }
    );
  }
}
