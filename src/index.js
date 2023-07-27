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
    return <article className='book'>
        <Image />
        <Title />
        <Author/>
    </article>
}
const Image = () => <img src="https://images-na.ssl-images-amazon.com/images/I/81yfsIOijJL._AC_UL600_SR600,400_.jpg" alt='American Prometheus: The Triumph and Tragedy'/>
const Title = () => <h2>American Prometheus: The Triumph and Tragedy</h2>
const Author = () => {
    return <h2> Martin J. Sherwin </h2>;
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList/>);
