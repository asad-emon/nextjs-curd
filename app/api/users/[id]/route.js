import dbConnection from "@/lib/mongodb"
import User from "@/model/User"
import { NextResponse } from "next/server"

export async function PUT(request, { params }) {
    try{
        const { id } = params
        const { data } = await request.json();
        await dbConnection();
        await User.findByIdAndUpdate(id, data);
        return NextResponse.json({ message : "User updated" });
    }
    catch(ex) {
        return NextResponse.json({ error: ex });
    }
}

export async function GET(request, { params }) {
    try{
        const { id } = params;
        await dbConnection();
        const user = await User.findById(id);
        return NextResponse.json({ data : user });
    }
    catch(ex) {
        return NextResponse.json({ error: ex });
    }
}