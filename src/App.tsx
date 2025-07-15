
import Hero from './component/Hero';
import Works from './component/Works';
import Team from './component/Team';
import Contact from './component/Contact';
import Partners from "./component/Partners";
import Footer from './component/Footer';

const App = () => (
  <div className="flex min-h-screen flex-col">
  
    <Hero />
    <Works />
    <Team />
    <Partners />
    <Contact />
    <Footer />   
  </div>
);

export default App;