import "./questionBox.css"

function questionBox(){
 return <div class="qb-surround">
        <section class="qb-section">
            <h1 class="qb-question-title">What is React?</h1>
            <section class = "qb-question-choices">
                <Answer text= "A JS framework" />
                <Answer text= "Taco" />
                <Answer text= "Burrito" />
                <Answer text= "Nachos" />
            </section>
        </section>
        <button class="qb-submit">Submit</button>
    </div>
}

function Answer(props){
    return <p class="qb-answers">{props.text}</p>
}
export default questionBox;