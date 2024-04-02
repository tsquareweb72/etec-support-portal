import { connectToDB } from "@utils/database";
import Ticket from "@models/ticket";

// GET (read)
export const GET = async (request, {params}) => {
    try {
        await connectToDB();

        const ticket = await Ticket.findById(params.id).populate('creator')
        if(!ticket) return new Response("Ticket not found", {status:404});

        return new Response(JSON.stringify(ticket), { status: 200})
    } catch (error) {
        return new Response("Failed to fetch ticket", {status: 500});
    }
}

// PATCH (update)
export const PATCH = async (request, {params}) => {
    const { ticket, issue, companyName} = await request.json();

    try {
        await connectToDB();

        const existingTicket = await Ticket.findById (params.id);

        if(!existingTicket) return new Response("Ticket not found", {status:404})

        existingTicket.ticket = ticket;
        existingTicket.issue = issue;
        existingTicket.companyName = companyName;

        await existingTicket.save();

        return new Response(JSON.stringify(existingTicket), {status:200})
    } catch (error) {
        return new Response("Failed to update ticket", {status: 500})
    }
}

// DELETE (delete)
export const DELETE = async (request, {params}) => {
    try {
        await connectToDB();

        await Ticket.findByIdAndDelete(params.id);

        return new Response("Ticket deleted successfully", {status:200})
    } catch (error) {
        return new Response("Failed to delete ticket", {status: 500})       
    }
}