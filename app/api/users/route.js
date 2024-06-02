import dbConnection from "@/lib/mongodb"
import User from "@/model/User";
import { NextResponse } from "next/server"

export async function POST(request) {
    try {
        const { data } = await request.json();
        await dbConnection();
        await User.create(data);
        return NextResponse.json({status: "ok", message:"User created"});
    }
    catch(ex){
        return NextResponse.json({ error: ex, message:"Failed to create user!"});
    }
  }

  export async function GET() {
    try {
        await dbConnection();
        const users = await User.find();
        return NextResponse.json({ status:"ok", message:"Users found!", data: users });
    }
    catch(ex) {
        return NextResponse.json({ error: ex, message:"Users not found!" });
    }
  }

  export async function DELETE(request) {
    try {
        const searchParams = request.nextUrl.searchParams;
        const id = searchParams.get('id');
        await dbConnection();
        await User.findByIdAndDelete(id);
        return NextResponse.json({ message : "User deleted" });
    }
    catch(ex) {
        return NextResponse.json({ error: ex });
    }
  }
