import { Tweet } from './components/Tweet';
import { Button } from './components/Button';

function App() {

  return (
    <section>
      <h1>Knowing React</h1>
      <h3 style={{ textIndent: "25px" }}>React App Was Created</h3>
      
      <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", margin: "50px" }}>
        <Tweet />
        <Button text="button 1" color="red" />
        <Button text="button 2" color="blue" />
        <Button text="button 3" color="green" />
      </div>
    </section>
  );
}

export default App

// Arquitetura de pastas
// componentes
// pages
// style
// services
// routes
// assets
