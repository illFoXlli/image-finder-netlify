import { useState, useEffect } from 'react';
import ImageGallery from '../ImageGallery/';
import { Wrapper } from './App.styled';
import { Searchbar } from '../Searchbar';
import Button from '../Button';
import faechAPI from '../faechAPI';
import Modal from '../Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../Loader';

export const App = () => {
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [input, setInput] = useState('');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const notify = () => toast('Wow so easy!');

  const modalOn = data => {
    setData(data);
    setShowModal(!showModal);
  };
  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      modalOn();
    }
  };

  const submitForm = value => {
    if (value === '' && input === '') {
      notify();
      return;
    }
    setPage(1);
    setInput(value);

    setPage(1);
  };

  const nextPage = () => {
    setLoading(true);
    setPage(prevPage => {
      return prevPage + 1;
    });
  };

  useEffect(() => {
    if (input === '') {
      return;
    }

    setLoading(true);
    const fn = async () => {
      try {
        const dataArray = await faechAPI(input, page);

        if (page !== 1) {
          setPhotos(prevPhotos => [...prevPhotos, ...dataArray]);
        } else {
          setPhotos([...dataArray]);
        }
      } catch (arr) {
        console.log(arr);
      } finally {
        setLoading(false);
      }
    };

    fn();
  }, [input, page]);

  return (
    <>
      <Searchbar submitForm={submitForm} returnInpet={input} />
      <ToastContainer />
      <Loading />
      {showModal && (
        <Modal
          pictur={data}
          modalOn={modalOn}
          handleKeyDown={handleKeyDown}
          loading={loading}
        />
      )}
      {!photos.length ? (
        ''
      ) : (
        <>
          <Wrapper>
            <ImageGallery arrayPictures={photos} modalOn={modalOn} />
          </Wrapper>
          <Button nextPage={nextPage} />
        </>
      )}
    </>
  );
};
