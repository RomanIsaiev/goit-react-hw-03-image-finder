import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { RotatingLines } from 'react-loader-spinner';
import { Searchbar } from './Searchbar/Searchbar';
import { fetchImages } from './ApiService/ApiService';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { LoadMoreButton } from './LoadMoreButton/LoadMoreButton';
import { GlobalStyle } from 'GlobalStyle';
import { Layout } from './App.styled';
import { LoaderContainer } from './Loader/LoaderWrapper.styled';

import 'react-toastify/dist/ReactToastify.css';

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    loadMore: false,
    isLoading: false,
  };

  handleFormSubmit = searchQuery => {
    this.setState({
      query: `${Date.now()}/${searchQuery}`,
      page: 1,
      images: [],
    });
  };

  async componentDidUpdate(prevProps, prevState) {
    if (
      this.state.page !== prevState.page ||
      this.state.query !== prevState.query
    ) {
      try {
        this.setState({
          isLoading: true,
          loadMore: false,
        });
        await fetchImages(
          this.state.query.slice(14, this.state.query.length),
          this.state.page
        ).then(response => {
          if (response.total === 0) {
            return;
          }
          this.setState(prevState => ({
            images: [...prevState.images, ...response.hits],
            loadMore: true,
          }));
          if (this.state.page > Math.round(response.totalHits / 12)) {
            this.setState({ loadMore: false });
          }
        });
      } catch (error) {
        toast.error('Sorry, no pictures were found for this request');
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
      <Layout>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {this.state.images.length > 0 && (
          <ImageGallery imagesArray={this.state.images} />
        )}
        {this.state.isLoading && (
          <LoaderContainer>
            <RotatingLines
              strokeColor="grey"
              strokeWidth="5"
              animationDuration="0.75"
              width="96"
              visible={true}
            />
          </LoaderContainer>
        )}
        {this.state.loadMore && <LoadMoreButton nextPage={this.nextPage} />}
        <GlobalStyle />
        <ToastContainer autoClose={3000} position="top-right" />
      </Layout>
    );
  }
}
