import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const title = 'American Prometheus: The Triumph and Tragedy';
const author = 'Martin J. Sherwin';
const img = './images/book-1.jpg';
const BookList=() => {
    return (<section className='booklist'>
        <Book />
        <Book job="dveloper" />
        <Book title="random" number={ 22 } />

    </section>);
}
const Book = (props) => {
    console.log(props)
    return <article className='book'>
        <img src={img} alt={title} />
        <h2>{ title }</h2>
        <h4>{author}</h4>
        <p>{ props.job}</p>
        <p>{props.title}</p>
        <p>{ props.number}</p>
    </article>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList/>);
