import { useState } from 'react'
import Quiz from "./components/Quiz"

function App() {
	const [quizPage, setQuizPage] = useState(false)

	function togglePage() {
		setQuizPage(() => true)
	}


	return (
		<main>
			{
				quizPage
				?
				<Quiz />
				:
				<div className='welcome-page'>
					<h1>Quizzical</h1>
					<p>Test your knowledge</p>
					<button 
						className='start-quiz-btn'
						onClick={() => togglePage()}
					>
						Start quiz
					</button>
				</div>
			}
		</main>
	)
}

export default App
