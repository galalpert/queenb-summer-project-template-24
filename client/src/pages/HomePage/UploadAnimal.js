import React from 'react';
import styles from './Home.module.css';
import UploadAnimalForm from '../../components/UploadAnimalForm/UploadAnimalForm';

const UploadAnimal = () => {
  return (
    <div className={styles.home}>
      <h1 className={styles.headline}>Upload page</h1>
      <UploadAnimalForm/>
    </div>
  );
}
 
export default UploadAnimal;