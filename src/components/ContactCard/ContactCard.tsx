import { Contact } from "../../models/Contact";
import "./ContactCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

interface ContactCardProps {
  contacts: Contact;
  remove(): void;
  changeFavorite(favorited: boolean): void;
}

function ContactCard({ contacts, remove, changeFavorite }: ContactCardProps) {
  return (
    <div className="ContactCard">
      <div className="fullName">
        <h2>
          {contacts.firstName} {contacts.lastName}
        </h2>
      </div>
      <div className="details">
        <h3>{contacts.phoneNumber}</h3>
        {contacts.isFavorite ? (
          <p
            onClick={() => {
              changeFavorite(false);
            }}
          >
            ❤️
          </p>
        ) : (
          <p
            onClick={() => {
              changeFavorite(true);
            }}
          >
            <FontAwesomeIcon icon={faHeart} />
          </p>
        )}
        <button className="trashcan" onClick={remove}>
          🗑️
        </button>
      </div>
    </div>
  );
}

export default ContactCard;
