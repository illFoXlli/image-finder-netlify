import { ListItem, Img } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ tags, webformatURL, modalOn, id }) => {
  return (
    <ListItem>
      <Img src={webformatURL} alt={tags} onClick={() => modalOn(id)} />
    </ListItem>
  );
};

export default ImageGalleryItem;
