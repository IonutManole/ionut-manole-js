let paragraphLog = (message) => {
  let logContainer = document.querySelector('.logs');
  let messageParagraph = document.createElement('p');

  if (!logContainer || logContainer === null) {
    logContainer = document.createElement('div');
    document.body.append(logContainer);
  }

  messageParagraph.innerText = message;

  logContainer.append(messageParagraph);
};

console.domLog = paragraphLog;
