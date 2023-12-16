import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React from "react"
import IntroLayout from "../components/Layout";
const fisicaLinks = [
    { url: 'mediciones-tecnicas-y-vectores', text: 'Mediciones técnicas y vectores' },
    { url: 'movimiento-en-una-dimension', text: 'Movimiento en una dimensión' },
    { url: 'leyes-de-newton-del-movimiento', text: 'Leyes de Newton del movimiento' },
    { url: 'trabajo-potencia-y-energia', text: 'Trabajo, Potencia y Energía' },
    { url: 'hidrostatica', text: 'Hidrostática' },
    { url: 'calorimetria', text: 'Calorimetría' },
    { url: 'optica', text: 'Óptica' },
    { url: 'electrostatica', text: 'Electrostática' },
    { url: 'electrodinamica', text: 'Electrodinámica' },
];

const FisicaPage = () => {
    return (
        <IntroLayout links={fisicaLinks} pageTitle="Física"></IntroLayout>
    )
}
export default FisicaPage;
