import logo from './logo.svg';
import './App.css';
import Profile from './profile/Profile';
import pic from './profile/test.jpg'

function App() {
  
  const handleName=() => {
  alert ("hello c'est une alerte")
  }
  
  return (
    <div>
    <Profile name="hammadi " bio="coach professionel " profession ="prof de sport" alerte={handleName}><img src={pic} alt="image"/></Profile>

 
    </div>
  );
}

export default App;
