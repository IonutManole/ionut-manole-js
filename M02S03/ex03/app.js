// Folosind elementul stage, adauga un event de mouseover care sa
// afiseze in elementul paragraf mesajul: “Mouseul este pe scena”
// atunci cand mouseul face hover pe aceasta.
// Folosind mouseout, afiseaza in paragraf mesajul “Mouseul nu este
// pe scena”.
// Afiseaza intr-un alt element de cate ori mouseul a fost pe scena.
// Afiseaza in al treilea paragraf de cate ori mouseul a trecut peste
// oricare din laturile patratului.

const app = {
  entryIndex: 0,
  counterIndex: 0,
  paragraphLog: (id, message) => {
    let paragraph = document.querySelector(`#${id}`);

    if (paragraph === null) {
      paragraph = document.createElement('p');

      paragraph.id = id;
      document.body.append(paragraph);
    }

    paragraph.innerText = message;
  },
  bindEvents: () => {
    const stage = document.querySelector('.stage');
    const messageIn = 'Mouse-ul este pe scena';
    const messageOut = 'Mouse-ul nu este pe scena';

    stage.addEventListener('mouseover', () => {
      // console.log(messageIn);
      app.paragraphLog('status-main', messageIn);

      const entryMessage = `Mouseul a intrat pe scena de ${++app.entryIndex} ori.`;
      app.paragraphLog('status-entry', entryMessage);
      const counterMesaage = `Mouseul a trecut peste o latura de ${++app.counterIndex} ori.`;
      app.paragraphLog('counter', counterMesaage);
    });

    stage.addEventListener('mouseout', () => {
      // console.log(messageOut);
      app.paragraphLog('status-main', messageOut);
      const counterMesaage = `Mouseul a trecut peste o latura de ${++app.counterIndex} ori.`;
      app.paragraphLog('counter', counterMesaage);
    });
  },
};

document.addEventListener('DOMContentLoaded', () => {
  app.bindEvents();
});
