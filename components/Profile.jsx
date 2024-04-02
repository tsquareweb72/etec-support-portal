import PromptCard from "./PromptCard";
import TicketCard from "./TicketCard";

const Profile = ({ name, desc, data, handleEdit, handleDelete, ticketname,  ticketdata, handleTicketEdit, handleTicketDelete}) => {
  return (
    <section className="w-full">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{name}'s Profile</span>
      </h1>
      <p className="desc text-left">{ticketname}temp</p>
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
        
      <h1 className="head_text text-left">My Prompts</h1>
      <div className="mt-10 prompt_layout">
        {data.map((post) => (
          <PromptCard
            key={post._id}
            post={post}
            handleEdit={() => handleEdit && handleEdit(post)}
            handleDelete={() => handleDelete && handleDelete(post)}
          />
        ))}
      </div>
    </section>
  )
}

export default Profile