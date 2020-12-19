axios.interceptors.request.use(
  (config) => {
    const { url, method } = config;
    if (url.includes('/persons') && method === 'post') {
      config.data.person.name = config.data.person.name.toUpperCase();
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

$(() => {
  const buildPersonList = () => {
    const ulClass = 'person-list';
    axios.get('http://localhost:8080/persons').then((axiosResponse) => {
      let response = axiosResponse.data;
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

        const $skillsUl = $('<ul>');

        person.skills.forEach((skill) => {
          const $li = $('<li>', {
            text: skill,
          }).appendTo($skillsUl);
        });

        $li.append($skillsUl);

        $ul.append($li);
      });
    });
  };

  buildPersonList();

  const $form = $('#personForm');
  const requestBody = {
    person: {
      name: '',
      skills: [],
    },
  };

  $form
    .on('click', '.addSkill', (event) => {
      const $delegateTarget = $(event.currentTarget);
      const $buttonParent = $delegateTarget.parent();
      const skillValue = $delegateTarget.prev().val();

      if (skillValue.length < 1) {
        return;
      }

      requestBody.person.skills.push(skillValue);

      let $skillsUl = $('.skillsUl');
      let $skillLi = $('<li>', {
        text: skillValue,
      });

      if ($skillsUl.length < 1) {
        $skillsUl = $('<ul>', {
          class: 'skillsUl',
        });

        $skillsUl.append($skillLi).appendTo($buttonParent);
      } else {
        $skillsUl.append($skillLi);
      }

      $delegateTarget.prev().val('');
    })
    .on('submit', (event) => {
      event.preventDefault();
      const $nameInput = $(event.target).find('input[name="name"]');
      requestBody.person.name = $nameInput.val();

      axios.post('http://localhost:8080/persons', requestBody).then(() => {
        $nameInput.val('');
        buildPersonList();
      });
    });
});
