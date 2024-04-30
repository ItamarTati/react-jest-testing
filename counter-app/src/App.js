import React, { useState } from 'react';
import './App.css'; // Importing CSS file for styling

const App = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(prevCount => prevCount + 1);
    };

    const decrement = () => {
        setCount(prevCount => prevCount - 1);
    };

    return (
        <div className="container" data-testid="app">
            <h2 className="title">Counter App</h2>
            <div className="counter-container">
                <button className="button" onClick={increment} data-testid="increment">Increment</button>
                <span className="count" data-testid="counter" >{count}</span>
                <button className="button" onClick={decrement} data-testid="decrement">Decrement</button>
            </div>
        </div>
    );
};

export default App;