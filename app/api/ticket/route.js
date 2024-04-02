import { connectToDB } from "@utils/database";
import Ticket from "@models/ticket";

export const GET = async (request) => {
    try {
        await connectToDB();

        const tickets = await Ticket.find({}).populate ('creator');

        return new Response(JSON.stringify(tickets), { status: 200})
    } catch (error) {
        return new Response("Failed to fetch all tickets", {status: 500})
    }
}