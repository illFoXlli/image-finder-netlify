import { Component } from 'react';
import {
  HesderSearchbar,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './Searchbar.styled.js';
import { FiAperture } from 'react-icons/fi';

export class Searchbar extends Component {
  state = {
    input: '',
  };

  inputValue = () => {
    this.props.returnInpet(this.state.input);
  };
  handleSubmit = e => {
    this.props.submitForm(e);
    // this.setState({ input: '' });
    this.props.returnInpet(this.state.input);
  };

  saveInputState = e => {
    this.setState({ input: e.target.value });
  };

  render() {
    return (
      <HesderSearchbar>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit">
            {/* <SearchFormButtonLabel> */}
            <FiAperture style={{ width: '36px', height: '44px' }} />
            {/* </SearchFormButtonLabel> */}
          </SearchFormButton>

          <SearchFormInput
            onChange={this.saveInputState}
            name="name"
            type="text"
            autocomplete="off"
            // autofocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </HesderSearchbar>
    );
  }
}
