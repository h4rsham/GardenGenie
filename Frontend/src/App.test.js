import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Home from "./components/Home/Home.js";
import Multiform from "./components/Form/Multiform.js";
import Results from "./components/Results/Results.js";
import PlantInfo from "./components/PlantInfo/PlantInfo.js";

describe("Routing Tests", () => {
  it("renders the correct component for the / path", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByLabelText("Button that leads to Form")).toBeInTheDocument();
  });

  

  it("renders the correct component for the /form path", () => {
    const values = {
      time: "",
      space: "",
      region: "",
      accessibility: "",
      budget: "",
    }
      
    const { container } = render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Multiform values={values}/>} />
        </Routes>
      </MemoryRouter>
    );

    const button = container.querySelector('#get_started');
    fireEvent.click(button);

    expect(screen.getByText("Time")).toBeInTheDocument();
  });

  /*

  it("renders the correct component for the /results path", () => {
    render(
      <MemoryRouter initialEntries={["/results"]}>
        <Routes>
          <Route path="/results" element={<Results />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText("All the results")).toBeInTheDocument();
  });

  it("renders the correct component for the /plant-info path", () => {
    render(
      <MemoryRouter initialEntries={["/plant-info"]}>
        <Routes>
          <Route path="/plant-info" element={<PlantInfo />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText("Plants plants plants")).toBeInTheDocument();
  });
*/});

// describe("User actions")