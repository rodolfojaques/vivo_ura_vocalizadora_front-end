import axios from "axios"
import { useState } from "react"

function Teste(){
    const [result, setResult] = useState('')

    const getCep = () => {
        axios.get("http://viacep.com.br/ws/01001000/json/", {
            headers: {
              "Content-Type": "application/json",
            },
          })
        .then(res=> setResult(JSON.stringify(res.data)))
    }

    return (
        <div>
            <h1>TESTE</h1>
            <br />
            <button onClick={getCep}>Testar</button>
            <br />
            <br />
            <p>resultado:</p>
            <br />
            <p>{result}</p>
        </div>
    )
}

export default Teste