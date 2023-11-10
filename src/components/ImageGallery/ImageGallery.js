import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ imagesArray }) => {
  return (
    <ul>
      {imagesArray.map(item => (
        <ImageGalleryItem data={item} key={item.id} />
      ))}
    </ul>
  );
};
