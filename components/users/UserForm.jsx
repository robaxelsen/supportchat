import React, {Component} from 'react';

class UserForm extends Component{
  onSubmit(e){
    e.preventDefault();
    const node = this.refs.User;
    const UserName = node.value;
    this.props.addUser(UserName);
    node.value = '';
  }
  render(){
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <div className='form-group'>
          <input
            className='form-control'
            placeholder='Add User'
            type='text'
            ref='User'
          />
        </div>
      </form>
    )
  }
}

UserForm.propTypes = {
  addUser: React.PropTypes.func.isRequired
}

export default UserForm
