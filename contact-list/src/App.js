import React, { Component } from 'react';
import { Header, Button, Icon } from 'semantic-ui-react';
import Contacts from './components/contacts/Contacts';
import ContactForm from './components/contacts/ContactForm';
class App extends Component {
  state = { contacts: [
    { id: 1, firstName: 'John', phone: '123-123-1233'},
    { id: 2, firstName: 'Sally', phone: '123-333-1233'},
    { id: 3, firstName: 'Alex', phone: '123-125-1233'},
  ],
    showForm: true
  }
  toggleForm = () => this.setState({ showForm: !this.state.showForm })
  getId = () => {
    // NOTE We are just using this as a helper function for id's since we aren't using a db yet
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };
  // { firstName: 'bob', phone: '134134-13241234' }
  addContact = (incomingContact) => {
    const { contacts } = this.state
    const newContact = { id: this.getId(), ...incomingContact }
    this.setState({ contacts: [ newContact, ...contacts ]})
  }
  deleteContact = (id) => {
    const contacts = this.state.contacts.filter( contact => {
      if (contact.id !== id) {
        return contact
      }
    })
    this.setState({ contacts })
  }
  render() {
    const { contacts, showForm } = this.state
    return(
      <div>
        <div>
          <Button icon color='blue' onClick={this.toggleForm}>
            <Icon name={ showForm ? 'angle double up': 'angle double down'} />
          </Button>
          { 
            showForm ?
            <ContactForm addContact={this.addContact} />
            :
            null
          }
        </div>
        <Header size="huge" color='blue' textAlign='center'>
          Contact list
        </Header>
        <Contacts contacts={contacts} deleteContact={this.deleteContact}/>
      </div>
    )
  }
}
export default App;