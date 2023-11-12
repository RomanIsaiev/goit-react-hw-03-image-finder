import { Component } from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  HeaderSearchbar,
  Form,
  SearchFormButton,
  SearchFormInput,
} from './Searchbar.styled';

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
      toast.warn('This field must not be empty or must be changed');
      return;
    }

    this.props.onSubmit(this.state.searchQuery);
  };

  render() {
    return (
      <HeaderSearchbar>
        <Form onSubmit={this.handleSearchQuerySubmit}>
          <SearchFormInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleSearchQueryChange}
          />

          <SearchFormButton type="submit">
            <span>
              <BiSearchAlt2 style={{ width: 25, height: 25 }} />
            </span>
          </SearchFormButton>
        </Form>
      </HeaderSearchbar>
    );
  }
}
