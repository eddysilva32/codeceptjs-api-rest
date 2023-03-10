Feature('people').tag('@people');


Scenario('verify api response', ({ I }) => {
  I.sendGetRequest('https://swapi.dev/api/');
  I.seeResponseCodeIs(200);
});

Scenario('verify people list information',  ({ I }) => {
    I.sendGetRequest('/people')
    I.seeResponseCodeIsSuccessful()
    I.seeResponseContainsJson({ count: 82 });
});

Scenario('verify the first person on list',  ({ I }) => {
    I.sendGetRequest('/people/1')
    I.seeResponseContainsKeys(['name', 'height', 'gender'])
    I.seeResponseCodeIsSuccessful()
    I.seeResponseContainsJson({
        name: 'Luke Skywalker',
        birth_year: '19BBY',
        homeworld: "https://swapi.dev/api/planets/1/"
    })
});


