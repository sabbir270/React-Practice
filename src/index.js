import React from 'react';
import ReactDOM from 'react-dom/client';
function Greeting() {
    return (
        <div>
            <Person/>

            <h1>hey</h1>
            <Message/>
            
        </div>
    );
}
const Person = () => <h2>john doe</h2>
const Message = () => {
    return <p>this is my message</p>;
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Greeting/>);
