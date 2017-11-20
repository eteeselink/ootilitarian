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
      var count = 0;
      for (var i = 0; i < this.questions.length; ++i) {
          if (this.questions[i].answer.toLowerCase() == 'yes') {
              count++;
          }
      }

      element.innerHTML = `<pre>Yes: ${count}<br/>No: ${this.questions.length - count}</pre>`
  }
}
