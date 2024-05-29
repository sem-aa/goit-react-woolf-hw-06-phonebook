import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts.contacts;

export const getFilter = state => state.filters;

export const selectVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.filter.toLowerCase())
    );
  }
);
