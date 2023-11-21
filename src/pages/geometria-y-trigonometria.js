import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React from "react"
const GyTPage = () => {
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
export default GyTPage;
