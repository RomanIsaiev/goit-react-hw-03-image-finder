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

  componentDidMount() {}

  async componentDidUpdate(prevProps, prevState) {
    const { page } = this.state;

    if (this.state.searchQuery !== prevState.searchQuery) {
      fetchImages(this.state.searchQuery, page).then(response => {
        this.setState({ images: response });
      });
    } else if (this.state.page !== prevState.page) {
      fetchImages(this.state.searchQuery, page).then(response => {
        this.setState(prevState => ({
          images: [...prevState.images, ...response],
        }));
      });
    }

    // if (
    //   this.state.page !== prevState.page ||
    //   this.state.searchQuery !== prevState.searchQuery
    // ) {
    //   fetchImages(this.state.searchQuery, page).then(response => {
    //     this.setState(prevState => ({
    //       images: [...prevState.images, ...response],
    //     }));
    //   });
    // }
  }

  nextPage = () => {
    this.setState(prevState => {
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
        {this.state.images.length > 0 && <Button nextPage={this.nextPage} />}
      </div>
    );
  }
}
