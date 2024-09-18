const Animal = require('../models/AnimalModel');

const createAnimal = async (req, res) => {
  // Extract fields from the request body
  const {
    name,
    ageYears,
    ageMonths,
    sex,
    animal_type,
    images_and_videos,
    description,
    area_of_adoption,
    color,
    get_along_with,
    breed,
    health_condition,
    spay_neuter
  } = req.body;
  
  try {
    // Create a new animal
    const animal = await Animal.create({
      // required fileds
      name,
      age: {
        years: parseInt(ageYears, 10) || 0, // Default to 0
        months: parseInt(ageMonths, 10) || 0 // Default to 0
      },
      sex,
      animal_type,
      images_and_videos: Array.isArray(images_and_videos) ? images_and_videos : [], // Ensure this is an array
      description,
      area_of_adoption,
      color,
      // Default to empty string - non required filed
      get_along_with: get_along_with || '', 
      breed: breed || '', 
      health_condition: health_condition || '', 
      spay_neuter: spay_neuter || '' 
    });

    // Respond with the newly created animal
    res.status(201).json({ animal });
  } catch (err) {
    // Handle creation error
    console.error('Error creating animal:', err);
    res.status(400).json({ message: 'Error creating animal', error: err.message });
  }
};

module.exports = {
  createAnimal,
};
