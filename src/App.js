
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Profile from './profile/profile'



function App() {
  const greeting = (value) => alert(value)

  return (
    <>
      <Profile fullName="sirine " age="25 " bio=" je suis actuelement etudiante en developpement web "
       profession="developpeur web " greeting={greeting} >
      </Profile>
    </>
  )
}

export default App;
