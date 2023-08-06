import { useState } from "react";
import { Contact } from "../../models/Contact";
import ContactCard from "../ContactCard/ContactCard";
import "./ContactList.css";

function ContactList(props: { contacts: any }) {
  let contacts = props.contacts;

  return (
    <div className="contactContainer">
      <h2>Contacts</h2>
      {/* <div>
        {contacts
          .sort((a: { lastName: string }, b: { lastName: any }) =>
            a.lastName.localeCompare(b.lastName)
          )
          .map((contact: Contact, index: any) => (
            <ContactCard
              key={contact.toString()}
              contacts={contact}
            ></ContactCard>
          ))}
      </div> */}
    </div>
  );
}

export default ContactList;
