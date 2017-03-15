import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetails extends Component {
    render() {
        if (!this.props.book) {
            return <div className="col-sm-6">Select a book to get started</div>
        }
        return (
            <div className="col-sm-6">
                <h2>{this.props.book.author}</h2>
                <h1>{this.props.book.title}</h1>
                <h3>Pages: {this.props.book.pages}</h3>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        book: state.activeBook
    };
}

export default connect(mapStateToProps)(BookDetails)

