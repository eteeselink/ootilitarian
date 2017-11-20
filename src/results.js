// Define one results js function which retrieves data from a container and
// renders it as HTML.

export function retrieveResults(element, question, answer) {

    var text = '';

    text += question;
    text += '\n';
    text += answer;

    element.innerHTML = `<pre>${text}</pre>`;
}
