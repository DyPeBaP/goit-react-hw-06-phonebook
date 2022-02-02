import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { contactAdd, contactDelite, filterChange } from "./phonebook-actions";

const initialContacts = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

export function getNewContact(state, { payload }) {
  const haveContact = state.some(({ name }) => name === payload.name);
  return !haveContact
    ? [...state, payload]
    : alert(`A ${payload.name} with the same name has already been added`);
}

export const items = createReducer(initialContacts, {
  [contactAdd]: (state, action) => getNewContact(state, action),
  [contactDelite]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

export const filter = createReducer("", {
  [filterChange]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
