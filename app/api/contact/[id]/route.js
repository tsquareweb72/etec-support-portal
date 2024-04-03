import { connectToDB } from "@utils/database";
import Contact from "@models/contact";

// GET (read)
export const GET = async (request, {params}) => {
    try {
        await connectToDB();

        const contact = await Contact.findById(params.id).populate('creator')
        if(!contact) return new Response("Contact not found", {status:404});

        return new Response(JSON.stringify(contact), { status: 200})
    } catch (error) {
        return new Response("Failed to fetch contact", {status: 500});
    }
}

// PATCH (update)
export const PATCH = async (request, {params}) => {
    const { contact, eMail, contactName} = await request.json();

    try {
        await connectToDB();

        const existingContact = await Contact.findById (params.id);

        if(!existingContact) return new Response("Contact not found", {status:404})

        existingContact.contact = contact;
        existingContact.eMail = eMail;
        existingContact.contactName = contactName;

        await existingContact.save();

        return new Response(JSON.stringify(existingContact), {status:200})
    } catch (error) {
        return new Response("Failed to update contact", {status: 500})
    }
}

// DELETE (delete)
export const DELETE = async (request, {params}) => {
    try {
        await connectToDB();

        await Contact.findByIdAndDelete(params.id);

        return new Response("Contact deleted successfully", {status:200})
    } catch (error) {
        return new Response("Failed to delete contact", {status: 500})       
    }
}