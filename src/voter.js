
// import Question from "./question.js";

 export class Voter {
    /**
     * @param {HTMLElement} element
     */
    constructor(element){
        this.element = element;
    }

   displayQuestions(name,questions){

        questions.forEach(question => {
            this.element.innerHTML += `
            Hi ${name}! ${question.question} <br> 
            ${question.answer} <br> `;
        });
    }
    
    
}

