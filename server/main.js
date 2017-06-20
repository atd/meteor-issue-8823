import { Meteor } from 'meteor/meteor';

import { Success } from '../imports/collections';

Meteor.startup(() => {
  // code to run on server at startup
  console.log(Success);
});
