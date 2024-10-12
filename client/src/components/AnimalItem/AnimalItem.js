
import styles from "./AnimalItem.module.css";


const AnimalItem = ({ animals }) => {

    console.log(animals.contact_user)

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
            {animals.contact_user && (
                <>
                    <h4><strong>Contact User: </strong></h4>
                    <h5>{animals.contact_user.name}</h5>
                    <h5>{animals.contact_user.phone_number}</h5>  
                </>
            )}
            
        </div>
    )
}

export default AnimalItem