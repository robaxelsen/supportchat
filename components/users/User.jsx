import React, {Component} from 'react';

class User extends Component{
  onClick(e){
    e.preventDefault();
    const {setUser, User} = this.props;
    setUser(User);
  }
  render() {
    const {User, activeUser} = this.props;
    const active = User === activeUser ? 'active' : '';
    return (
      <li className={active}>
        <a onClick={this.onClick.bind(this)}>
          {User.name}
        </a>
      </li>
    )
  }
}

User.propTypes = {
  user: React.PropTypes.object.isRequired,
  setUser: React.PropTypes.func.isRequired,
  activeUser: React.PropTypes.object.isRequired
}

export default User
