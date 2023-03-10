Feature('people');

Scenario('people validation test',  ({ I }) => {
    I.sendGetRequest('/people')
    I.seeResponseCodeIsSuccessful()
});

Scenario('people 1 validation test',  ({ I }) => {
    I.sendGetRequest('/people/1')
    I.seeResponseContainsKeys(['name', 'height', 'gender'])
    I.seeResponseCodeIsSuccessful()
    I.seeResponseContainsJson({
        name: 'Luke Skywalker',
        birth_year: '19BBY',
        homeworld: "https://swapi.dev/api/planets/1/"
    })
});