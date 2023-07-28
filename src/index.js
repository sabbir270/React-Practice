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
        <Book title={ firstBook.title } author={firstBook.author} img={firstBook.img} />
        <Book title={ secondBook.title } author={secondBook.author} img={secondBook.img} />
        

    </section>);
}
const Book = ({img,title,author}) => {
    
    return <article className='book'>
        <img src={img} alt={title} />
        <h2>{ title }</h2>
        <h4>{author}</h4>

    </article>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList/>);
