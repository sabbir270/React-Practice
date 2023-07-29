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
const BookList = () => {
    const someValue = 'shakeAndBake'
    const displayValue = () => {
        console.log(someValue);
    }
    return (<section className='booklist'>
      
        {books.map((book) => {
            return <Book {...book}    key={book.id} displayValue={displayValue} />
        })}
       
    </section>);
}



const Book = (props) => {
    const { img, title, author,displayValue } = props

    return <article className='book'>
        <img src={img} alt={title} />
        <h2>{title}</h2>
        <button onClick={displayValue}>click me</button>
        <h4>{author}</h4>

    </article>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList/>);
