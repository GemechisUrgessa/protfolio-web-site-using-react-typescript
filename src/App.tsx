import './App.css'
import Header from './components/header/header';
import Home from './components/home/home';
import About from './components/about/about';
import Services from './components/services/services';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';


function App() {
  return (
    <>
    
    <Header/> 
    <main>
    <Home />
    <About />
    <Services />
    <Contact />
    </main>
    <Footer />
     </>
  )
}

export default App
