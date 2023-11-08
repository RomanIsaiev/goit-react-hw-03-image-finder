import { Component } from 'react';
import axios from 'axios';
import { Searchbar } from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    searchQuery: '',
    // loading: false,
  };

  handleFormSubmit = searchQuery => {
    console.log(searchQuery);
    this.setState({ searchQuery });
  };

  // async componentDidMount() {
  //   this.setState({ loading: true });

  //   axios({
  //     method: 'get',
  //     url: `https://pixabay.com/api/?q=cat&page=1&key=39745378-dd24554a2bcf90950765bc548&image_type=photo&orientation=horizontal&per_page=12`,
  //   })
  //     .then(response => response.data)
  //     .then(apiArray => apiArray.hits)
  //     .then(oneImage => oneImage[0])
  //     .then(images => {
  //       console.log(images);
  //       return this.setState({ images });
  //     })
  //     .finally(() => this.setState({ loading: false }));
  // }

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {/* {this.state.loading && <h2>Загрузка...</h2>}
        {this.state.images && <div>{this.state.images.previewURL}</div>} */}
      </div>
    );
  }
}
