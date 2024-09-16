import { useState } from "react";

const UploadAnimalForm = () => {
  // create states for each input data
  const [name, setName] = useState('')
  const [ageYears, setAgeYears] = useState('')
  const [ageMonths, setAgeMonths] = useState('')
  const [sex, setSex] = useState('')
  const [media, setMedia] = useState('')
  const [description, setDescription] = useState('')
  const [areaOfAdoption, setAreaOfAdoption] = useState('')
  const [color, setColor] = useState('')
  const [getAlongWith, setGetAlongWith] = useState('')
  const [breed, setBreed] = useState('')
  const [healthCondition, setHealthCondition] = useState('')
  const [spayOrNeuter, setSpayOrNeuter] = useState('')

  const [error, setError] = useState('')

  const handleAnimalSubmit =async (e)=>{
    e.preventDefault()

    const animal = {name,color,breed}
    //create a post request
    const response = await fetch('/api/animals', {
      method: 'POST',
      body: JSON.stringify(animal),
      headers: {
        'Content-Type': 'application/json'
      }
    } )

    const json = await response.json()

    if(!response.ok){
      setError(json.error)
    }
    if(response.ok){
      //return to empty 
      setName('')
      setColor('')
      setBreed('')
      setError(null)
      console.log("new animal added")
    }
  }

  return ( 
    <form action="" className="create" onSubmit={handleAnimalSubmit}>
      <h3>add a new animal!</h3>
      <label>animal name:</label>
      <input
        type="text"
        onChange={(e)=> setName(e.target.value)}
        value={name}
      />
      <label>Age years:</label>
      <input
        type="number"
        onChange={(e)=> setAgeYears(e.target.value)}
        value={ageYears}
      />
      <label>Months:</label>
      <input
        type="number"
        onChange={(e)=> setAgeMonths(e.target.value)}
        value={ageMonths}
      />
      <label>sex:</label>
      <input
        type="text"
        onChange={(e)=> setSex(e.target.value)}
        value={sex}
      />
      <label>media:</label>
      <input
        type="text"
        onChange={(e)=> setMedia(e.target.value)}
        value={media}
      />
      <label>description:</label>
      <input
        type="text"
        onChange={(e)=> setDescription(e.target.value)}
        value={description}
      />
      <label>area Of Adoption:</label>
      <input
        type="text"
        onChange={(e)=> setAreaOfAdoption(e.target.value)}
        value={areaOfAdoption}
      />
      <label>color:</label>
      <input
        type="text"
        onChange={(e)=> setColor(e.target.value)}
        value={color}
      />
      <label>the animal get Along With:</label>
      <input
        type="text"
        onChange={(e)=> setGetAlongWith(e.target.value)}
        value={getAlongWith}
      />
      <label>breed:</label>
      <input
        type="text"
        onChange={(e)=> setBreed(e.target.value)}
        value={breed}
      />
      <label>health Condition:</label>
      <input
        type="text"
        onChange={(e)=> setHealthCondition(e.target.value)}
        value={healthCondition}
      />
      <label>spay/Neuter ?</label>
      <input
        type="text"
        onChange={(e)=> setSpayOrNeuter(e.target.value)}
        value={spayOrNeuter}
      />

      <button>Upload Animal</button>
      {error && <div className="error">{error}</div>}
    </form>

   );
}
 
export default UploadAnimalForm;