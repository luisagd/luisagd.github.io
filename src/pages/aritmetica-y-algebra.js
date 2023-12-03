import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React from "react"
import IntroLayout from "../components/Layout";
//TODO: convert to mdx or markdown
const numeracionLinks = [
    { url: 'sistema-de-numeracion', text: 'Sistema de numeración' },
    { url: 'sistema-de-los-numeros-reales', text: 'Sistema de los números reales' },
    { url: 'operaciones-fundamentales-de-la-aritmetica', text: 'Operaciones fundamentales de la Aritmética' },
    { url: 'teoria-de-divisibilidad', text: 'Teoría de divisibilidad' },
    { url: 'numeros-decimales-y-fraccionarios', text: 'Números decimales y fraccionarios' },
    { url: 'sistema-metrico-decimal', text: 'Sistema métrico decimal' },
    { url: 'expresiones-algebraicas', text: 'Expresiones algebraicas' },
    { url: 'divisibilidad-y-factorizacion-de-expresiones-algebraicas', text: 'Divisibilidad y factorización de expresiones algebraicas' },
    { url: 'ecuaciones-algebraicas', text: 'Ecuaciones algebraicas' },
    { url: 'potenciacion-y-radicacion', text: 'Potenciación y radicación' },
    { url: 'logaritmacion', text: 'Logaritmación' },
    { url: 'razones-y-proporciones', text: 'Razones y proporciones' },
    { url: 'progresiones', text: 'Progresiones' },
    // Agrega más enlaces según sea necesario
];
const AyaPage = () => {
    return (
        <IntroLayout links={numeracionLinks} pageTitle="Aritmética y Álgebra"></IntroLayout>
    )
}
export default AyaPage;
