var testUtils = require("app/testUtils");

describe("the Rapid Feedback Slide Deck", function() {
  var $ = null;
  before(function(done) {
    testUtils.loadPage("/rapid_feedback", function(error, dom) {
      $ = dom;
      done(error);
    });
  });

  it("should be a slide deck", function() {
    testUtils.assertDeck($);
  });

  it("should mention some ruby stuff", function() {
    testUtils.assertSubstrings($, "ruby", "rails", "stackoverflow");
  });
});