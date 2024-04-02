import { connectToDB } from "@utils/database";
import Ticket from "@models/ticket";

export const POST= async (req) => {
    const { userId, ticket, issue, companyName } = await req.json();

    try {
      await connectToDB();
      const newTicket = new Ticket({ 
        creator: userId,
        ticket, 
        issue,
        companyName 
       })  

       await newTicket.save();

       return new Response(JSON.stringify(newTicket), {status: 201 })
    } catch (error) {
      return new Response("Failed to create a new ticket", { status: 500 })
    }
}