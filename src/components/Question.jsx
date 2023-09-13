import Radio from "./Radio"

export default function Question(props) {

    const answerOptions = props.allAnswers.map((option) => {
        return (
            <Radio 
                key={option}
                option={option} 
                name={props.id}
                onChange={props.handleChange}
                checked={props.selectedAnswer === option}
                formSubmit={props.formSubmit}
                correctAnswer={props.correctAnswer}
                selectedAnswer={props.selectedAnswer}
            />
        )
    })
    
    return (
        <div className="question">
            <p className="question-header">{props.question}</p>
            <div className="question-answers-container">
                {answerOptions}
            </div>
        </div>
    )
}