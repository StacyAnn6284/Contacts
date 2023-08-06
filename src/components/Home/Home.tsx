import ContactForm from "../ContactForm/ContactForm";
import { Contact } from "../../models/Contact";
import ContactList from "../ContactList/ContactList";
import "./Home.css";
import { useState } from "react";
import ContactCard from "../ContactCard/ContactCard";

function Home() {
  const [contacts, setContacts] = useState<Contact[]>([
    {
      firstName: "John",
      lastName: "Doe",
      phoneNumber: 9995551234,
      isFavorite: true,
    },
    {
      firstName: "Jane",
      lastName: "Apple",
      phoneNumber: 9995551234,
      isFavorite: false,
    },
    {
      firstName: "Jack",
      lastName: "Ripper",
      phoneNumber: 9995551234,
      isFavorite: true,
    },
  ]);

  function updateContacts(contact: Contact) {
    // Copy
    const tempContacts = contacts.slice(0);

    // Change
    tempContacts.push(contact);

    // Replace
    setContacts(tempContacts);
  }

  function removeContactByIndex(index: number) {
    const tempContacts = contacts.slice(0);

    tempContacts.splice(index, 1);

    setContacts(tempContacts);
  }

  function changeFavorite(index: number, favorited: boolean) {
    const tempContacts = contacts.slice(0);

    tempContacts[index].isFavorite = favorited;

    setContacts(tempContacts);
  }

  return (
    <div className="Home">
      <div className="NewContactForm">
        <ContactForm updateContacts={updateContacts} />
      </div>
      <div className="ContactListBox">
        {contacts
          .sort((a: { lastName: string }, b: { lastName: any }) =>
            a.lastName.localeCompare(b.lastName)
          )
          .map((contact: Contact, index: any) => (
            <ContactCard
              key={contact.toString()}
              contacts={contact}
              remove={() => {
                removeContactByIndex(index);
              }}
              changeFavorite={(favorited: boolean) => {
                changeFavorite(index, favorited);
              }}
            ></ContactCard>
          ))}
      </div>
    </div>
  );
}

export default Home;
