import { useState } from "react"



export default function LoginForm() {

//Etat Donnée
const [inputValue, setInput] = useState("")

//comportement
const handleClick = (e) => {
  console.log(e)
  //setInput(e.target.value)
}
const handleChange = (e) => {
  setInput(e.target.value)
}

const handlesubmit= (event) => {
  event.preventDefault();
  alert(`Bonjour ${inputValue}`)
  setInput("")
}



  return (
    <form action="submit" onSubmit={handlesubmit} r>
      <h1>Bienvenue chez nous</h1>
      <br />
      <h2>Connectez-vous</h2>
        <input type="text" placeholder="Entrez votre prénom" value={inputValue}
        onChange={handleChange} required/>
        <button onClick={handleClick}>Accédez a votre espace</button>
      </form>
  )
}
