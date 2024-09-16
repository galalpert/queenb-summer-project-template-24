const Animal = require('../models/AnimalModel');

// create a new animal
const createAnimal = async (req, res) => {
  const {animal_id, name, age, sex, animal_type, images_and_videos, description, contact_user, area_of_adoption, color} = req.body;

  try {
      const animal = await Animal.create({animal_id, name, age, sex, animal_type, images_and_videos, description, contact_user, area_of_adoption, color});
      res.status(200).json({animal});
  } catch (err) {
      res.status(400).json({mssg: 'error creating animal', err})
  }
}

module.exports = {
  createAnimal,
};