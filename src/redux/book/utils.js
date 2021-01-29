export const addBookToList = (books, bookToAdd) => {
  return [...books, { ...bookToAdd }];
};

export const removeBookFromList = (books, bookToRemove) => {
  return books.filter((book) => book.book_id !== bookToRemove.book_id);
};
