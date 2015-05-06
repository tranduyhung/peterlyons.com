var testUtils = require("app/testUtils");

describe("the 12-Factor node.js slide deck", function() {
  var $ = null;
  before(function(done) {
    testUtils.loadPage("/12_factor_nodejs", function(error, dom) {
      $ = dom;
      done(error);
    });
  });

  it("should be a slide deck", function() {
    testUtils.assertDeck($);
  });

  it("should mention some relevant words", function() {
    testUtils.assertSubstrings($, "bole", "systemd", "config3");
  });
});
