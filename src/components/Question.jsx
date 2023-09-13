export default function Question(props) {

    return (
        <div>
            <h2>{props.question}</h2>
            <input 
                type="radio"
                id={props.allAnswers[0]}
                name={props.id}
                value={props.allAnswers[0]}
                checked={props.selectedAnswer === props.allAnswers[0]}
                onChange={props.handleChange}
            />
            <label htmlFor={props.allAnswers[0]}>{props.allAnswers[0]}</label>
            <input 
                type="radio"
                id={props.allAnswers[1]}
                name={props.id}
                value={props.allAnswers[1]}
                checked={props.selectedAnswer === props.allAnswers[1]}
                onChange={props.handleChange}
            />
            <label htmlFor={props.allAnswers[1]}>{props.allAnswers[1]}</label>

        </div>
    )
}