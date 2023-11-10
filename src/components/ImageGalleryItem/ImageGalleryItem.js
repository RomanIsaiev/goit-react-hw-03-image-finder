export const ImageGalleryItem = ({ data: { webformatURL, type, id } }) => {
  return (
    <li className="gallery-item" key={id}>
      <img src={webformatURL} alt={type} />
    </li>
  );
};
