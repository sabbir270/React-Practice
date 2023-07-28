import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const books = [
    {
        author: 'Martin J. Sherwin',
        title: 'American Prometheus: The Triumph and Tragedy',
        img: './images/book-1.jpg',
        id:1,
    },
    {
        author: 'Hanya Yanagihara',
        title: 'A Little Life Paperback',
        img: './images/book-2.jpg',
        id:2,
    },
]
const BookList=() => {
    return (<section className='booklist'>
        {books.map((book) => {
            const {img,title,author,id}=book
            return <Book img={img} title={title} author={author} key={id}/>
        })}
        

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
