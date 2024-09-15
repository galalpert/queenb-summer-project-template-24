const Animal = require('../models/AnimalModel');

// get all animals
const getAllAnimals = async (req, res) => {
    try {
        const animal = await Animal.find();
        res.status(200).json({animal});
    } catch (err) {
        res.status(400).json({mssg: 'error getting animal', err})
    }
}


// get a single animal
const getSingleAnimal = async (req, res) => {
    const {animal_id} = req.params;

    try {
        const animal = await Animal.findById(animal_id);
        res.status(200).json({animal});
    } catch (err) {
        res.status(400).json({mssg: 'error getting animal', err})
    }
}

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

// delete a animal
const deleteAnimal = async (req, res) => {
    const {animal_id} = req.params;

    try {
        const animal = await Animal.findByIdAndDelete(animal_id);
        res.status(200).json({animal});
    } catch (err) {
        res.status(400).json({mssg: 'error deleting animal', err})
    }
}

// update a animal
const updateAnimal = async (req, res) => {
    const {animal_id} = req.params;
    const {name, age, sex, animal_type, images_and_videos, description, contact_user, area_of_adoption, color} = req.body;

    try {
        const animal = await Animal.findByIdAndUpdate(id, {name, age, sex, animal_type, images_and_videos, description, contact_user, area_of_adoption, color}, {new: true});
        res.status(200).json({animal});
    } catch (err) {
        res.status(400).json({mssg: 'error updating animal', err})
    }
}

module.exports = {
    createAnimal,
    getAllAnimals,
    getSingleAnimal,
    deleteAnimal,
    updateAnimal,
}