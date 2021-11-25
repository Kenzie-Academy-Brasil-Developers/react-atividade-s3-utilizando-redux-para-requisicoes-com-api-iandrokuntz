import axios from "axios";

import { addDigimon } from "./actions"

const addDigimonsThunk = (digimon, setError) => (dispatch) => {
  axios
    .get("https://digimon-api.vercel.app/api/digimon")
    .then((response) => {

      const objDigimons = response.data
      const chooseDigimon = objDigimons.filter((digi) => digi.name === digimon)
      dispatch(addDigimon(chooseDigimon))
      if (chooseDigimon.length < 1) {
        setError("Digimon não encontrado")
      }
    })
    .catch((err) => {
      setError(true)
    })
}

export default addDigimonsThunk;