const Animal = require('../models/AnimalModel');
let animalIdCounter = 0;

//initialize id counter
const InitializeAnimalIdCounter = async () => {

  try {
    // Find the latest animal by sorting animal_id in descending order
    const lastAnimal = await Animal.findOne().sort({ animal_id: -1 }).exec();
    
    // If no animal is found, return 0 (first entry)
    if (!lastAnimal) {
      return 0;
    }
    
    return lastAnimal.animal_id;

  } catch (err) {
    console.error('Error fetching last animal ID:', err);
    throw new Error('Failed to fetch last animal ID');
  }
};

//initialize counter from DB before the first post req
(async () => {
  animalIdCounter = await InitializeAnimalIdCounter();
})();


const createAnimal = async (req, res) => {
  // Extract fields from the request body
  const {
    name,
    ageYears,
    ageMonths,
    sex,
    animal_type,
    //images_and_videos,
    description,
    area_of_adoption,
    color,
    get_along_with,
    breed,
    health_condition,
    spay_neuter
  } = req.body;

  // Access uploaded files from multer
  const images_and_videos = req.files.map(file => file.filename);

  //animal id counter
  const animal_id = ++animalIdCounter;
  
  try {
    // Create a new animal
    const animal = await Animal.create({
      // required fields
      animal_id,
      name,
      age: {
        years: parseInt(ageYears, 10) || 0, // Default to 0
        months: parseInt(ageMonths, 10) || 0 // Default to 0
      },
      sex,
      animal_type,
      images_and_videos, //: Array.isArray(images_and_videos) ? images_and_videos : [], // Ensure this is an array
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
