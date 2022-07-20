const router = require("express").Router();
const country = require("./controller/country");
const { validation } = require("../../middleware/validation");
const { addCountryValidator } = require("./country.validation");
const { auth } = require("../../middleware/auth");

router.post("/country", validation(addCountryValidator), auth(), country.addCountry);

router.get("/countries", auth(), country.getCountries);

module.exports = router;
