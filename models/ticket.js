import {Schema, model, models} from "mongoose";

const TicketSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    ticket: {
        type: String,
        required: [true, 'Ticket is required.'],
    },
    issue: {
        type: String,
        required: [true, 'Issue is required.'],
    },
    companyName: {
        type: String,
        required: [true, 'Company Name is required.'],
    }
});

const Ticket = models.Ticket || model('Ticket', TicketSchema);

export default Ticket;