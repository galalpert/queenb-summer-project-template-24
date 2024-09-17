import React from 'react';
import styles from './UploadAnimal.module.css';
import UploadAnimalForm from '../../components/UploadAnimalForm/UploadAnimalForm';

const UploadAnimal = () => {
  return (
    <div className={styles.UploadAnimal}>
      <UploadAnimalForm/>
    </div>
  );
}
 
export default UploadAnimal;