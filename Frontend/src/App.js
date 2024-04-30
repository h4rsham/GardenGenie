import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./components/Home/Home.js";
import Multiform from "./components/Form/Multiform.js";
import Results from "./components/Results/Results.js";
import PlantInfo from "./components/PlantInfo/PlantInfo.js";

function App() {
  // || STATES

  const [plants, setPlants] = useState([]);

  const [values, setValues] = useState({
    time: "",
    space: "",
    region: "",
    accessibility: "",
    budget: "",
  });

  const navigate = useNavigate();

  // || FUNCTIONS

  const handleFormSubmit = (values) => {
    navigate("/results", { state: values });
  };

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <Routes>
      <Route
        path="/"
        element={<Home handleLogoClick={handleLogoClick} />}
      ></Route>
      <Route
        path="form"
        element={
          <Multiform
            onFormSubmit={handleFormSubmit}
            values={values}
            setValues={setValues}
            plants={plants}
            setPlants={setPlants}
            handleLogoClick={handleLogoClick}
          />
        }
      ></Route>

      <Route
        path="results"
        element={
          <Results
            plants={plants}
            values={values}
            handleLogoClick={handleLogoClick}
          />
        }
      ></Route>

      <Route
        path="plant-info/:plantid"
        element={
          <PlantInfo plants={plants} handleLogoClick={handleLogoClick} />
        }
      ></Route>
    </Routes>
  );
}

export default App;
