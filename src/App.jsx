
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
import Form from "./Components/Form";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import Home from "./Routes/Home";



function App() {
  return (
      <div className="App">
          <Navbar/>
          <Footer/>
          <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/favs' element={<Favs/>}/>
          <Route path='/dentist/:id' element={<Detail/>}/>
          </Routes>
          <Card></Card>
      </div>
  );
}

export default App;
