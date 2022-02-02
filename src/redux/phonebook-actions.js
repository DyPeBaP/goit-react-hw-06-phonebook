import shortid from "shortid";
import { createAction } from "@reduxjs/toolkit";

export const contactAdd = createAction("contact/add", (name, number) => ({
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
}));
export const contactDelite = createAction("contact/delite");
export const filterChange = createAction("filter/change");
const Actions = { contactAdd, contactDelite, filterChange }
export default Actions;
