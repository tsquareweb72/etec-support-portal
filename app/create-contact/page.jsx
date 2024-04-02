'use client';

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import ContactForm from "@components/ContactForm";

const CreateContact = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [submitting, setSubmitting] = useState(false)
  const [postContact, SetPostContact] = useState ({
    contactName: '',
    eMail: '',
  });

  const createContact = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch('/api/contact/new',
        {
            method: 'POST',
            body: JSON.stringify({
                contactName: postContact.contactName,
                userId: session?.user.id,
                eMail: postContact.eMail
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
    <ContactForm
      type="Create"
      postContact={postContact}
      SetPostContact={SetPostContact}
      submitting={submitting}
      handleSubmit={createContact}
    />
  )
}

export default CreateContact