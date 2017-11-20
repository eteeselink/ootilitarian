import { Question } from "./question.js";


export class Admin {
    /**
     * @param {HTMLElement} element 
     */
    constructor(element) {
        this.element = element;
    }

    render(name) {
        this.element.innerHTML = `
            <p>Welcome Admin, please fill in your (yes/no) question.</p>
            <label for="question">Question: </label><br>
            <input type="text" name="question" id="question">
            <br>
            <div id="answer" style="display: none;">
            <label for="answer">Answer: </label><br>
            <input type="radio" name="answer" value="yes" id="yes">
            <label for="yes">Yes</label><br>

            <input type="radio" name="answer" value="no" id="no">
            <label for="no">No</label><br>
            <br>
            </div>
            
            <button id="btn">Submit!</button>
        `;

        this.element.querySelector("button").addEventListener("click", ev => {
            // always add `preventDefault` in an event handler. otherwise, the browser
            // will do some default action which usually means submitting the data to the server, 
            // which causes the entire page to reload.
            // since we have no server, we don't want that :-)
            ev.preventDefault();
            // Admin here
            var question = this.element.querySelector("input[name=question]").value;
            this.element.innerHTML = `<p>Question ${aQuestion.question} is submitted, question type: Yes/No </p>`;
          
        })

        // Voter from here
        // var answer = this.element.querySelector("input[name=answer]:checked").value;
        // const aQuestion = new Question(question, answer);
        
    }
}