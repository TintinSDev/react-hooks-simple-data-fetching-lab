// create your App component here
import React,{useState, useEffect} from "react";

function App() {
    
    const [isDog, setIsDog] = useState([]);

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => setIsDog(data))
    }, []);

    if (!isDog.message) return <p>"Loading......."</p> 
    return (
        <div>
            <h1>Random Dog</h1>
            <img src={isDog.message} alt="A Random Dog" />
        </div>
    )

    
}



export default App;