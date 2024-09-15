const Animal = require('../models/AnimalModel');


// Function to filter pets by multiple parameters
const getFilterPets = async (req, res) => {
    try {
        // Initialize an empty query object
        let query = {};

        // Destructure potential query parameters from the request
        const { minAge, maxAge, sex, animal_type, breed, color, area_of_adoption } = req.query;

        // Add conditions to the query object based on the parameters provided

        // Age range filter
        if (minAge || maxAge) {
            query.age = {};
            if (minAge) query.age.$gte = parseInt(minAge);
            if (maxAge) query.age.$lte = parseInt(maxAge);
        }

        if (sex) {
            query.sex = sex;
        }

        if (animal_type) {
            query.animal_type = animal_type;
        }

        if (breed) {
            query.breed = breed;
        }

        if (color) {
            query.color = color;
        }

        if (area_of_adoption) {
            query.area_of_adoption = area_of_adoption;
        }

        
        // Execute the query with the dynamically built filter
        const animal = await Animal.find(query);

        // Send the filtered results as the response
        res.status(200).json({animal});
    } catch (error) {
        console.error('Error filtering pets:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = {
    getFilterPets,
};