import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { Footer } from './components'
import { Services } from './components'
import { Work } from './components'
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


class App extends Component {
  render(){
    return  <Provider>
    <Router>
        <div className='app-container' id="try">
            <header id="fh5co-header">
                <div className="container">
                    <div className="header-inner">
                        <h1><a href="index.html">Demo</a></h1>
                        <nav role="navigation">
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/work">Work</Link>
                                </li>
                                <li>
                                    <Link to="/services">Services</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>


            <div id="work_id">
                < Work /> </div>
            <div id="services_id">
                < Services /> </div>

            <Route path='/services' render={()=> {
              document.getElementById("services_id").scrollIntoView({ behavior: "smooth"});
               return <Services />; } } /> />
            <Route path='/work' render={()=> {
                 document.getElementById("work_id").scrollIntoView({ behavior: "smooth"});
                  return <Work />; } } /> />
        </div>
    </Router>
</Provider>

  }
}

ReactDOM.render(<App />, document.getElementById('root'))
