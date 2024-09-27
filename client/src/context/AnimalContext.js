import React, { createContext, useState, useEffect } from 'react';
import api from '../services/api';

const AnimalContext = createContext();

const AnimalProvider = ({ children }) => {
    const [animals, setAnimals] = useState(null);

    const getAllAnimals= async () => {
        try {
            const response = await api.get('/animals/');
            setAnimals(response.data);
        } catch (error) {
            console.error('Error fetching the animals:', error);
        }
    };

    useEffect(() => {
        getAllAnimals();
    }, []);

    return (
        <AnimalContext.Provider value={{ animals, getAllAnimals }}>
            {children}
        </AnimalContext.Provider>
    );
};

const animalOptions = [
    { value: "", label: "", disabled: true, hidden: true }, 
    { value: "Dog", label: "Dog" },
    { value: "Cat", label: "Cat" },
    { value: "Rabbit", label: "Rabbit" },
    { value: "Guinea Pig", label: "Guinea Pig" },
    { value: "Hamster", label: "Hamster" },
    { value: "Bird", label: "Bird" },
    { value: "Fish", label: "Fish" },
    { value: "Reptile", label: "Reptile" },
    { value: "Horse", label: "Horse" },
    { value: "Goat", label: "Goat" },
    { value: "Chicken", label: "Chicken" },
    { value: "Other", label: "Other" },
  ];
  
 

export { AnimalContext, AnimalProvider, animalOptions };
