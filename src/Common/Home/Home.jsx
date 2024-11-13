import react from 'react';
import Section1 from "../Section1/Section1.jsx";
import Section2 from "../Section2/Section2.jsx";
import Section3 from "../Section3/Section3.jsx";
import Section4 from "../Section4/Section4.jsx";
import Footer from "../Footer/Footer.jsx";
import "./Home.css";

export default function Home(){
    return (
        <div>
            <Section1/>
            <Section2/>
            <Section3/>
            <Section4/>
            <Footer/>
        </div>
        
    )
}