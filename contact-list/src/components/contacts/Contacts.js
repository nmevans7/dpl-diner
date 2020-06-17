import React from  'react';
import { Table } from 'semantic-ui-react';
import Contact from './Contact';

const Contacts = ({contacts, deleteContact}) => (
<Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>First Name</Table.HeaderCell>
        <Table.HeaderCell>Phone</Table.HeaderCell>
        <Table.HeaderCell>Options</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      { 
      contacts.map( c => (
         <Contact key={c.id} {...c} deleteContact={deleteContact}/>
        
        ))
      }
    </Table.Body>
    </Table>

)

export default Contacts