import { Question } from "./question.js";
import { Voter } from "./voter.js";

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
            <label for="type">Answer type: </label>
            
            <select id="answerType">
            <option value="text">Text</option>
            <option value="multi">Multiple choices</option>
            <option value="score">Score</option>
          
          </select>
            <button id="add">Add</button>
            <br>
            <button id="btn">Submit!</button>
        `;

        this.element.querySelector("button#btn").addEventListener("click", ev => {
            // always add `preventDefault` in an event handler. otherwise, the browser
            // will do some default action which usually means submitting the data to the server, 
            // which causes the entire page to reload.
            // since we have no server, we don't want that :-)
            ev.preventDefault();

            var question = this.element.querySelector("input[name=question]").value;
            if (isBlank(question)) {
                alert("Please input your question");
                return false;
            }
            this.element.innerHTML = `<p>Question ${question} is submitted, question type: Yes/No </p>`;
            var questions = [];
            var q1 = new Question(question, "");
            questions.push(q1);
            const voter = new Voter(document.getElementById("hello"));
            voter.displayQuestions(questions);
        })

        this.element.querySelector("button#add").addEventListener("click", ev => {
            // always add `preventDefault` in an event handler. otherwise, the browser
            // will do some default action which usually means submitting the data to the server, 
            // which causes the entire page to reload.
            // since we have no server, we don't want that :-)
            ev.preventDefault();

            var answerType = this.element.querySelector("#answerType").value;
           
        })

        function isBlank(str) {
            return (!str || /^\s*$/.test(str));
        }



    }
}