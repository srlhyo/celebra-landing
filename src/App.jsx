import Header from './components/Header';
import Hero from './sections/Hero';
import Problema from './sections/Problema';
import Solucao from './sections/Solucao';
import ComoFunciona from './sections/ComoFunciona';
import Funcionalidades from './sections/Funcionalidades';
import ProvaSocial from './sections/ProvaSocial';
import Precos from './sections/Precos';
import CTAFinal from './sections/CTAFinal';
import Rodape from './components/Rodape';
import SectionDivider from './components/SectionDivider';

function App() {
  return (
    <div className="font-body">
      <Header />
      <main>
        <Hero />
        <SectionDivider />
        <Problema />
        <Solucao />
        <SectionDivider />
        <ComoFunciona />
        <Funcionalidades />
        <ProvaSocial />
        <Precos />
        <CTAFinal />
      </main>
      <Rodape />
    </div>
  );
}

export default App;
