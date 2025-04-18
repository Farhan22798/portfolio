import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css"

const App = () => {
  return <>
    <ToastContainer
     position="top-center"
     autoClose={3000}
     hideProgressBar={false}
     newestOnTop
     closeOnClick
     pauseOnHover
     draggable
     theme="dark" />
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        {/* <Feedbacks /> */}
        <div className='relative z-0'>
          <Contact />

          <StarsCanvas />
          <Footer/>
        </div>
      </div>
    </BrowserRouter>
  </>
  
}

export default App;
