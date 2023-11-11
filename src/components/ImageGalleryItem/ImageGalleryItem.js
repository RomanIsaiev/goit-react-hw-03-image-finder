export const ImageGalleryItem = ({ data: { webformatURL, type, index } }) => {
  return (
    <li className="gallery-item" key={index}>
      <img src={webformatURL} alt={type} />
    </li>
  );
};
