
// import Question from "./question.js";

 export class Voter {
    /**
     * @param {HTMLElement} element
     */
    constructor(element){
        this.element = element;
    }

    displayQuestions(questions){
        for (var i = 0; i < questions.length; i++) { 
            this.element.innerHTML += `<br/>${questions[i].question} <br/>
                                      ${questions[i].answer}`;
        }        
    }   
   
    
}

