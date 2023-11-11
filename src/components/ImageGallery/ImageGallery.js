import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { GalleryList } from './ImageGallery.styled';

export const ImageGallery = ({ imagesArray }) => {
  return (
    <GalleryList>
      {imagesArray.map((item, index) => (
        <ImageGalleryItem data={item} key={index} />
      ))}
    </GalleryList>
  );
};
