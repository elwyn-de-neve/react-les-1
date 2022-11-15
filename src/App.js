import "./App.css";
import React from "react";
import Testimonial from "./components/Testimonial/Testimonial";
import ProductCard from "./components/ProductCard/ProductCard";

function App() {
    // 1. Maak een components-map aan in de src folder
    // 2. Maak een JSX bestand aan (met hoofdletter!) volgens de naam van jouw component
    // 3. Schrijf een functie (met hoofdletter!) die HTML-elementen binnen een fragment returnen
    // 4. Schrijf direct de "export regel" voor de functie, zodat je daarna de auto-complete kunt gebruiken
    // 5. Importeren van het component in App.js en geef deze weer als component
    // 6. Plak de originele HTML in het custom component
    // 7. Werkt? Top! Dan kunnen we het component nu dynamisch maken
    // 8. Bekijk welke properties dynamisch moeten zijn en geef deze ook een property-naam mee
    // 9. Zorg dat je de property-namen kunt ontvangen in de functie. Let op: ieder component ontvangt deze properties automatisch!

    return (
        <>
            <h2>Student Reviews</h2>
            <Testimonial
                studentName="Priyanka"
                studentTestimonial="Ik vind dit meer georganiseerd"
            />
            <Testimonial
                studentName="Elwyn"
                studentTestimonial="React heel fijn om grote applicaties te maken"
            />
            <Testimonial
                studentName="Gideon"
                studentTestimonial="BEST WEBSITE EVAH"
            />
            <h2>Producten</h2>
            <ProductCard
                title="Nike Air Max"
                price={ 120 }
            />
        </>
    );
}


export default App;
