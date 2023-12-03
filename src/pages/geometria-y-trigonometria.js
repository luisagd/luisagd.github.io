import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React from "react"
import IntroLayout from "../components/Layout";
const geometriaBasicaLinks = [
    { url: '/entes-geometricos-fundamentales', text: 'Entes geométricos fundamentales' },
    { url: '/poligonos-nociones-generales', text: 'Polígonos. Nociones generales' },
    { url: '/triangulos', text: 'Triángulos' },
    { url: '/cuadrilateros', text: 'Cuadriláteros' },
    { url: '/proporcionalidad-geometrica', text: 'Proporcionalidad Geométrica' },
    { url: '/circunferencia-y-circulo', text: 'Circunferencia y círculo' },
    { url: '/areas-de-figuras-planas', text: 'Áreas de figuras planas' },
    { url: '/cuerpos-geometricos', text: 'Cuerpos geométricos' },
    { url: '/trigonometria-nociones-preliminares', text: 'Trigonometría. Nociones preliminares' },
    { url: '/razones-y-funciones-trigonometricas', text: 'Razones y funciones trigonométricas' },
    { url: '/relaciones-entre-funciones-trigonometricas', text: 'Relaciones entre funciones trigonométricas' },
    { url: '/identidades-y-ecuaciones-trigonometricas', text: 'Identidades y ecuaciones trigonométricas' },
    { url: '/resolucion-de-triangulos', text: 'Resolución de triángulos' },
];

const GyTPage = () => {
    return (
        <IntroLayout links={geometriaBasicaLinks} pageTitle="Geometria Plana y Trigonometria"></IntroLayout>

    )
}
export default GyTPage;
