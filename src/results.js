// Define one results js function which retrieves data from a container and
// renders it as HTML.
export class Result {

  constructor() {
      this.questions = new Array();
  }

  pushResult(question) {
      this.questions.push(question);
  }

  pushResults(questions) {
      for(var question in questions) {
          pushResult(question);
      }
  }

  retrieveResults(element) {
    var results = {};
    for(let qa of this.questions) {
        const question = qa.question;
        if (!(question in results)) {
            results[question] = {};
        } 
        const answer = qa.answer;
        if (!(answer in results[question])) {
            results[question][answer] = 1;
        } else {
            results[question][answer]++;
        }
    }
    console.log(results);

    for (var question in results) {
        element.innerHTML += `<p><b>Question:</b> ${question}</p>`;
        element.innerHTML += `<p>`;
        for (var answer in results[question]) {
            element.innerHTML += `${answer}: ${results[question][answer]}<br/>`;
        }
        element.innerHTML += `</p>`;        
    }
  }
}
