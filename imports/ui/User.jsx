import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import Users from '../api/users';

class User extends Component {
  render() {
    const users = this.props.users.map(
      user => this.makeUser(user)
    );

    return (
      <div>
        <h2>Usuarios</h2>
        <ul>{ users }</ul>
      </div>
    );
  }

  makeUser(user) {
    return (
      <li key={user._id}>
        <a href={user.doc_name} target="_blank">{user.name}</a>
      </li>
    );
  }
}

export default UserContainer = withTracker(() => {
  return {
    users: Users.find().fetch(),
  };
})(User);
