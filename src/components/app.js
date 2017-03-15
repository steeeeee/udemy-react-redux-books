import React, { Component } from 'react';

// Components
import BookList from '../containers/book-list';
import BookDetails from '../containers/book-details';

export default class App extends Component {
  render() {
    return (
      <div>
        <BookList />
        <BookDetails />
      </div>
    );
  }
}
