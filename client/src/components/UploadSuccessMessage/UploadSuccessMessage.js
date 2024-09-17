import styles from "./UploadSuccessMessage.module.css";
import { useNavigate } from 'react-router-dom';
import NavButton from "../common/NavButton/NavButton";

const UploadSuccessMessage = ({ name, image, onSubmissionSuccess}) => {

  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };
  const handleGoUpload = () => {
    onSubmissionSuccess(null); // Reset the submission data
    navigate('/UploadAnimal');
  };

  return (
    <div>
      <h1 className={styles.title}>Thank you for uploading a new Animal!</h1>
      <h2 className={styles.title}>{name} is ready to be adopted</h2>
      
      <NavButton onClick={handleGoHome}>Home Page</NavButton>
      <NavButton onClick={handleGoUpload}>Upload more!</NavButton>
    </div>
   );
}
 
export default UploadSuccessMessage;