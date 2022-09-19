import { ListGallery } from './ImageGallery.styled.js';
import ImageGalleryItem from '../ImageGalleryItem';
import { nanoid } from 'nanoid';

const ImageGallery = ({ arrayPictures, modalOn }) => {
  return (
    <ListGallery>
      {arrayPictures.map(({ id, tags, webformatURL }) => (
        <ImageGalleryItem
          key={nanoid()}
          id={id}
          tags={tags}
          webformatURL={webformatURL}
          modalOn={modalOn}
        />
      ))}
    </ListGallery>
  );
};

export default ImageGallery;
