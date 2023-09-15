export default function WelcomePage(props) {
    
    return (
        <div className='welcome-page'>
            <h1>Quizzical</h1>
            <p>Test your knowledge</p>
            
            {/* Quiz number Of questions */}
            <label className="welcome-page--label" htmlFor="numberOfQuestions">How many questions do you want?</label>
            <select 
                id="numberOfQuestions"
                value={props.formQuizData.numberOfQuestions}
                onChange={props.handleChangeQuizData}
                name="numberOfQuestions"
                className="welcome-page--select"
            >
                <option value="">-- Choose --</option>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
            </select>

            {/* Quiz category */}
            <label className="welcome-page--label" htmlFor="category">Select the category of the quiz.</label>
            <select 
                id="category"
                value={props.formQuizData.category}
                onChange={props.handleChangeQuizData}
                name="category"
                className="welcome-page--select"  
            >
                <option value="">-- Choose --</option>
                <option value="9">General Knowledge</option>
                <option value="10">Entertainment: Books</option>
                <option value="11">Entertainment: Film</option>
                <option value="12">Entertainment: Music</option>
                <option value="13">Entertainment: Musicals & Theatres</option>
                <option value="14">Entertainment: Television</option>
                <option value="15">Entertainment: Video Games</option>
                <option value="16">Entertainment: Board Games</option>
                <option value="17">Science & Nature</option>
                <option value="18">Science: Computers</option>
                <option value="19">Science: Mathematics</option>
                <option value="20">Mythology</option>
                <option value="21">Sports</option>
                <option value="22">Geography</option>
                <option value="23">History</option>
                <option value="24">Politics</option>
                <option value="25">Art</option>
                <option value="26">Celebrities</option>
                <option value="27">Animals</option>
                <option value="28">Vehicles</option>
                <option value="29">Entertainment: Comics</option>
                <option value="30">Science: Gadgets</option>
                <option value="31">Entertainment: Japanese Anime & Manga</option>
                <option value="32">Entertainment: Cartoon & Animations</option>
            </select>

            {/* Quiz difficulty */}
            <label className="welcome-page--label" htmlFor="difficulty">Choose the difficulty of the quiz.</label>
            <select 
                id="difficulty"
                value={props.formQuizData.difficulty}
                onChange={props.handleChangeQuizData}
                name="difficulty"
                className="welcome-page--select"
            >
                <option value="">-- Choose --</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
            </select>

            <button 
                className='start-quiz-btn'
                onClick={props.togglePage}
            >
                Start quiz
            </button>
        </div>
    )
}