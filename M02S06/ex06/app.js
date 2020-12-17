$(() => {
  const buildPersonList = () => {
    const ulClass = 'person-list';
    $.ajax('http://localhost:8080/persons', {
      method: 'GET',
    }).done((response) => {
      let $ul = $(`.${ulClass}`);
      $ul.remove();

      if ($ul.length === 0) {
        $ul = $('<ul>', {
          class: ulClass,
        }).appendTo('body');
      }

      response.persons.forEach((person) => {
        const $li = $('<li>', {
          text: person.name,
        });

        $ul.append($li);
      });
    });
  };

  buildPersonList();
});
