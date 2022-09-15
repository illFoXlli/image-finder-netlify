import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

const ContactsList = ({ toShow, onDeleteContact, error }) => {
  if (toShow().length) {
    return (
      <ul>
        {toShow().map(contact => {
          return (
            <li key={nanoid()}>
              <p>{`${contact.name}: ${contact.number}`}</p>
              <button type="button" onClick={() => onDeleteContact(contact.id)}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
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
