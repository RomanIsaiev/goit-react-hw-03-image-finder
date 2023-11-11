import { Component } from 'react';
import { ImageModal } from 'components/Modal/Modal';
import { GalleryListItem, ImageListItem } from './ImageGalleryItem.styled';

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
        <GalleryListItem
          className="gallery-item"
          key={index}
          onClick={this.openModal}
        >
          <ImageListItem src={webformatURL} alt={type} />
        </GalleryListItem>
        <ImageModal
          isOpen={isModalOpen}
          onClose={this.closeModal}
          largeImageURL={largeImageURL}
        />
      </div>
    );
  }
}
