'use client';

import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

const TicketCard = ({ postTicket, handleIssueClick, handleTicketEdit, handleTicketDelete }) => {
  const { ticketdata: ticketsession } = useSession();
  const pathName = usePathname();
  const router = useRouter();
  const [copied, setCopied] = useState("");
  
  const handleTicketCopy = () => {
    setCopied(postTicket.ticket);
    navigator.clipboard.writeText(postTicket.ticket);
    setTimeout(() => setCopied(""), 3000);
  }

  return (
    <div className="ticket_card">
      <p>Tickets</p>
{/*
      <div className="flex justify-between items-start gap-5">
         <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer">
         <Image
            src={postTicket.creator.image}
            alt="user_image"
            width={40}
            height={40}
            className="rounded-full object-contain"
          />         
          <div className="flex flex-col">
            <h3 className="font-satoshi font-semibold text-gray-900">{postTicket.creator.username}</h3>
            <p className="font-inter text-sm text-orange-500">{postTicket.creator.email}</p>
          </div>
        </div>

        <div className="copy_btn" onClick={handleTicketCopy}>
          <Image
            src={copied === postTicket.ticket
            ? '/assets/icons/tick.svg'
            : '/assets/icons/copy.svg'
            }
            width={12}
            height={12}
          />
        </div>
  
      </div>
      <p className="my-4 font-satoshi text-sm text-gray-700">{postTicket.ticket}</p>
      <p className="font-inter text-sm blue_gradient cursor-pointer"
      onClick={() => handleIssueClick && handleIssueClick (postTicket.issue)}>
        {postTicket.issue}
      </p>

      {ticketsession?.user.id === postTicket.creator._id && pathName === '/profile' && (
        <div className="mt-5 flex-center gap-4 border-t border-gray-100 pt-3">
          <p className="font-inter text-sm green_gradient cursor-pointer" onClick={handleTicketEdit}>
            Edit
          </p>
          <p className="font-inter text-sm orange_gradient cursor-pointer" onClick={handleTicketDelete}>
            Delete
          </p>
        </div>
      )}
      */}
    </div>
  )
}

export default TicketCard