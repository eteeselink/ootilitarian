import {Question} from "./question.js";
   export class ques{
        constructor (element)
        {
                this.element=element;
        }

        render(name) {
            this.element.innerHTML = `
            <label for="question">Question: </label><br>
            <input type="text" name="question" id="question" value="question">
            <br>
            <label for="answer">Answer: </label><br>
            <input type="radio" name="answer" value="yes" id="yes">
            <label for="yes">Yes</label><br>

            <input type="radio" name="answer" value="no" id="no">
            <label for="no">No</label><br>
            <br>
            <button id="btn">Submit!</button>
        `;
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