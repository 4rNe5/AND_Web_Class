import './App.css'
import {useState} from "react";

function App() {
  const [isClicked, setIsClicked] = useState(false)

  const handleClick = () => {
      console.log('clicked')
      setIsClicked(!isClicked)
  }

  return (
    <>
        <div className='area'>
            <img onClick={() => {handleClick()}} src={'./src/assets/profile_pic.png'} className='profile'/>
            {isClicked
                ?
                <div className={'profilearea'}>
                    <h1> Kurodate Haruna </h1>
                    <h2 className={'myName'}> DGSW Developer </h2>
                </div>
                : null
            }
        </div>
    </>
  )
}

export default App
