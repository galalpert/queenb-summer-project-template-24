const express = require('express');
const { getAllAnimals,
    getSingleAnimal,
    deleteAnimal,
    updateAnimal,
 } = require('../controllers/animalController')
 const {filterAndSortPets, } = require('../controllers/filteringAndSortingController') 
 const {createAnimal, } = require('../controllers/uploadAnimalController') 

 
const router = express.Router()


/**
 * Read Only Permission Routes
 */
// GET filterd/sorted/both animals
router.get('/filterSort', filterAndSortPets)

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