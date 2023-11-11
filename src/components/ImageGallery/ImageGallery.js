import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ imagesArray }) => {
  return (
    <ul>
      {imagesArray.map((item, index) => (
        <ImageGalleryItem data={item} key={index} />
      ))}
    </ul>
  );
};
