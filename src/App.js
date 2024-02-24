import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import HomePage from './Pages/HomePage';
import CoinPage from './Pages/CoinPage';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';




function App() {

 

  return (
    <Provider store={appStore}>
    <BrowserRouter>
    <div className="bg-gray-950 text-white min-h-screen">
      <Header/>
        <Routes>
        <Route path='/' Component={HomePage} exact/>
        <Route path='/coin/:coinid' Component={CoinPage}/>
        </Routes>
    </div>
    </BrowserRouter>
    </Provider>
    
  );
}

export default App;
