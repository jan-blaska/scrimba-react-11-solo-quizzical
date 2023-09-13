export default function Question(props) {

    return (
        <div className="question">
            <p className="question-header">{props.question}</p>
            <div className="question-answers-container">
                <input 
                    className="radio-button-input"
                    type="radio"
                    id={props.allAnswers[0]}
                    name={props.id}
                    value={props.allAnswers[0]}
                    checked={props.selectedAnswer === props.allAnswers[0]}
                    onChange={props.handleChange}
                    />
                <label 
                    className="radio-button-label"
                    htmlFor={props.allAnswers[0]}
                >
                    {props.allAnswers[0]}
                </label>
                <input 
                    className="radio-button-input"
                    type="radio"
                    id={props.allAnswers[1]}
                    name={props.id}
                    value={props.allAnswers[1]}
                    checked={props.selectedAnswer === props.allAnswers[1]}
                    onChange={props.handleChange}
                />
                <label 
                    className="radio-button-label"
                    htmlFor={props.allAnswers[1]}
                >
                    {props.allAnswers[1]}
                </label>
                <input 
                    className="radio-button-input"
                    type="radio"
                    id={props.allAnswers[2]}
                    name={props.id}
                    value={props.allAnswers[2]}
                    checked={props.selectedAnswer === props.allAnswers[2]}
                    onChange={props.handleChange}
                />
                <label 
                    className="radio-button-label"
                    htmlFor={props.allAnswers[2]}
                >
                    {props.allAnswers[2]}
                </label>
                <input 
                    className="radio-button-input"
                    type="radio"
                    id={props.allAnswers[3]}
                    name={props.id}
                    value={props.allAnswers[3]}
                    checked={props.selectedAnswer === props.allAnswers[3]}
                    onChange={props.handleChange}
                />
                <label 
                    className="radio-button-label"
                    htmlFor={props.allAnswers[3]}
                >
                    {props.allAnswers[3]}
                </label>
            </div>
        </div>
    )
}