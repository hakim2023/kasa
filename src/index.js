import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/'
import Logements from './pages/Logements/'
import Logement from './components/Logement'
import Header from './components/Header'
import Propos from './pages/Propos'
import Error from './pages/Error'
import Footer from './components/Footer'
import { logements } from './data/logements'
import { useParams } from 'react-router-dom'

let id;
const logement = logements.find((logement) => logement.id === id)
 
ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Header/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/logements" element={<Logements />} />
                <Route path="/logement/:id" element={<Logement />} />
                <Route path="/a_propos" element={<Propos />} />
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer/>
        </Router>
    </React.StrictMode>,
document.getElementById('root')
)