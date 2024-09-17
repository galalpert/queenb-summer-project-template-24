import { useState } from "react";
import styles from "./UploadAnimalForm.module.css";

const UploadAnimalForm = ({onSubmissionSuccess}) => {
  // create states for each input data
  const [name, setName] = useState('');
  const [ageYears, setAgeYears] = useState(0);
  const [ageMonths, setAgeMonths] = useState(0);
  const [animal_type, setAnimalType] = useState('');
  const [sex, setSex] = useState('');
  const [images_and_videos, setImagesAndVideos] = useState([]);
  const [description, setDescription] = useState('');
  const [area_of_adoption, setAreaOfAdoption] = useState('');
  const [color, setColor] = useState('');
  const [get_along_with, setGetAlongWith] = useState('');
  const [breed, setBreed] = useState('');
  const [health_condition, setHealthCondition] = useState('');
  const [spay_neuter, setSpayOrNeuter] = useState('');
  const [error, setError] = useState('');


  // Handle form submission
  const handleAnimalSubmit = async (e) => {
    e.preventDefault(); //don't refresh the page
  
    const animal = {
      name,
      age: {
        years: parseInt(ageYears, 10),
        months: parseInt(ageMonths, 10),
      },
      sex,
      animal_type,
      images_and_videos,
      description,
      area_of_adoption,
      color,
      get_along_with,
      breed,
      health_condition,
      spay_neuter
    };
    
    try {
      // Make the POST request to the server
      const response = await fetch('http://localhost:5000/api/animals/', {
        method: 'POST',
        body: JSON.stringify(animal),
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      // Check if the response is not OK
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Error from server:', errorText);
        setError(errorText);
        return;
      }
  
      // If response is OK, parse it as JSON
      const json = await response.json();
  
      // reset form after successful response
      setName('');
      setAgeYears(0);
      setAgeMonths(0);
      setSex('');
      setAnimalType('');
      setImagesAndVideos([]);
      setDescription('');
      setAreaOfAdoption('');
      setColor('');
      setGetAlongWith('');
      setBreed('');
      setHealthCondition('');
      setSpayOrNeuter('');
      setError(null);
      console.log("New animal added:", json);

      onSubmissionSuccess()  //changed status to submitted
    } catch (err) {
      console.error('Unexpected error:', err);
      setError('Unable to submit the form. Please check your network or server.');
    }
  };

  // Handle images input change
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setImagesAndVideos(files.map(file => file.name)); 
  };

  // Generate arrays for dropdown options
  const years = Array.from({ length: 51 }, (_, i) => i); // 0 to 50 years
  const months = Array.from({ length: 12 }, (_, i) => i); // 0 to 11 months


  return (
    <form className={styles.form} onSubmit={handleAnimalSubmit}>
      <h3 className={styles.title}>Add a New Animal!</h3>
      <div className={styles.field}>
        <label>Animal Name:</label>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
          required
        />
      </div>
      <div className={styles.field}>
        <label>Age:</label>
        <div className={styles.ageFields}>
          <select
            onChange={(e) => setAgeYears(e.target.value)}
            value={ageYears}
          >
            <option value="" disabled>Select Years</option>
            {years.map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
          <select
            onChange={(e) => setAgeMonths(e.target.value)}
            value={ageMonths}
          >
            <option value="" disabled>Select Months</option>
            {months.map(month => (
              <option key={month} value={month}>{month}</option>
            ))}
          </select>
        </div>
      </div>
      <div className={styles.field}>
        <label>Sex:</label>
        <input
          type="text"
          onChange={(e) => setSex(e.target.value)}
          value={sex}
          required
        />
      </div>
      <div className={styles.field}>
        <label>Animal Type:</label>
        <input
          type="text"
          onChange={(e) => setAnimalType(e.target.value)}
          value={animal_type}
          required
        />
      </div>
      <div className={styles.field}>
        <label>Description:</label>
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          required
        />
      </div>
      <div className={styles.field}>
        <label>Area of Adoption:</label>
        <input
          type="text"
          onChange={(e) => setAreaOfAdoption(e.target.value)}
          value={area_of_adoption}
          required
        />
      </div>
      <div className={styles.field}>
        <label>Color:</label>
        <input
          type="text"
          onChange={(e) => setColor(e.target.value)}
          value={color}
          required
        />
      </div>
      <div className={styles.field}>
        <label>Get Along With:</label>
        <input
          type="text"
          onChange={(e) => setGetAlongWith(e.target.value)}
          value={get_along_with}
        />
      </div>
      <div className={styles.field}>
        <label>Breed:</label>
        <input
          type="text"
          onChange={(e) => setBreed(e.target.value)}
          value={breed}
        />
      </div>
      <div className={styles.field}>
        <label>Health Condition:</label>
        <input
          type="text"
          onChange={(e) => setHealthCondition(e.target.value)}
          value={health_condition}
        />
      </div>
      <div className={styles.field}>
        <label>Spay/Neuter:</label>
        <input
          type="text"
          onChange={(e) => setSpayOrNeuter(e.target.value)}
          value={spay_neuter}
        />
      </div>
      <div className={styles.field}>
        <label>Upload Images and Videos:</label>
        <input
          type="file"
          multiple
          onChange={handleFileChange}
        />
      </div>
      <div className={styles.submitButton}>
      <button type="submit">Upload Animal</button>
      </div>
      {error && <div className={styles.error}>{error}</div>}
    </form>
  );
};

export default UploadAnimalForm;
