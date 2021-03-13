import React, { useState, useEffect } from 'react';

const Fizzbuzz = () => {
    const [inputNumber, setInputNumber] = useState(1);
    const [answer, setAnswer] = useState("");

    useEffect(() => {
        console.log("Triggering FizzBuzz");
        if (inputNumber % 3 === 0 & inputNumber % 5 === 0){
            setAnswer("FizzBuzz")
        } else if(inputNumber % 3 === 0) {
            setAnswer("Fizz")
        } else if(inputNumber % 3 === 0) {
            setAnswer("Buzz")
        } else {
            setAnswer(inputNumber);
        }
    }, inputNumber)


}

export default Fizzbuzz;