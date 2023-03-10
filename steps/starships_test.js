Feature('starships').tag('@starships');

Scenario('verify starship list Information', ({ I }) => {
    I.sendGetRequest('/starships');
    I.seeResponseCodeIs(200);
    I.seeResponseContainsJson({ count: 36 });
  });
