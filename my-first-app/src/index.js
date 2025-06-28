import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const BookList = () => {
  return <section className='booklist'>
    <Book />
    <Book />
    <Book />
    <Book />
  </section>
}

const Book = () => {
  return <article className='book'>
    <Image />
    <Title />
    <Author />
  </article>
}

const Image = () => <h2><img src='https://images-na.ssl-images-amazon.com/images/I/91ZVf3kNrcL._AC_UL600_SR600,400_.jpg' alt='he Let Them Theory' /></h2>
const Title = () => <h2>he Let Them Theory</h2>
const Author = () => {
  return <h4>Mel Robbins</h4>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />)