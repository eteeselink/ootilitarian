
export class Voter {
    /**
     * @param {HTMLElement} questions
     */
   

    displayQuestions(name,questions){
        questions.forEach(question => {
            this.element.innerHTML = `
            Hi ${name}! ${question} <br> `;
        });
    }
    
    
}