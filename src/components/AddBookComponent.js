import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

import { addBook, updateBook } from "../redux/book/actions";

import { PropTypes } from "prop-types";

import { connect } from "react-redux";

const AddBookComponent = ({
  addBook,
  modalClose,
  updateBook,

  books: { books, editing, modal, selectedBook },
}) => {
  const initialFormState = {
    book_id: "",
    book_name: "",
    book_price: "",
    book_category: "",
  };
  const [book, setBook] = useState(editing ? selectedBook : initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBook({ ...book, [name]: value });
  };

  const updateRecord = (e, updatedRecord) => {
    e.preventDefault();
    updateBook(book);
    modalClose();
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
    book.book_id = books.length + 1;

    addBook(book);
    modalClose();
    setBook(initialFormState);
  };

  return (
    <Form
      onSubmit={(e) => {
        editing ? updateRecord(e) : onFormSubmit(e);
      }}
    >
      <Form.Group controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="book_name"
          value={book.book_name}
          placeholder="Enter the Name of the Book"
          onChange={(e) => handleInputChange(e)}
          required
        />
      </Form.Group>

      <Form.Group controlId="formBasicPrice">
        <Form.Label>Price</Form.Label>
        <Form.Control
          type="number"
          name="book_price"
          value={book.book_price}
          placeholder="Enter the Price"
          onChange={(e) => handleInputChange(e)}
          required
        />
      </Form.Group>

      <Form.Group controlId="formBasicCategory">
        <Form.Label>Category</Form.Label>
        <Form.Control
          type="text"
          name="book_category"
          value={book.book_category}
          placeholder="Enter the Category"
          onChange={(e) => handleInputChange(e)}
          required
        />
      </Form.Group>

      <Button variant="success" type="submit" block>
        {editing ? "Update" : "Add"}
      </Button>
    </Form>
  );
};

AddBookComponent.propTypes = {
  addBook: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  books: state.book,
});

export default connect(mapStateToProps, { addBook, updateBook })(
  AddBookComponent
);
