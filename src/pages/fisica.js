import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React from "react"
const fisicaLinks = [
    { url: '/mediciones-tecnicas-y-vectores', text: 'Mediciones técnicas y vectores' },
    { url: '/movimiento-en-una-dimension', text: 'Movimiento en una dimensión' },
    { url: '/leyes-de-newton-del-movimiento', text: 'Leyes de Newton del movimiento' },
    { url: '/trabajo-potencia-y-energia', text: 'Trabajo, Potencia y Energía' },
    { url: '/hidrostatica', text: 'Hidrostática' },
    { url: '/calorimetria', text: 'Calorimetría' },
    { url: '/optica', text: 'Óptica' },
    { url: '/electrostatica', text: 'Electrostática' },
    { url: '/electrodinamica', text: 'Electrodinámica' },
];

const FisicaPage = () => {
    return (
        <div>
            <main className='Main'>
                <Navbar />
                <header className="Base-header">
                    <p> Bienvenido a mi página</p>
                </header>
            </main>
            <Footer />
        </div>


    )
}
export default FisicaPage;
