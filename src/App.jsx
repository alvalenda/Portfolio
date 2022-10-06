import "./App.css";
import img1 from "@assets/avatar1.jpg";
import { Header } from "@components/layout/Header";

function App() {
  return (
    <>
      <Header />
      <div className="App">Olá Mundo!</div>
      <img src={img1} alt="" />
    </>
  );
}

export default App;
