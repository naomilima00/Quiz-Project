import "./QuestionBox.css"
import {useEffect, useState} from 'react';

function QuestionBox(props) {
    const[clicked, setClicked] = useState(0);

    useEffect(() => {
        setClicked(0);
    }, [props.correct]);

    const onClick = function (answerNumber){
        return () =>{
            setClicked(answerNumber);
        }
    }

    return <div class="qb-surround">
        <section class="qb-section">
            <h1 class="qb-question-title">{props.question}</h1>
            <section class="qb-question-choices">
                <Answer 
                    onClick={onClick(1)}
                    clicked={clicked}
                    correct={props.correct}
                    text={props.answers[0]} />
                <Answer 
                    onClick={onClick(2)}
                    clicked={clicked}
                    correct={props.correct}
                    text={props.answers[1]} />
                <Answer 
                    onClick={onClick(3)}
                    clicked={clicked}
                    correct={props.correct}
                    text={props.answers[2]} />
                <Answer 
                    onClick={onClick(4)}
                    clicked={clicked}
                    correct={props.correct}
                    text={props.answers[3]} />
            </section>
        </section>
        {/* <button class="qb-submit">Submit</button> */}
    </div>
}

function Answer(props) {
    if(props.clicked){
        if (props.correct == props.text){
                return <p 
                onClick={props.onClick} 
                class="qb-answer correct">{props.text}
                </p>
        } else{
            return <p 
                onClick={props.onClick} 
                class="qb-answer wrong">{props.text}
                </p>
        }
    } else{
        return <p 
                onClick={props.onClick} 
                class="qb-answer">{props.text}
                </p>
    }
}

export default QuestionBox;