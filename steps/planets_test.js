Feature('planets').tag('@planets');

Scenario('verify planet information', ({ I }) => {
  I.sendGetRequest('/planets');
  I.seeResponseCodeIs(200);
  I.seeResponseContainsJson({ count: 60 });
});

Scenario('verify the first planet on list', ({ I }) => {
    I.sendGetRequest('/planets/1');
    I.seeResponseCodeIs(200);
    I.seeResponseContainsJson({ name: 'Tatooine' });
  });

