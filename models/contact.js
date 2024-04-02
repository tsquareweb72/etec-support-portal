import {Schema, model, models} from "mongoose";

const ContactSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    name: {
        type: String,
        required: [true, 'Contact Name is required.'],
    },
    eMail: {
        type: String,
        required: [true, 'email address is required.'],
    }
});

const Contact = models.Contact || model('Contact', ContactSchema);

export default Contact;