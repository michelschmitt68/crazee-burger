import { useState } from "react";

export default function Login() {
    const [valueInput, setValueInput] = useState("");

    const handleChange = (e) => {
        setValueInput(e.target.value); 
    };

    const handleClick = () => {
        if (valueInput.trim() === "") {
            alert("Veuillez entrer votre prénom");
            return;
        }
        alert("Bonjour " + valueInput);
        setValueInput("");
    };

    return (
        <>
            <p>Bienvenue chez nous</p>
            <p>Connectez-vous</p>
            <input
                type="text"
                placeholder="Entrez votre prénom..." 
                value={valueInput} 
                onChange={handleChange} 
            />
            <button onClick={handleClick}>
                Accéder à votre espace
            </button>
        </>
    );
}
