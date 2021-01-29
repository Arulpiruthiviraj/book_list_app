import BookActionTypes from "./actionTypes";
import { addBookToList, removeBookFromList } from "./utils";

const INITIAL_STATE = {
  books: [],
  modal: false,
  editing: false,
  selectedBook: null,
};
const bookReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BookActionTypes.LOAD_BOOKS:
      return {
        ...state,
        books: action.payload,
      };
    case BookActionTypes.ADD_BOOK:
      return {
        ...state,
        editing: false,
        books: addBookToList(state.books, action.payload),
      };
    case BookActionTypes.DELETE_BOOK:
      return {
        ...state,
        books: removeBookFromList(state.books, action.payload),
      };
    case BookActionTypes.EDIT_BOOK:
      return {
        ...state,
        editing: true,
        selectedBook: action.payload,
      };
    case BookActionTypes.UPDATE_BOOK:
      return {
        ...state,
        editing: false,
        books: state.books.map((book) =>
          book.book_id === action.payload.id ? action.payload.book : book
        ),
      };
    case BookActionTypes.EDITING_FALSE:
      return {
        ...state,
        editing: false,
        selectedBook: null,
      };

    default:
      return state;
  }
};

export default bookReducer;
