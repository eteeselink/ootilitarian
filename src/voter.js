
// import Question from "./question.js";

 export class Voter {
    /**
     * @param {HTMLElement} element
     */
    constructor(element){
        this.element = element;
    }

    displayQuestions(questions){
        
       this.element.innerHTML =` ${questions[0].question}`;
    }
    
   
    
}

