import { mongooseConnect } from "@/lib/mongoose";
import Message from "@/models/MessageModel";
import { NextResponse } from "next/server";


const createMessage = async (req) => {
    const body = await req.json();

    console.log(body);

    try {
        const robotDoc = await Message.create({
            firstName: body.firstName,
            lastName: body.lastName,
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

    const method = req.method;

    switch (method) {
        case "POST":
            return createMessage(req);
        default:
            return NextResponse.json({ message: "Method not allowed" }, { status: 405 });
    }
};

// Export the handler for all HTTP methods
export { robotHandler as POST };
