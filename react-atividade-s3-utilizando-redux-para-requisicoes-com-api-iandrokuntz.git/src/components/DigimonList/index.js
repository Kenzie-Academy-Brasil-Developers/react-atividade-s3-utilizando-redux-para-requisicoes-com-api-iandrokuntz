import { useSelector } from "react-redux";
import "./style.css"

const DigimonList = () => {

  const { digimons } = useSelector((state) => state)

  return (

    <div>

            {digimons.map((digimon, index) => (
        <ul key={index}>
                <li>Name: <strong>{digimon.name}</strong></li>
                <li>Level: <strong>{digimon.level}</strong></li>  
                <img src={digimon.img} alt={digimon.name}/>
        </ul>
            ))}

    </div>
  )
}

export default DigimonList;