import './App.css';
import HomePage from './HomePage';
import BookingForm from './BookingForm';
import Header from './Header';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="main">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/booking" element={<BookingForm />}></Route>
      </Routes>
    </BrowserRouter>
      <Header />
      <BookingForm />
    </div>
    </div>
  );
}

export default App;
