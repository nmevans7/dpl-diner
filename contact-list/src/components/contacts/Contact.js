import React from 'react';
import { Button, Table } from 'semantic-ui-react';
import ContactForm from './ContactForm'

const Contact = ({ id, firstName, phone, deleteContact, updateContact }) => (
  <Table.Row>
    <Table.Cell>{firstName}</Table.Cell>
    <Table.Cell>{phone}</Table.Cell>
    <Table.Cell>
      <Button color='red' onClick={ () => deleteContact(id) }>
        Delete
      </Button>
      <ContactForm updateContact={updateContact}
      id={id}
      firstName={firstName}
      phone={phone}/>
    </Table.Cell>
  </Table.Row>
)
export default Contact;