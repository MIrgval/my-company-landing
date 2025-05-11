import { Element } from 'react-scroll';
import Header from './component/Header';
import Hero from './component/Hero';
import Works from './component/Works';
import Team from './component/Team';
import Contact from './component/Contact';
import Footer from './component/Footer';

const App = () => (
  <div className="flex min-h-screen flex-col">
    <Header />
    <Hero />
    <Works />
    <Team />
    <Contact />
    <Footer />   {/* будет прижат к низу благодаря mt-auto в компоненте */}
  </div>
);

export default App;