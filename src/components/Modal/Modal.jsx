import { ModalWindow, BackDrop, Img } from './Modal.styled';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

const Modal = ({ pictur, modalOn, handleKeyDown, loading }) => {
  const closeModel = e => {
    if (e.target === e.currentTarget) {
      modalOn(null);
    }
  };
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return ReactDOM.createPortal(
    <BackDrop onClick={closeModel}>
      <ModalWindow>
        <Img src={pictur.largeImageURL} alt={pictur.tags} />
      </ModalWindow>
    </BackDrop>,
    document.getElementById('modal')
  );
};

Modal.propTypes = {
  pictur: PropTypes.object,
  modalOn: PropTypes.func,
  handleKeyDown: PropTypes.func,
};

export default Modal;
