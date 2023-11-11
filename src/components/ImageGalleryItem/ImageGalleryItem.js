// export const ImageGalleryItem = ({ data: { webformatURL, type, index } }) => {
// return (
//   <li className="gallery-item" key={index}>
//     <img src={webformatURL} alt={type} />
//   </li>
// );
// };

import { Component } from 'react';
import { ImageModal } from 'components/Modal/Modal';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({
      isModalOpen: true,
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  render() {
    const { isModalOpen } = this.state;
    const {
      data: { webformatURL, type, index, largeImageURL },
    } = this.props;

    return (
      <div>
        <li className="gallery-item" key={index} onClick={this.openModal}>
          <img src={webformatURL} alt={type} />
        </li>
        <ImageModal
          isOpen={isModalOpen}
          onClose={this.closeModal}
          largeImageURL={largeImageURL}
        />
      </div>
    );
  }
}
