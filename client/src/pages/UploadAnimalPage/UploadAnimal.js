import { useState } from "react";
import styles from './UploadAnimal.module.css';
import UploadAnimalForm from '../../components/UploadAnimalForm/UploadAnimalForm';
import UploadSuccessMessage from '../../components/UploadSuccessMessage/UploadSuccessMessage';

const UploadAnimal = () => {

  const [submissionData, setSubmissionData] = useState("");

  // Function to handle submission status
  const handleSubmissionSuccess = (data) => {
    setSubmissionData(data);
  };

  return (
    <div className={styles.UploadAnimal}>
      {submissionData ? (
         <UploadSuccessMessage name={submissionData.name} images={submissionData.images_and_videos} onSubmissionSuccess={handleSubmissionSuccess} />
      ) : (
        <UploadAnimalForm onSubmissionSuccess={handleSubmissionSuccess} />
      )}
    </div>
  );
}
 
export default UploadAnimal;