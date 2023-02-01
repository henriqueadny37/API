import { useEffect, useState } from "react"

export default function quest() {
    const [quest, setQuest] = useState(null)

      useEffect(() => {
        fetch('http://localhost:3000/api/questy/1')
        .then(resp => resp.json())
        .then(setQuest)
      }, [])

        function renderCop(){
            if(quest){
                return quest.respostas.map((resp, i) => {
                    return <li key={i}>{resp}</li>
                })
            }
            return false
        }

    return(
        <div style={{
            fontFamily:"arial",
            margin:"30px",
            color:"#ecec0d",
            fontSize:"2rem",
        }}>
            <h1>Questionário</h1>
          <div>
            <span>{quest?.enunciado}</span>
            <ul>
                {renderCop()}
            </ul>
          </div>
        </div>
    )
}