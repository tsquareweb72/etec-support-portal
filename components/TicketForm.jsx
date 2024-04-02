import Link from "next/link";

const TicketForm = ({ type, postTicket, setPostTicket, submitting, handleSubmit}) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type} Ticket</span>
      </h1>
      <p className="desc text-left max-w-md">
        {type} a service ticket for any questions or issues related to their Kamstrup solution at any time. 
      </p>
      <p className="pt-3">
        Please fill in the form below to open a new ticket.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism">
          <label>
            <span className="font-satoshi font-semibold text-base text-gray-700">
              Company Name {' '}
              <span className="font-normal">
                (Company Name in READy)
              </span>
            </span>
            <input
              value={postTicket.companyName}
              onChange={(e) => setPostTicket({ ...postTicket, companyName: e.target.value })}
              placeholder="Write your UtilityCompany Name here..."
              required
              className="form_input"
              />
          </label>
          <label>
            <span className="font-satoshi font-semibold text-base text-gray-700">
              Help Topic {' '}
              <span className="font-normal">
                (General Inquiry, READy Manager PC, READy App, Field Service, Warranty)
              </span>
            </span>
            <input
              value={postTicket.issue}
              onChange={(e) => setPostTicket({ ...postTicket, issue: e.target.value })}
              placeholder="Write your issue here..."
              required
              className="form_input"
              />
          </label>
          <label>
            <span className="font-satoshi font-semibold text-base text-gray-700">
              Your question or issue
            </span>
            <textarea
              value={postTicket.ticket}
              onChange={(e) => setPostTicket({ ...postTicket, ticket: e.target.value })}
              placeholder="Write your question or issue here..."
              required
              className="form_textarea"
              />
          </label>

        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className="text-gray-500 text-sm">
            Cancel
          </Link>

          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-1.5 text-sm bg-primary-blue rounded-full text-white"
            >
              {submitting ? `${type}...` : type}
            </button>
        </div>
      </form>
    </section>
  )
}

export default TicketForm