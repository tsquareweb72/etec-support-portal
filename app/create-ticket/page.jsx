'use client';

import {useState} from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import TicketForm from '@components/TicketForm';

const CreateTicket = () => {
    const router = useRouter();
    const { ticketdata: ticketsession } = useSession();
    
    const[submitting, setSubmitting] = useState(false);
    const [postTicket, setPostTicket] = useState({
        ticket: '',
        companyName: '',
        issue: '',
    });

    const createTicket = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        try {
            const response = await fetch('/api/ticket/new',
            {
                method: 'POST',
                body: JSON.stringify({
                    ticket: postTicket.ticket,
                    userId: ticketsession?.user.id,
                    companyName: postTicket.companyName,
                    issue: postTicket.issue
                })
            })

            if(response.ok) {
                router.push('/');
            }
        } catch (error) {
            console.log(error);
        } finally {
            setSubmitting(false);
        }
    }

    return (    
        <TicketForm
            type="Create"
            postTicket={postTicket}
            setPostTicket={setPostTicket}
            submitting={submitting}
            handleSubmit={createTicket}
        />
    )
}

export default CreateTicket