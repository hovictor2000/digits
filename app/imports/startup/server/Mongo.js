import { Meteor } from 'meteor/meteor';
import { Contacts } from '../../api/contact/Contacts';

/* eslint-disable no-console */

// Initialize the database with a default data document.
function addContacts(data) {
  console.log(`  Adding: ${data.firstName} (${data.owner})`);
  Contacts.collection.insert(data);
}

// Initialize the ContactsCollection if empty.
if (Contacts.collection.find().count() === 0) {
  if (Meteor.settings.defaultContacts) {
    console.log('Creating default contacts.');
    Meteor.settings.defaultContacts.map(data => addContacts(data));
  }
}
