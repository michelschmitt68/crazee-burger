import { useState } from "react";

export default function LoginForm() {

    const [valueInput, setValueInput] = useState("");

    const handleChange = (e) => {
        setValueInput(e.target.value); 
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Bonjour " + valueInput);
        setValueInput("");
    };
    
    return(
        <div>

            <h1>Bienvenue chez nous</h1>
            <br />
            <h2>Connectez-vous</h2>
            <form action="submit" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Entrez votre prénom..."
                    required 
                    value={valueInput} 
                    onChange={handleChange} 
                />
                <button >
                    Accéder à votre espace
                </button>
            </form>
        </div>
    )
}