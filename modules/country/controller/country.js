const countryModel = require("../../../DB/model/Country");
const addCountry = async (req, res) => {
  try {
    const { country, stateProvince, alphaTwoCode } = req.body;

    const countryName = country.toLowerCase();
    if (!stateProvince) {
      const newCountry = await countryModel.insertMany({
        countryName,
        alphaTwoCode,
      });
      res.json({ message: "Done", newCountry });
    } else {
      const newCountry = await countryModel.insertMany({
        countryName,
        stateProvince,
        alphaTwoCode,
      });
      res.json({ message: "Done", newCountry });
    }
  } catch (error) {
    res.json({ message: "catch error", error });
  }
};

const getCountries = async (req, res) => {
  try {
    const countries = await countryModel.find().populate({ path: "universityID" });

    if (countries) {
      res.json({ message: "Done", countries });
    } else {
      res.json({ message: "something went wrong" });
    }
  } catch (error) {
    res.json({ message: "catch error", error });
  }
};
module.exports = { addCountry, getCountries };
