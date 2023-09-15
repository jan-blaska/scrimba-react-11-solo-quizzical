import { useState } from 'react'
import Quiz from "./components/Quiz"
import WelcomePage from './components/WelcomePage'

function App() {
	
	const [quizPage, setQuizPage] = useState(false)
	const [formQuizData, setFormQuizData] = useState(
        {
            numberOfQuestions: "", 
            category: "", 
            difficulty: ""
        }
    )

	function handleChangeQuizData(event) {
        console.log(event)
        const {name, value} = event.target
        setFormQuizData(prevQuizData => {
            return {
                ...prevQuizData,
                [name]: value
            }
        })
    }

	function togglePage() {
		setQuizPage(() => true)
	}


	return (
		<main>
			{
				quizPage
				?
				<Quiz 
					numberOfQuestions={formQuizData.numberOfQuestions}
					category={formQuizData.category} 
					difficulty={formQuizData.difficulty}
				/>
				:
				<WelcomePage
					togglePage={() => togglePage()}
					handleChangeQuizData={handleChangeQuizData}
					formQuizData={formQuizData}

				/>
			}
		</main>
	)
}

export default App
