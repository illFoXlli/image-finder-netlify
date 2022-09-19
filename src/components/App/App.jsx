import { Component } from 'react';
import ImageGallery from '../ImageGallery/';
import { Wrapper } from './App.styled';
import { Searchbar } from '../Searchbar';
import Button from '../Button';
import faechAPI from '../faechAPI';
import Modal from '../Modal';
import Loader from '../Loader';

export class App extends Component {
  state = {
    photos: [],
    page: 1,
    status: 'idle',
    showModal: false,
    id: '',
    input: '',
  };

  returnInpet = input => {
    this.setState({ input: input });
  };
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }
  modalOn = idImg => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
    this.setState({ id: idImg });
  };
  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.modalOn();
    }
  };

  submitForm = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const faechAPIObj = faechAPI(this.state.input, this.state.page);
    faechAPIObj.then(respons =>
      this.setState({
        photos: [...respons],
      })
    );
    form.elements.name.value = '';
    this.setState({ page: 2 });
  };

  // this.setState(prevState => ({
  //       contacts: [contact, ...prevState.contacts],
  //     }));

  nextPage = () => {
    const faechAPIObj = faechAPI(this.state.input, this.state.page);
    faechAPIObj.then(respons =>
      this.setState(provState => ({
        photos: [...provState.photos, ...respons],
      }))
    );
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    if (this.state.status === 'idle') {
      return (
        <>
          <Searchbar
            submitForm={this.submitForm}
            returnInpet={this.returnInpet}
          />
          {this.state.showModal && (
            <Modal
              arrayPictures={this.state.photos}
              id={this.state.id}
              modalOn={this.modalOn}
            />
          )}
          {!this.state.photos.length ? (
            ''
          ) : (
            <>
              <Wrapper>
                <ImageGallery
                  arrayPictures={this.state.photos}
                  modalOn={this.modalOn}
                />
              </Wrapper>
              <Button nextPage={this.nextPage} />
            </>
          )}
        </>
      );
    }

    if (this.state.status === 'spiner') {
      return <Loader />;
    }
  }
}

// Забирать данны из LS
// componentDidMount() {
//   if (JSON.parse(localStorage.getItem('fox'))) {
//     this.setState({ contacts: JSON.parse(localStorage.getItem('fox')) });
//   }
// }
// Запись в LS
// componentDidUpdate(prevProps, prevState) {
//   if (this.state.contacts !== prevState.contacts) {
//     console.log('Что то обновилось типа контакт');
//     localStorage.setItem('fox', JSON.stringify(this.state.contacts));
//   }
// }
