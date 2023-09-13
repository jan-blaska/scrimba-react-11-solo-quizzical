import { useState, useEffect } from 'react'
import he from "he"
import { nanoid } from 'nanoid'
import Question from "./Question"

export default function Quiz() {
    const [quizArray, setQuizArray] = useState([])
    const [correctAnswers, setCorrectAnswers] = useState(0)
    const [formSubmit, setFormSubmit] = useState(false)
    const [round, setRound] = useState(1)
    
    useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple")
            .then(res => res.json())
            .then(data => {
                    const dataArray = data.results.map((item) => {
                        // put incorrect and correct answers together into one array, decode them and randomly shuffle them in the array
                        const allAnswers = item.incorrect_answers
                        allAnswers.push(item.correct_answer)
                        const allAnswersDecoded = allAnswers.map(answer => he.decode(answer))
                        const allAnswersShuffled = shuffleArray(allAnswersDecoded)
                        // new object, decoding other data
                        return {
                            id: nanoid(),
                            question: he.decode(item.question), 
                            correctAnswer: he.decode(item.correct_answer), 
                            allAnswers: allAnswersShuffled, 
                            selectedAnswer: ""
                        }
                    })
                    setQuizArray(dataArray)
                })
    }, [round])
    
    // Fisher-Yates (also known as Knuth) shuffle algorithm
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array
    }

    const quizArrayElements = quizArray.map((quiz) => {        
        return (
            <Question
                key={quiz.id}
                id={quiz.id}
                question={quiz.question}
                correctAnswer={quiz.correctAnswer}
                allAnswers={quiz.allAnswers}
                selectedAnswer={quiz.selectedAnswer}
                handleChange={handleChange}
                formSubmit={formSubmit}
            />
        )
    })

    function handleChange(event) {
        const {name, value} = event.target

        setQuizArray(prevData => prevData.map((quiz) => {    
            return quiz.id === name 
                ? 
                    {
                    ...quiz,
                    selectedAnswer: value
                    } 
                : 
                    quiz
            }
        ))
    }
    
    function handleSubmit(event) {
        event.preventDefault()
        quizArray.forEach(quiz => {
            if (quiz.correctAnswer === quiz.selectedAnswer) {
                setCorrectAnswers(prev => prev + 1)
            }
        })
        setFormSubmit(true)
    }

    function newGame() {
        setCorrectAnswers(0)
        setFormSubmit(false)
        setRound(prev => prev + 1)
    }

    return (
        <div>
            <form onSubmit={handleSubmit} > 
                {quizArrayElements}
                { formSubmit === false &&
                <div className='form-btn-container'>
                    <button className='check-answers-btn'>Check answers</button>
                </div>
                }
            </form>
            {
            formSubmit && 
                <div className='form-btn-container'>
                    <p className='result-paragraph'>You scored {correctAnswers}/{quizArray.length} correct answers</p> 
                    <button 
                        className='play-again-btn'
                        onClick={newGame}
                    >
                        Play again
                    </button>
                </div>
            }
        </div>
    )
}