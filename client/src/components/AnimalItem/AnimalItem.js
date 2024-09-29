
import { AnimalContext } from '../../context/AnimalContext';
import styles from "./AnimalItem.module.css";


const AnimalItem = ({ animals }) => {



    return (
        <div className="animal-item">

            <h1>{animals.name}</h1>
            {animals.images_and_videos[0] && (
                <img 
                src={`http://localhost:5000/uploads/${animals.images_and_videos[0]}`} 
                alt={animals.images_and_videos[0]}
                className={styles.image} 
                />
            )}
            <img src={`http://localhost:5000/server/AnimalUploadMedia/${animals.images_and_videos[0]}`} alt={animals.name} />
            <p><strong>animal type: </strong>{animals.animal_type}</p>
            <p><strong>color: </strong>{animals.color}</p>
            <p><strong>sex: </strong>{animals.sex}</p>
            <p><strong>age: </strong>{animals.age.years}</p>
        </div>
    )
}

export default AnimalItem