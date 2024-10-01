
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
            <h4><strong>animal type: </strong>{animals.animal_type}</h4>
            <h4><strong>sex: </strong>{animals.sex}</h4>
            <h4><strong>age: </strong>{animals.age.years}.{animals.age.months}</h4>
            <h4><strong>color: </strong>{animals.color}</h4>
            <h4><strong>Area: </strong>{animals.area_of_adoption}</h4>
            <h4><strong>Description: </strong></h4>
            <p>{animals.description}</p>
            
        </div>
    )
}

export default AnimalItem