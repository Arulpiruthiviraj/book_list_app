import BookActionTypes from "./actionTypes";
import { bookData } from "../../assets/demo_data/bookData";

export const loadBooksData = () => async (dispatch) => {
  dispatch({
    type: BookActionTypes.LOAD_BOOKS,
    payload: bookData,
  });
};

export const addBook = (book) => async (dispatch) => {
  dispatch({
    type: BookActionTypes.ADD_BOOK,
    payload: book,
  });
};

export const deleteBook = (book) => async (dispatch) => {
  dispatch({
    type: BookActionTypes.DELETE_BOOK,
    payload: book,
  });
};

export const editBook = (book) => async (dispatch) => {
  dispatch({
    type: BookActionTypes.EDIT_BOOK,
    payload: book,
  });
};
export const updateBook = (book) => async (dispatch) => {
  dispatch({
    type: BookActionTypes.UPDATE_BOOK,
    payload: { book: book, id: book.book_id },
  });
};
