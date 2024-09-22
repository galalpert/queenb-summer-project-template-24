import React, { useContext } from 'react';
import styles from './DisplayAnimals.module.css';
import { AnimalContext } from '../../context/AnimalContext';
import FirstButton from '../common/FirstButton/FirstButton';

const DispalyAnimals = () => {
  debugger;
  const { animals, getAllAnimals} = useContext(AnimalContext);

  if (!animals) return null;

  console.log("animals", animals)

  return (
    <div className={styles.container}>
        {animals && (
          <div className={styles.animal}>
            <h2 className={styles.animalname}>{animals.name}</h2>
            {animals.images_and_videos && <img src={animals.images_and_videos} alt={animals.name} className={styles.img} />}
          </div>
        )}
    </div>
  );
};

export default DispalyAnimals;
