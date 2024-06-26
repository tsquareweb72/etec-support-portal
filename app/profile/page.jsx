"use client";

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import Profile from '@components/Profile';

const MyProfile = () => {
    const router = useRouter();
    const { data: session } = useSession();
    const { ticketdata: ticketsession } =useSession();

    const[posts, setPosts] = useState([]);

    const[postsTickets, setPostTickets] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
          const response = await fetch(`/api/users/${session?.user.id}/posts`);
          const data = await response.json();
          
          setPosts(data);
        }
    
        if (session?.user.id) fetchPosts();
      }, []);

    const handleEdit = (post) => {
      router.push(`/update-prompt?id=${post._id}`)
    }

    const handleDelete = async (post) => {
      const hasConfirmed =confirm("Are you sure you want to delete this prompt?");

      if(hasConfirmed) {
        try {
          await fetch(`/api/prompt/${post._id.toString()}`, {
            method: 'DELETE'
          });
          
          const filteredPosts = posts.filter((p) => p._id !== post._id);

          setPosts(filteredPosts);
        } catch (error) {
          console.log(error);
        }
      }
    }

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
        name= {session?.user.name} 
        desc="Welcome to your personized profile page"
        data={posts}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        ticketname= {ticketsession?.user.name} 
        ticketdata={postsTickets}
        handleTicketEdit={handleTicketEdit}
        handleTicketDelete={handleTicketDelete}
    />
  )
}

export default MyProfile;