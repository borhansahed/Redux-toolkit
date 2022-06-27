import logo from './logo.svg';
import './App.css';
import Cakeshop from './features/cake/Cakeshop';
import IcecreamShop from './features/icecream/IcecreamShop';

function App() {
  return (
    <div className='App'>
     <Cakeshop></Cakeshop>
     <IcecreamShop></IcecreamShop>
    </div>
  );
}

export default App;
