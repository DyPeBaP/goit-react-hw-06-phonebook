import { useState } from "react";
import s from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { contactAdd } from "../../redux/phonebook-actions";
// import shortid from "shortid";

function ContactForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case "name":
        return setName(value);

      case "number":
        return setNumber(value);

      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(contactAdd(name, number));
    resetForm();
  };

  const resetForm = () => {
    setName("");
    setNumber("");
  };

  // const nameId = shortid.generate();
  // const numberId = shortid.generate();

  return (
    <form className={s.formBox} onSubmit={handleSubmit}>
      <label className={s.labelName}>
        <p className={s.itemName}>Name</p>
        <input
          className={s.inputName}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={handleChange}
          value={name}
          // id={nameId}
        />
      </label>
      <label className={s.labelNumber}>
        <p className={s.itemNumber}>Number</p>
        <input
          className={s.inputNumber}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          onChange={handleChange}
          value={number}
          // id={numberId}
        />
      </label>
      <button className={s.buttonAdd} type="submit">
        Add contact
      </button>
    </form>
  );
}

export default ContactForm;
