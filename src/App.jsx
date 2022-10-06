import "./App.css";
import reactImage from "@assets/react.svg";
import { Header } from "@components/layout/Header";

function App() {
  return (
    <>
      <Header />
      <div className="App">Olá Mundo!</div>
      <img src={reactImage} alt="" />
    </>
  );
}

export default App;
