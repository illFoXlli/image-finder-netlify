import { Component } from 'react';
import ImageGallery from '../ImageGallery/';
import ImageGalleryItem from '../ImageGalleryItem';
import { Wrapper } from './App.styled';
import axios from 'axios';

const API_KEY = '29443108-1d40bf98a6be12a2b510fdb64';
const url = 'https://pixabay.com/api/';
let q = 'cat';
let per_page = 12;
let page = 1;

export class App extends Component {
  state = {
    photos: [
      { id: null, webformatURL: '', largeImageURL: '', tags: '', type: '' },
    ],
  };

  componentDidMount() {
    const params = {
      key: API_KEY,
      q,
      per_page,
      page,
    };
    console.log('==========TYT============');
    console.log(params);

    axios.get(url, { params }).then(res => {
      return this.setState({
        photos: [res.data.hits],
      });
    });
  }

  render() {
    return (
      <Wrapper>
        <ImageGallery>
          <ImageGalleryItem />
        </ImageGallery>
      </Wrapper>
    );
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
