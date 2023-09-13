export default function Radio(props) {
    
    function backgroundColor() {
        if ((props.selectedAnswer === props.option) && (props.selectedAnswer === props.correctAnswer)) {
            return {
                backgroundColor: "#94D7A2",
                border: "1px solid #94D7A2"
            }
        } else if (props.selectedAnswer === props.option) {
            return {
                backgroundColor: "#F8BCBC",
                border: "1px solid #F8BCBC"
            }
        } else if (props.correctAnswer === props.option) {
            return {
                backgroundColor: "#94D7A2",
                border: "1px solid #94D7A2"
            }
        }
    }
    
    const styles = props.formSubmit 
        ? 
        backgroundColor()
        :
        {}
    
    return (
        <div>
            <input 
                className="radio-button-input"
                type="radio"
                id={props.option}
                name={props.name}
                value={props.option}
                checked={props.checked}
                onChange={props.onChange}
            />
            <label 
                className="radio-button-label"
                htmlFor={props.option}
                style={styles}
            >
                {props.option}
            </label>
        </div>
    )
}