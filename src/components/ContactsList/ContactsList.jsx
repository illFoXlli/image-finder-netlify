import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { Contacts, ContactsItem, Button } from './Contacts.styled';

const ContactsList = ({ toShow, onDeleteContact, error }) => {
  if (toShow().length) {
    return (
      <Contacts>
        {toShow().map(contact => {
          return (
            <ContactsItem key={nanoid()}>
              <p>{`${contact.name}: ${contact.number}`}</p>
              <Button type="button" onClick={() => onDeleteContact(contact.id)}>
                Delete
              </Button>
            </ContactsItem>
          );
        })}
      </Contacts>
    );
  } else {
    error('List is empty');
    return <p>List is empty</p>;
  }
};
ContactsList.propTypes = {
  toShow: PropTypes.func.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
  error: PropTypes.func,
};

export default ContactsList;
