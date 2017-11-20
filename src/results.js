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
      var answers = {};
      for (var i = 0; i < this.questions.length; ++i) {
          if (!(this.questions[i].answer in answers)) {
              answers[this.questions[i].answer] = 1;
          } else {
              answers[this.questions[i].answer]++;
          }
      }

      for (var answer in answers) {
          element.innerHTML += `<pre>${answer}:${answers[answer]}</pre>`;
      }
  }
}
