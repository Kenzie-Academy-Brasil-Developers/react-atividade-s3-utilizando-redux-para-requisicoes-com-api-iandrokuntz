import { useState } from "react";
import { useDispatch } from "react-redux";
import addDigimonsThunk from "../../store/modules/digimons/thunks";

const Search = () => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  const handleSearch = () => {
    setError(false);
    dispatch(addDigimonsThunk(input, setError));
    setInput("");
  };

  return (
    <div>
      <h1>Digimon List</h1>
      <div>
        <input value={input} onChange={(event) => setInput(event.target.value)} placeholder="Search Pokemon"></input>
        <button onClick={handleSearch}>Search</button>
      </div>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Search;