import { combineReducers } from 'redux';

// Reducers
import BookList from './reducer_books';
import ActiveBook from './reducer_active_book';

const rootReducer = combineReducers({
    books: BookList,
    activeBook: ActiveBook
});

export default rootReducer;
