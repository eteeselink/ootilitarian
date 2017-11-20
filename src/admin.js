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
            if (isBlank(question)){
                alert("Please input your question");
                return false;
            }
            this.element.innerHTML = `<p>Question ${question} is submitted, question type: Yes/No </p>`;
            
            // voter
            this.element.innerHTML =`<label for="question">Question: </label><br>
            <input type="text" name="question" id="question">
            <br>
            <div id="answer" >
            <label for="answer">Answer: </label><br>
            <input type="radio" name="answer" value="yes" id="yes">
            <label for="yes">Yes</label><br>

            <input type="radio" name="answer" value="no" id="no">
            <label for="no">No</label><br>
            <br>
            </div>
         

            <button id="btn">Submit!</button>`;
            this.element.querySelector("input[name=question]").value = question;
            // send to result
            
        })
        function isBlank(str) {
            return (!str || /^\s*$/.test(str));
        }

        // Voter from here
        // var answer = this.element.querySelector("input[name=answer]:checked").value;
        // const aQuestion = new Question(question, answer);
        
    }
}