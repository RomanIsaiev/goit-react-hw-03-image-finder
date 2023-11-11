import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Searchbar } from './Searchbar/Searchbar';
import { fetchImages } from './ApiService/ApiService';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';

export class App extends Component {
  state = {
    searchQuery: '',
    images: [],
    page: 1,
    isLoading: false,
  };

  handleFormSubmit = searchQuery => {
    console.log(searchQuery);
    this.setState({ searchQuery });
  };

  componentDidMount() {
    // if (this.state.images.length !== 0) {
    //   this.setState(prevState => {
    //     return {
    //       images: [...(prevState.images + this.state.images)],
    //     };
    //   });
    // }
  }

  async componentDidUpdate(prevProps, prevState) {
    console.log(prevProps);
    console.log(prevState);
    if (
      this.state.page !== prevState.page ||
      this.state.searchQuery !== prevState.searchQuery
    ) {
      try {
        const initialImages = await fetchImages(
          this.state.searchQuery,
          this.state.page
        );
        this.setState({ images: initialImages });
      } catch (error) {
        console.log(error);
      }
    }
  }

  nextPage = newPage => {
    this.setState(prevState => {
      console.log(newPage);
      console.log('prev page:', prevState);
      console.log(this.state.page);
      console.log(prevState.images);
      console.log(this.state.images);
      return {
        page: prevState.page + 1,
      };
    });
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ToastContainer autoClose={3000} position="top-center" />
        <ImageGallery imagesArray={this.state.images} />
        <Button nextPage={this.nextPage} />
      </div>
    );
  }
}
