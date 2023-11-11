import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { Searchbar } from './Searchbar/Searchbar';
import { fetchImages } from './ApiService/ApiService';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';

export class App extends Component {
  state = {
    searchQuery: '',
    images: [],
    page: 1,
    loadMore: false,
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
      try {
        this.setState({ isLoading: true });
        fetchImages(this.state.searchQuery, page).then(response => {
          this.setState({
            images: response.hits,
            loadMore: true,
          });
        });
      } catch (error) {
        console.log(error);
      } finally {
        this.setState({ isLoading: false });
      }
    }

    if (this.state.page !== prevState.page) {
      try {
        this.setState({ isLoading: true });
        fetchImages(this.state.searchQuery, page).then(response => {
          this.setState(prevState => ({
            images: [...prevState.images, ...response.hits],
          }));
          if (this.state.page > Math.round(response.totalHits / 12)) {
            this.setState({ loadMore: false });
          }
        });
      } catch (error) {
        console.log(error);
      } finally {
        this.setState({ isLoading: false });
      }
    }
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
        {this.state.images.length > 0 && (
          <ImageGallery imagesArray={this.state.images} />
        )}
        {this.state.isLoading && <b>LOADING...</b>}
        {this.state.loadMore && <Button nextPage={this.nextPage} />}
      </div>
    );
  }
}
