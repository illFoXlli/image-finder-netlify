import { ModalWindow, BackDrop, Img } from './Modal.styled';
import ReactDOM from 'react-dom';

const Modal = ({ arrayPictures, id, modalOn }) => {
  const picture = arrayPictures.filter(item => item.id === id);
  return ReactDOM.createPortal(
    <BackDrop onClick={modalOn}>
      <ModalWindow>
        <Img src={picture[0].largeImageURL} alt={picture[0].tags} />
      </ModalWindow>
    </BackDrop>,
    document.getElementById('modal')
  );
};

export default Modal;
