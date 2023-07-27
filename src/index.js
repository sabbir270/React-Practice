import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const BookList=() => {
    return (<section className='booklist'>
        <Book />
        <Book />
        <Book />

    </section>);
}
const Book = () => {
    const title = 'Martin J. Sherwin';
    return <article className='book'>
        <img src="./images/book-1.jpg" alt='American Prometheus: The Triumph and Tragedy' />
        <h2>American Prometheus: The Triumph and Tragedy</h2>
        <h4>{ title }</h4>
    </article>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList/>);
