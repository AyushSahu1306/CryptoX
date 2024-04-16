import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import HomePage from './Pages/HomePage';
import CoinPage from './Pages/CoinPage';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import Login from './Pages/Login';



function App() {

 

  return (
    <Provider store={appStore}>
    <BrowserRouter>
    <div className="bg-gray-950 text-white min-h-screen">
      <Header/>
        <Routes>
        <Route path='/' Component={Login} exact/>
        <Route path='/home' Component={HomePage} exact/>
        <Route path='/coin/:coinid' Component={CoinPage}/>
        </Routes>
    </div>
    </BrowserRouter>
    </Provider>
    
  );
}

export default App;
