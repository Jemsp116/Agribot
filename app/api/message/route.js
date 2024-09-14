import { mongooseConnect } from "@/lib/mongoose";
import Message from "@/models/MessageModel";
import { NextResponse } from "next/server";


const createMessage = async (req) => {
    const body = await req.json();

    if (!body.firstname || !body.email || !body.message) {
        return NextResponse.json({ message: "Title, message and price are required" }, { status: 400 });
    }

    try {
        const robotDoc = await Message.create({
            firstname: body.firstname,
            lastname: body.lastname,
            email: body.email,
            message: body.message,
        });
        return NextResponse.json({message: "Sent Successfully !"}, { status: 201 });
    } catch (error) {
        console.error("Error creating robot:", error);
        return NextResponse.json({ message: "Internal server error" }, { status: 500 });
    }
};


// Main handler function
const robotHandler = async (req) => {
    await mongooseConnect();

    createMessage(req);
};

// Export the handler for all HTTP methods
export { robotHandler as POST };
