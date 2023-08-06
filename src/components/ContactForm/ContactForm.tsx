import { Contact } from "../../models/Contact";
import { FormEvent, useState } from "react";
import "./ContactForm.css";

interface ContactFormProps {
  updateContacts(contact: Contact): void;
}

function ContactForm({ updateContacts }: ContactFormProps) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState<number>(9999999999);
  const [isFavorite, setIsFavorite] = useState<boolean>();

  function onAdd(event: FormEvent) {
    event.preventDefault();
    const contact: Contact = {
      firstName,
      lastName,
      phoneNumber: 9999999999,
      isFavorite: isFavorite ? true : false,
    };

    setFirstName("");
    setLastName("");
    setPhoneNumber(9999999999);
    setIsFavorite(false);

    updateContacts(contact);
  }

  return (
    <form className="ContactForm" onSubmit={onAdd}>
      <label htmlFor="firstName">First Name:</label>
      <input
        className="inputBox"
        type="text"
        id="firstName"
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)}
      ></input>

      <label htmlFor="lastName">Last Name:</label>
      <input
        className="inputBox"
        type="text"
        id="lastName"
        value={lastName}
        onChange={(event) => setLastName(event.target.value)}
      ></input>

      <label htmlFor="phoneNumber">Phone Number:</label>
      <input
        className="inputBox"
        type="number"
        id="phoneNumber"
        value={phoneNumber}
        onChange={(event) => setPhoneNumber(parseInt(event.target.value))}
      ></input>
      <div className="formBottom">
        <div className="checkbox">
          <label htmlFor="isFavorite">Set as Favorite?</label>
          <input
            type="checkbox"
            name="isFavorite"
            id="isFavorite"
            onChange={(e) => setIsFavorite(e.target.checked)}
            checked={isFavorite}
          />
        </div>
        <button type="submit">Add Contact</button>
      </div>
    </form>
  );
}

export default ContactForm;
