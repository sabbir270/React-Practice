import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const firstBook = {
    author: 'Martin J. Sherwin',
    title: 'American Prometheus: The Triumph and Tragedy',
    img: './images/book-1.jpg',
}

const secondBook = {
    author: 'Hanya Yanagihara',
    title: 'A Little Life Paperback',
    img: './images/book-2.jpg',
}

const BookList=() => {
    return (<section className='booklist'>
        <Book title={firstBook.title} author={firstBook.author} img={firstBook.img} >
        <p>Consequat eu occaecat reprehenderit Lorem tempor quis aute aliqua ex pariatur fugiat. Id aliqua excepteur ex reprehenderit incididunt dolore eiusmod voluptate ipsum ex et consectetur culpa cillum. Pariatur sunt voluptate qui ea tempor in nostrud quis ullamco nostrud nulla proident cillum est. Est dolor non mollit pariatur eu eiusmod exercitation commodo in mollit amet nisi nostrud do. Do duis quis do velit deserunt eiusmod.</p>
        <button>click me</button>
        </Book>
        <Book title={ secondBook.title } author={secondBook.author} img={secondBook.img} />
        

    </section>);
}
const Book = ({img,title,author,children}) => {
    
    return <article className='book'>
        <img src={img} alt={title} />
        <h2>{ title }</h2>
        <h4>{author}</h4>
        {children}

    </article>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList/>);
