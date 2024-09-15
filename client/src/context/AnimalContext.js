import React, { createContext, useState, useEffect } from 'react';
import api from '../services/api';

const AnimalContext = createContext();

const AnimalProvider = ({ children }) => {
    const [animal, setAnimal] = useState(null);

    const getAllAnimals= async () => {
        try {
            const response = await api.get('/animalRoutes/');
            setAnimal(response.data);
        } catch (error) {
            console.error('Error fetching the animals:', error);
        }
    };

    useEffect(() => {
        getAllAnimals();
    }, []);

    return (
        <AnimalContext.Provider value={{ animal, getAllAnimals }}>
            {children}
        </AnimalContext.Provider>
    );
};

export { AnimalContext, AnimalProvider };
