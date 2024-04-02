"use client";

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import Profile from '@components/TicketProfile';

const MyTicketProfile = () => {
    const router = useRouter();
    const { ticketdata: ticketsession } =useSession();

    const[postsTickets, setPostTickets] = useState([]);

    useEffect(() => {
      const fetchPostTickets = async () => {
        const response = await fetch(`/api/users/${ticketsession?.user.id}/tickets`);
        const ticketdata = await response.json();
        
        setPostTickets(ticketdata);
      }
  
      if (ticketsession?.user.id) fetchPostTickets();
    }, []);

  const handleTicketEdit = (postTicket) => {
    router.push(`/update-ticket?id=${postTicket._id}`)
  }

  const handleTicketDelete = async (postTicket) => {
    const hasConfirmed =confirm("Are you sure you want to delete this Ticket?");

    if(hasConfirmed) {
      try {
        await fetch(`/api/ticket/${postTicket._id.toString()}`, {
          method: 'DELETE'
        });
        
        const filteredPostsTickets = postsTickets.filter((p) => p._id !== postTicket._id);

        setPostsTickets(filteredPostsTickets);
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <Profile 
        desc="Welcome to your personized Ticket profile page"
        ticketname= {ticketsession?.user.name} 
        ticketdata={postsTickets}
        handleTicketEdit={handleTicketEdit}
        handleTicketDelete={handleTicketDelete}
    />
  )
}

export default MyTicketProfile;