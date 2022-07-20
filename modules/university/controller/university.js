const universityModel = require("../../../DB/model/University");
const countryModel = require("../../../DB/model/Country");
const addUniversity = async (req, res) => {
  try {
    const { country } = req.params;
    const { university, webPage, domain } = req.body;

    const countryName = country.toLowerCase();
    const universityName = university.toLowerCase();
    const findCountry = await countryModel.findOne({ countryName });
    if (findCountry) {
      const newUniversity = await universityModel.insertMany({
        universityName,
        webPage,
        domain,
        countryId: findCountry._id,
      });

      const addedID = await countryModel.findOneAndUpdate({ countryName }, { $push: { universityID: newUniversity } });
      res.json({ message: "Done", newUniversity });
    } else {
      res.json({ message: "In-valid country name" });
    }
  } catch (error) {
    res.json({ message: "catch error", error });
  }
};
module.exports = { addUniversity };

const getUniversities = async (req, res) => {
  try {
    const { country } = req.params;
    const countryName = country.toLowerCase();
    const findCountry = await countryModel.findOne({ countryName });
    if (findCountry) {
      const universities = await universityModel.find({ countryId: findCountry._id }).populate({ path: "countryId" });
      res.json({ message: "Done", universities });
    } else {
      res.json({ message: "In-valid country name" });
    }
  } catch (error) {
    res.json({ message: "catch error", error });
  }
};

const deleteUniversity = async (req, res) => {
  try {
    const { country, universityId } = req.params;

    const countryName = country.toLowerCase();

    const findCountry = await countryModel.findOne({ countryName });
    if (findCountry) {
      const findCountry = await countryModel.findOne({ countryName });

      const removedID = await countryModel.findOneAndUpdate({ countryName }, { $pull: { universityID: universityId } });
      const deletedUniversity = await universityModel.deleteOne({ _id: universityId });
      if (deletedUniversity) {
        res.json({ message: "Done", deletedUniversity });
      } else {
        res.json({ message: "something went wrong" });
      }
    } else {
      res.json({ message: "In-valid country name" });
    }
  } catch (error) {
    res.json({ message: "catch error", error });
  }
};
const updateUniversity = async (req, res) => {
  try {
    const { country, universityId } = req.params;
    const { webPage, domain } = req.body;
    const countryName = country.toLowerCase();

    const findCountry = await countryModel.findOne({ countryName });
    if (findCountry) {
      const updatedUniversity = await universityModel.findOneAndUpdate({ _id: universityId }, { webPage, domain }, { new: true });
      if (updatedUniversity) {
        res.json({ message: "Done", updatedUniversity });
      } else {
        res.json({ message: "something went wrong" });
      }
    } else {
      res.json({ message: "In-valid country name" });
    }
  } catch (error) {
    res.json({ message: "catch error", error });
  }
};
module.exports = { addUniversity, getUniversities, deleteUniversity, updateUniversity };
