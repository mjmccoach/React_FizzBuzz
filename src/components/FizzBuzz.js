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
        } else if(inputNumber % 5 === 0) {
            setAnswer("Buzz")
        } else {
            setAnswer(inputNumber);
        }
    }, [inputNumber])

    const HandleIncrement = () => {
        let newNum = inputNumber + 1;
        setInputNumber(newNum);
    }

    const HandleDecrement = () => {
        let newNum = inputNumber - 1;
        setInputNumber(newNum)
    }

    const GenerateRandomNumber = () => {
        let newNum = Math.floor(Math.random() * 100);
        setInputNumber(newNum)
    }

    return (
        <>

        <button onClick={HandleIncrement}>Increase Number</button>
        <button onClick={HandleDecrement}>Decrease Number</button>
        <button onClick={GenerateRandomNumber}>Random Number</button>

        <h2>Number is <span>{inputNumber}</span> </h2>
        <h2>Answer is <span>{answer}</span> </h2>
        
        </>
    )


}

export default Fizzbuzz;