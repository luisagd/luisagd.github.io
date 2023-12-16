import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React from "react"
import IntroLayout from "../components/Layout";
const geometriaAnaliticaLinks = [
    { url: 'introduccion-a-la-geometria-analitica-plana', text: 'Introducción a la Geometría Analítica Plana' },
    { url: 'vectores-en-el-plano', text: 'Vectores en el plano' },
    { url: 'inecuaciones', text: 'Inecuaciones' },
    { url: 'funciones', text: 'Funciones' },
    { url: 'limite-de-una-funcion', text: 'Límite de una función' },
    { url: 'continuidad-de-una-funcion', text: 'Continuidad de una función' },
    { url: 'derivada-de-una-funcion', text: 'Derivada de una función' },
    { url: 'integrales', text: 'Integrales' },
    // Agrega más enlaces según sea necesario
];

const AyCPage = () => {
    return (
        <IntroLayout links={geometriaAnaliticaLinks} pageTitle="Geometría Analítica y Cálculo"></IntroLayout>
    )
}
export default AyCPage;
