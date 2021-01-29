import React from "react";
import { Button, Table } from "react-bootstrap";
import { PropTypes } from "prop-types";
import { deleteBook, editBook } from "../redux/book/actions";
import { connect } from "react-redux";

const BooksListComponent = ({ books, deleteBook, editBook, modalOpen }) => {
  const handleBookSelect = (book) => {
    modalOpen();
    editBook(book);
  };
  return (
    <div>
      {" "}
      <Table bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th> Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {books.length > 0 ? (
            books.map((book, idx) => (
              <tr key={idx} onClick={() => handleBookSelect(book)}>
                <td>{idx + 1}</td>
                <td>{book.book_name}</td>
                <td>{`CAD ${book.book_price}`}</td>
                <td>{book.book_category}</td>
                <td>
                  {" "}
                  <Button
                    variant="danger"
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteBook(book);
                    }}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3}>No Record</td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

BooksListComponent.propTypes = {
  deleteBook: PropTypes.func.isRequired,
};

export default connect(null, { deleteBook, editBook })(BooksListComponent);
