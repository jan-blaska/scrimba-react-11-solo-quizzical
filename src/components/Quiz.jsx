import { useState, useEffect } from 'react'
import he from "he"
import { nanoid } from 'nanoid'
import Question from "./Question"

export default function Quiz() {
    const [quizArray, setQuizArray] = useState([])
    
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
    }, [])
    
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
                allAnswers={quiz.allAnswers}
                selectedAnswer={quiz.selectedAnswer}
                handleChange={handleChange}
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

        }))
        console.log(quizArray)
    }
    

    return (
        <div>
            <form action="">
                {quizArrayElements}
                <button>Check answers</button>
            </form>
            
        </div>
    )
}