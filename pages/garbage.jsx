const Home = () => {
    return (
      <section className='home'>
        <nav className='header'>
            <h1>#VANLIFE</h1>
            <Link to= "/about">About</Link>
            <Link to= "/#">Vans</Link>
        </nav>
        <div className='body'>
            <h2>You got the travel plans, we got the travel vans.</h2>
            <h4>Add adventure to your life by joining the #vanlife movement.
               Rent the perfect van to make your perfect road trip.</h4>
               <button>Find Your Van</button>
        </div>
        <section className='footer'>
          <div className='footer-content'>
              <faCopyright />
              <h4>2022 #VANLIFE</h4>
          </div>
        </section>
      </section>
    )
  }
  
  
  const About = () => {
    return (
      <h1> Hi, I am Learning React Router</h1>
    )
  }

  //from Dogs
<div className='van-info'>
<h3>{name}</h3>
<p>₦{price}<span>/day</span></p>
<i className={`van-type ${type} selected`}>{type}</i>
</div>  


  //my index.js

  import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
//import { faCopyright } from '@fortawesome/react-fontawesome'


const App = () => {
  return (
        <BrowserRouter>
            <header>
                <Link to='/' className='site-logo'>#VANLIFE</Link>
                <nav>
                  <Link to='/about'>About</Link>
                  <Link to='#'>Vans</Link>
                </nav>
            </header>
        <Routes>
            <Route path="/" element = {<Home />} />
            <Route path="/about" element = {<About />} />
        </Routes>
      </BrowserRouter>
  )
}

//ReactDOM.createRoot( document.getElementById('root').render(<App />))

ReactDOM.render(<App />, document.getElementById('root'))




