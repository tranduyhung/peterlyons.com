var testUtils = require("app/testUtils");

describe("the home page", function() {
  var $ = null;

  before(function(done) {
    testUtils.loadPage("/", function(error, dom) {
      $ = dom;
      done(error);
    });
  });
  it("should have the intro material", function() {
    testUtils.assertSelectors($,
      "section.intro");
  });
});
