
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './Components/Pages/Home';
import Cart  from './Components/Pages/Cart';
import Navbar from './Components/Navbar';
import { Provider } from 'react-redux';
import store from './store/Store';

function App() {
  return (
    <>
     {/* wrap in provider 
      by the help of this we inject ur store in application
     */}
     <Provider store={store}>
     <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
     </BrowserRouter>
     </Provider>
     </>
  );
}

export default App;
