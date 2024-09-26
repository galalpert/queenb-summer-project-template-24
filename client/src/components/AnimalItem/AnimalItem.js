const AnimalItem = ({ animals }) => {
    return (
        <div className="animal-item">

            <h4>{animals.name}</h4>
            <img src={animals.images_and_videos} alt="photo"></img>
            <p>{animals.images_and_videos}</p>
            <p><strong>animal type: </strong>{animals.animal_type}</p>
            <p><strong>color: </strong>{animals.color}</p>
            <p><strong>sex: </strong>{animals.sex}</p>
            <p><strong>age: </strong>{animals.age.years}</p>

        </div>
    )
}

export default AnimalItem