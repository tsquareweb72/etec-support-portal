import TicketCard from "./TicketCard";

const TicketProfile = ({ desc, ticketname, ticketdata, handleTicketEdit, handleTicketDelete}) => {
  return (
    <section className="w-full">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{ticketname}'s Profile</span>
      </h1>
      <p className="desc text-left">{desc}</p>
      <h1 className="head_text text-left">My Tickets</h1>
      
      <div className="mt-10 prompt_layout">
        {ticketdata.map((postTicket) => (
          <TicketCard
            key={postTicket._id}
            postTicket={postTicket}
            handleTicketEdit={() => handleTicketEdit && handleTicketEdit(postTicket)}
            handleTicketDelete={() => handleTicketDelete && handleTicketDelete(postTicket)}
          />
        ))}
      </div>
    </section>
  )
}

export default TicketProfile