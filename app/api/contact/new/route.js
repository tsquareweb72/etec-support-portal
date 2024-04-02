import { connectToDB } from "@utils/database";
import Contact from "@models/contact";

export const POST= async (req) => {
    const { userId, contactName, eMail } = await req.json();

    try {
      await connectToDB();
      const newContact = new Contact({ 
        creator: userId,
        contactName, 
        eMail 
       })  

       await newContact.save();

       return new Response(JSON.stringify(newContact), {status: 201 })
    } catch (error) {
      return new Response("Failed to create a new contact", { status: 500 })
    }
}