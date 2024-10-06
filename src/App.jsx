import { useState } from "react";
import "./App.css";
import { People } from "./components/People";

function App() {
  const [people, setPeople] = useState([
    {
      id: 1,
      name: "Luis C",
      role: "frontend",
      img: "https://bootdey.com/img/Content/avatar/avatar2.png",
      age: 30,
    },
    {
      id: 2,
      name: "ines O",
      role: "Backend",
      img: "https://bootdey.com/img/Content/avatar/avatar8.png",
      age: 42,
    },
    {
      id: 3,
      name: "Karen Colon",
      role: "QA",
      img: "https://bootdey.com/img/Content/avatar/avatar3.png",
      age: 26,
    },
  ]);

  return (
    <div>
      <People people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
