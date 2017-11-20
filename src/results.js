// Define one results js function which retrieves data from a container and
// renders it as HTML.
export class Result {

  constructor() {
      this.questions = new Array();
  }

  pushResult(question) {
    this.questions.push(question);
  }

  retrieveResults(element) {
  //export function retrieveResults(element, questionaire, answer) {


      var text = '';

      text += this.questions[0].question;
      text += '\n';
      text += this.questions[0].question.answer;

      // for(let i = 0; i < questionarie.length(); i++) {
      //     var question = questionaire.at(i);
      //     //element.innerHTML = `<pre>${text}</pre>`;
      // }

      element.innerHTML = `<pre>${text}</pre>`;
  }

}
