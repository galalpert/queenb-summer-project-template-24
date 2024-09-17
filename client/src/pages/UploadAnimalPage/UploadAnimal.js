import React from 'react';
import styles from './UploadAnimal.module.css';
import UploadAnimalForm from '../../components/UploadAnimalForm/UploadAnimalForm';
import UploadSuccessMessage from '../../components/UploadSuccessMessage/UploadSuccessMessage';

const UploadAnimal = () => {

  const [isSubmitted, setIsSubmitted] = React.useState(false);

  // Function to handle submission status
  const handleSubmissionSuccess = () => {
    setIsSubmitted(true);
  };

  return (
    <div className={styles.UploadAnimal}>
      {isSubmitted ? (
        <UploadSuccessMessage />
      ) : (
        <UploadAnimalForm onSubmissionSuccess={handleSubmissionSuccess} />
      )}
    </div>
  );
}
 
export default UploadAnimal;