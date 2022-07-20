const router = require("express").Router();
const { validation } = require("../../middleware/validation");
const { auth } = require("../../middleware/auth");
const { addUniversityValidator, deleteUniversityValidator, getUniversitiesValidator, updateUniversityValidator } = require("./university.validation");
const { addUniversity, getUniversities, deleteUniversity, updateUniversity } = require("./controller/university");

router.get("/:country/universities", validation(getUniversitiesValidator), auth(), getUniversities);
router.delete("/:country/:universityId/university", validation(deleteUniversityValidator), auth(), deleteUniversity);
router.post("/:country/university", validation(addUniversityValidator), auth(), addUniversity);
router.patch("/:country/:universityId/university", validation(updateUniversityValidator), auth(), updateUniversity);
module.exports = router;
