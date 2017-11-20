
//import Question from "./question.js";
import {Q} from "./q.js";
import { Question } from "./question.js";
import { Result } from "./results.js";

 export class Voter {
    /**
     * @param {HTMLElement} element
     */
    constructor(element){
        this.element = element;
    }

    evaluateResults () {
        for (var i = 0; i < questions.length; i++){
            question.answer = this.element.querySelector("input[name=answer${i}]").value;
            var result = new Result();
            result.pushResult(question);
        }
    }
    
    displayQuestions(questions){
        for (var i = 0; i < questions.length; i++) { 
            // this.element.innerHTML += `<br/>${questions[i].question} <br/>
            //                           ${questions[i].answer}`;
            var qn = new Q(this.element);
            qn.displayQuestions(questions[i],i);

        }     
        
        this.element.innerHTML += `<button id="btn">Submit!</button>`;


        this.element.querySelector("button").addEventListener("click", ev => {
           
            ev.preventDefault();
            // Admin here
           var question = questions[0];
           
            question.answer = this.element.querySelector("input[name=answer0]").value;
            var result = new Result();
            result.pushResult(question);
            result.retrieveResults(this.element);
           
        });
    }

    
   
    
}

