import AboutMeNew from "./components/AboutMeNew";
import LandingPageNew from "./components/LandingPageNew";
import Navbarnew from "./components/Navbarnew";
import Resume from "./components/Resume";
import Certificate from "./components/Certificate";
import ProjectDetails from "./components/ProjectDetails";
import ContactPage from "./components/ContactPage";
import Footer from "./components/Footer";



function App() {
  return (
    <div className="App px-1 py-2 bg-white dark:bg-black">
      <Navbarnew />
      <LandingPageNew />
      <AboutMeNew />
      <Resume />
      <Certificate />
      <ProjectDetails />
      <ContactPage />
      <Footer />
     
      
    </div>
  );
}

export default App;
