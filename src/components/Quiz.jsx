import { useState, useEffect } from 'react'

export default function Quiz() {

    /* change dependencies array */
	useEffect(() => {
		fetch("https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple")
			.then(res => res.json())
			.then(data => console.log(data))
	}, [])


    return (
        <div>
            
        </div>
    )
}