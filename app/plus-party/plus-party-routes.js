function plusParty(req, res) {
  res.render("plus-party/plus-party");
}

function setup(app) {
  app.get("/plus-party", plusParty);
}

module.exports = setup;
