import { Component } from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  handleSearchQueryChange = event => {
    this.setState({ searchQuery: event.currentTarget.value.toLowerCase() });
  };

  handleSearchQuerySubmit = event => {
    event.preventDefault();

    if (this.state.searchQuery.trim() === '') {
      toast.warn('The field must not be empty');
      return;
    }

    this.props.onSubmit(this.state.searchQuery);
    this.setState({ searchQuery: '' });
  };

  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.handleSearchQuerySubmit}>
          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleSearchQueryChange}
          />

          <button type="submit" className="button">
            <span className="button-label">
              <BiSearchAlt2 style={{ marginRight: 8 }} />
              Search
            </span>
          </button>
        </form>
      </header>
    );
  }
}
