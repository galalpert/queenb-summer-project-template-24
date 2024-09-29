import { AnimalContext } from '../../context/AnimalContext';

const AnimalItem = ({ animals }) => {
    /*const {dispatch} = AnimalContext()

    const handleClick = async() => {
        const response = await fetch('/animal' + animals.animal_id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({type: 'DELETE_ANIMAL', payload: json})
        }
    }*/ //delete func
    //<span onClick={handleClick}>delete</span>

    return (
        <div className="animal-item">

            <h1>{animals.name}</h1>
            <img src={animals.images_and_videos} alt={animals.title} /*className={styles.img}*/></img>
            <p><strong>animal type: </strong>{animals.animal_type}</p>
            <p><strong>color: </strong>{animals.color}</p>
            <p><strong>sex: </strong>{animals.sex}</p>
            <p><strong>age: </strong>{animals.age.years}</p>
        </div>
    )
}

export default AnimalItem