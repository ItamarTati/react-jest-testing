import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';


//test 1 does it render correctly
//test 2 does it increment
//test 3 does it decrement
test('the counter appears on the page, also the initial value will start at zero', () => {
    // set up
    const {getByTestId} = render(<App/>)

    //declaration
    const app = getByTestId('app');
    const counterValueElement = getByTestId('counter');


    //Assertion
    expect(app).toBeInTheDocument();
    expect(counterValueElement).toBeInTheDocument();
    expect(counterValueElement).toHaveTextContent(0);
});


test('when increment is pressed, then the counter value increases', () => {
    // set up
    const {getByTestId} = render(<App/>)

    //declaration
    const counterValueElement = getByTestId('counter');
    const incrementElement = getByTestId('increment');
    fireEvent.click(incrementElement)


    //Assertion
    expect(counterValueElement).toHaveTextContent(1);

    fireEvent.click(incrementElement);
    expect(counterValueElement).toHaveTextContent(2);
});

test('when decrement is pressed, then the counter value decrement', () => {
    // set up
    const {getByTestId} = render(<App/>)

    //declaration
    const counterValueElement = getByTestId('counter');
    const decrementElement = getByTestId('decrement');
    fireEvent.click(decrementElement)


    //Assertion
    expect(counterValueElement).toHaveTextContent(-1);

    fireEvent.click(decrementElement);
    expect(counterValueElement).toHaveTextContent(-2);
});

