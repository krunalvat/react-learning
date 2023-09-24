import React, { useState } from "react";

const TodoListToggleComponent = ({question,answer}) => {

    const [showAnswer, setAnswer] = useState(false);

  
    return (
        <>
        <div className="container">
        
            <div className="card text-center">
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <button className="btn btn-primary" onClick={ () => setAnswer(!showAnswer)}> { showAnswer ? '-' : '+' }</button>
                </div>
                    <span className="pe-2">{question}</span>
                </div>
                 { showAnswer && <p> {answer} </p>  }
            </div>
        </div>
        </>
    )
}


export default TodoListToggleComponent;