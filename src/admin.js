import {Question} from "./question.js";


export class Admin {
    /**
     * @param {HTMLElement} element 
     */
    constructor(element) {
        this.element = element;
    }

    render(name) {
        this.element.innerHTML = `
            <label for="question">Question: </label><br>
            <input type="text" name="question" id="question">
            <br>
            <label for="answer">Answer: </label><br>
            <input type="text" name="answer" id="answer">
            <br>
            <button id="btn">Submit!</button>
        `;

        this.element.querySelector("button").addEventListener("click", ev => {
            // always add `preventDefault` in an event handler. otherwise, the browser
            // will do some default action which usually means submitting the data to the server, 
            // which causes the entire page to reload.
            // since we have no server, we don't want that :-)
            ev.preventDefault();

            var question =  this.element.querySelector("input[name=question]").value;
            var answer = this.element.querySelector("input[name=answer]").value;
            const aQuestion = new Question(question, answer);
            this.element.innerHTML = `<p>Question ${aQuestion.question}, Answer ${aQuestion.answer}</p>`;
            
            //makeAsciiArt(this.element.querySelector("#pizza"));
        })
    }
}