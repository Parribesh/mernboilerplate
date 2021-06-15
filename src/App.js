import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <hr/>
        <p>Hello World</p>
        <hr/>
        <Footer />
      </header>
    </div>
  );
}

export default App;
