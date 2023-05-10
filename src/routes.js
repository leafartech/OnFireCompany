import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import Inicio from './pages/Inicio'
import Metabolic from './pages/Metabolic'
import Offer from 'pages/Offer'
import Downsell1 from 'pages/Downsell1'

function AppRoutes() {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Inicio />} />
                <Route path="/metabolic" element={ <Metabolic /> } />
                <Route path="/oferta" element={ <Offer /> } />
                <Route path="/oferta/parabens" element={ <Downsell1 /> } />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes