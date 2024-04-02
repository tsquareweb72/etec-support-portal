import { connectToDB } from "@utils/database";
import Contact from "@models/ticket";

export const GET = async (request) => {
    try {
        await connectToDB();

        const contacts = await Contact.find({}).populate ('creator');

        return new Response(JSON.stringify(contacts), { status: 200})
    } catch (error) {
        return new Response("Failed to fetch all contacts", {status: 500})
    }
}