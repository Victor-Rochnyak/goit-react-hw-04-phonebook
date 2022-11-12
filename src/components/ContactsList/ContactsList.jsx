import React from 'react';
import PropTypes from "prop-types";
// Стилі
import {List,Item,Button} from './ContactsList.styled'

const ContactsList = ({ contacts, onDeleteContact }) => (
  <List>
    {contacts.map(({ id, name, number }) => (
      <Item key={id}>
        {name}: {number}
        <Button onClick={()=> onDeleteContact(id)}>Delete</Button>
      </Item>
    ))}
  </List>
);
export default ContactsList;



ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
 onDeleteContact: PropTypes.func.isRequired,
};
