import s from "./ContactList.module.css";
import { useSelector, useDispatch } from "react-redux";
import { contactDelite } from '../../redux/phonebook-actions';
import { setSelectorContacts } from '../../redux/phonebook-selectors';
import ContactListItem from "../ContactListItem/ContactListItem";

function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(setSelectorContacts);
  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => (
        <li className={s.item} key={id}>
          <ContactListItem key={id} name={name} number={number} />
          <button
            className={s.buttonDelete}
            type="button"
            onClick={() => dispatch(contactDelite(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
