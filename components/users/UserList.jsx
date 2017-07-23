import React, {Component} from 'react';
import User from './User.jsx';

class UserList extends Component {
  render() {
    return (
      <ul>{
        this.props.users.map( chan => {
          return <User
            User={chan}
            key={chan.id}
            {...this.props}
          />
        })
      }</ul>
    )
  }
}

UserList.propTypes = {
  users: React.PropTypes.array.isRequired,
  setUser: React.PropTypes.func.isRequired,
  activeUser: React.PropTypes.object.isRequired
}

export default UserList
