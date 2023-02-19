import "./App.css";
import { useSelector } from "react-redux";
import Store from "./components/store";
import Heading from "./components/heading";
import Footer from "./components/footer";

function App() {
  const data = useSelector((state) => state.products);
  console.log(data);
  return (
    <div className="App">
      <Heading></Heading>
      <Store></Store>
      <Footer></Footer>
    </div>
  );
}

export default App;
