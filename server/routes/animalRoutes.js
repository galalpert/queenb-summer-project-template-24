const express = require('express');
const { createAnimal,
    getAllAnimals,
    getSingleAnimal,
    deleteAnimal,
    updateAnimal,
 } = require('../controllers/animalController')
 const {getFilterPets, } = require('../controllers/filteringController') 

 
const router = express.Router()

router.get('/filter', getFilterPets)

/**
 * Read Only Permission Routes
 */
// GET all animals
router.get('/', getAllAnimals)

// GET a single animal
router.get('/:id', getSingleAnimal)

/**
 * Read and Write Permission Routes
 */
// POST a new animal
router.post('/', createAnimal)

// DELETE a animal
router.delete('/:id', deleteAnimal)

// UPDATE a animal
router.patch('/:id', updateAnimal)

module.exports = router