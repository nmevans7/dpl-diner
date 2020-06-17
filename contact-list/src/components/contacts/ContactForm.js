import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

class ContactForm extends Component{
state = { firstName: '', phone: ''}

handleChange = (e) => {
  const { name, value } = e.target
  this.setState({ [name]: value })
}

handleSubmit = (e) => {
  e.preventDefault();
  this.props.addContact(this.state)
  this.setState({ firstName: '', phone: ''})

}

render() {
  const { firstName, phone } = this.state
  return(
    <Form onSubmit={this.handleSubmit}>
      <Form.Input
        name='firstName'
        value={firstName}
        onChange={this.handleChange}
        required
        label='First Name'
      />
      <Form.Input
        name='phone'
        value={phone}
        onChange={this.handleChange}
        required
        label='phone'
      />
      <Form.Button>Submit</Form.Button>
    </Form>
  )
}
}

export default ContactForm;