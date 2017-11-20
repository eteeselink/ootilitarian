
export class Voter {
    /**
     * @param {HTMLElement} questions
     */
   

    displayQuestions(questions){
        questions.forEach(question => {
            this.element.innerHTML = `
            Hi ${name}! ${question} <br> `;
        });
    }
    
    
}