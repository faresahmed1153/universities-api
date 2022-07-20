const universityModel = require("../../../DB/model/University");
const countryModel = require("../../../DB/model/Country");

const search = async (req, res) => {
  try {
    const { searched } = req.query;
    const searchedWord = searched.toLowerCase();
    const country = await countryModel.findOne({ countryName: searchedWord }).populate({ path: "universityID" });
    if (country) {
      res.json({ message: "country", country, detail: "country" });
    } else if (!country) {
      const university = await universityModel.findOne({ universityName: searchedWord }).populate({ path: "countryId" });
      if (!university) {
        res.json({ message: "No Content Found" });
      } else {
        res.json({ message: "university", university });
      }
    } else {
      res.json({ message: "something went wrong" });
    }
  } catch (error) {
    res.json({ message: "catch err ", error });
  }
};

module.exports = { search };
