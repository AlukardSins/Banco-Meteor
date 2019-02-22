import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import Front from '/imports/ui/Front'

Meteor.startup(() => {
  render(<Front />, document.getElementById('app'));
});
