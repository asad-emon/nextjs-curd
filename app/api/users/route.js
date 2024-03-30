import dbConnection from "@/lib/mongodb"
import User from "@/model/User";
import { NextResponse } from "next/server"

export async function POST(request) {
    try {
        const { data } = await request.json();
        await dbConnection();
        await User.create(data);
        return NextResponse.json({message:"User created"});
    }
    catch(ex){
        return NextResponse.json({ error: ex });
    }
  }

  export async function GET() {
    try {
        await dbConnection();
        const users = await User.find();
        return NextResponse.json({ users });
    }
    catch(ex) {
        return NextResponse.json({ error: ex });
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
