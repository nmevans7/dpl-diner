import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
class ContactForm extends Component {
  state = { firstName: '', phone: '' }
  componentDidMount() {
    if (this.props.id) {
      const { firstName, phone } = this.props
      this.setState({ firstName, phone  })
    }
  }
  // change the state to be the user input
  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
    // this.setState({ firstName: 'bob' })
    // this.setState({ phone: '1123-123-1233' })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.id) {
      this.props.updateContact( this.props.id, this.state )
    } else {
      // add the contact to the array of obj
      this.props.addContact(this.state)
    }
    // clear out the form
    this.setState({ firstName: '', phone: '' })
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





