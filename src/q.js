import {Question} from "./question.js";
   export class Q{
        constructor (element)
        {
                this.element=element;
        }
            displayQuestions(question, index){
                
                this.element.innerHTML = `
                <label for="question">Question: </label><br>
                <input type="text" name="question${index}" id="question" value="${question.question}">
                <br>
            
                <label for="answer">Answer: </label><br>
                <input type="text" name="answer${index}">
            
            `;   
            }  
        render(name) {
          
        this.element.querySelector("button").addEventListener("click", ev => {
            // always add `preventDefault` in an event handler. otherwise, the browser
            // will do some default action which usually means submitting the data to the server, 
            // which causes the entire page to reload.
            // since we have no server, we don't want that :-)
            ev.preventDefault();
            
        var question =  new Question;
       var que= document.getElementById("question").value;
     
       // question.text= question.question;
       
        

        } )}
    }