import './App.css'
import Header from "./components/Header/Header.jsx";
import Services from "./components/Services/Services.jsx";
import Skills from "./components/Skills/Skills.jsx";
import UserReviews from "./components/UserReviews/UserReviews.jsx";
import CTA from "./components/CTA/CTA.jsx";

function App() {

    return (
        <>
            <Header/>
            <Services/>
            <Skills />
            <UserReviews />
            <CTA />
        </>
    )
}

export default App
