import React, { useState, useEffect } from "react";
import { Modal, Button, Container, Row, Col } from "react-bootstrap";
import BooksListComponent from "../components/BooksListComponent";
import AddBookComponent from "../components/AddBookComponent";
import { loadBooksData, addBook } from "../redux/book/actions";

import { PropTypes } from "prop-types";

import { connect } from "react-redux";
import { store } from "../redux/store";

const BooksListPage = ({ loadBooksData, books }) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    loadBooksData();
  }, [loadBooksData]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Container style={{ marginTop: "80px" }}>
        <Row className="justify-content-md-center">
          <Col>
            {" "}
            <Button
              variant="success"
              onClick={() => {
                handleShow();
                store.dispatch({ type: "EDITING_FALSE" });
              }}
            >
              Add
            </Button>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col>
            <BooksListComponent books={books} modalOpen={handleShow} />
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Book</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <AddBookComponent modalClose={handleClose} />
              </Modal.Body>
            </Modal>
          </Col>
        </Row>{" "}
      </Container>
    </>
  );
};

BooksListPage.propTypes = {
  loadBooksData: PropTypes.func.isRequired,
  addBook: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  books: state.book.books,
  modal: state.book.modal,
});

export default connect(mapStateToProps, { loadBooksData, addBook })(
  BooksListPage
);
