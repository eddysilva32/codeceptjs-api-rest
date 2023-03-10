Feature('films').tag('@films');

Scenario('verify films list information', ({ I }) => {
    I.sendGetRequest('/films');
    I.seeResponseCodeIsSuccessful();
  });
