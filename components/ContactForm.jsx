import Link from "next/link";

const ContactForm = ({ type, postContact, SetPostContact, submitting, handleSubmit}) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
        <h1 className="head_text text-left">
        <span className="blue_gradient">{type} Contact</span>
      </h1>
      <p className="desc text-left max-w-md">
        {type} a Company Contact. 
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism">
            <label>
                <span className="font-satoshi font-semibold text-base text-gray-700">
                Contact Name {' '}
                <span className="font-normal">
                    (Contact's Name)
                </span>
                </span>
                <input
                value={postContact.contactName}
                onChange={(e) => SetPostContact({ ...postContact, contactName: e.target.value })}
                placeholder="Write your Contact Name here..."
                required
                className="form_input"
                />
            </label>
            <label>
                <span className="font-satoshi font-semibold text-base text-gray-700">
                Email address {' '}
                <span className="font-normal">
                    (Contact's email address)
                </span>
                </span>
                <input
                value={postContact.eMail}
                onChange={(e) => SetPostContact({ ...postContact, eMail: e.target.value })}
                placeholder="Write your contact email address here..."
                required
                className="form_input"
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

export default ContactForm