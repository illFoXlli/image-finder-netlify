import PropTypes from 'prop-types';
import { InputFilter, Box } from './Filter.styled';

const Filter = ({ setFilter }) => {
  return (
    <Box>
      <InputFilter
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={e => setFilter(e)}
      />
    </Box>
  );
};

Filter.propTypes = {
  setFilter: PropTypes.func.isRequired,
};

export default Filter;
