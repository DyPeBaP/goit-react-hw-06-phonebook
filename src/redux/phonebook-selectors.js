export const selectorFilter = (state) => state.contacts.filter;
export const selectorContacts = (state) => state.contacts.items;

export const setSelectorContacts = (state) => {
  const contacts = selectorContacts(state);
  const filter = selectorFilter(state);

  const lowerCaseFilter = filter.toLowerCase();
  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(lowerCaseFilter)
  );
};
