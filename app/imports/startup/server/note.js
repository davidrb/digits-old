import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Notes } from '../../api/note/note.js';

/** This subscription publishes only the documents associated with the logged in user */
Meteor.publish('Notes', function publish() {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return Notes.find({ owner: username });
  }
  return this.ready();
});
