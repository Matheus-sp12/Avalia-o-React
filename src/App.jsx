
import React, { useState } from "react";


function App() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [imc, setImc] = useState(null);
  const [classificacao, setClassificacao] = useState("");

  const calcularImc = () => {
    if (peso && altura) {
      const imcCalculado = peso / (altura * altura);
      setImc(imcCalculado.toFixed(2));

      if (imcCalculado < 18.5) {
        setClassificacao("Abaixo do peso");
      } else if (imcCalculado < 24.9) {
        setClassificacao("Peso normal");
      } else if (imcCalculado < 29.9) {
        setClassificacao("Sobrepeso");
      } else if (imcCalculado < 39.9) {
        setClassificacao("Obesidade");
      } else {
        setClassificacao("Obesidade grave");
      }
    }
  };

  return (
    <div className="App">
      <h1>Calculadora de IMC</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <label>Peso (kg):</label>
          <input
            type="number"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Altura (m):</label>
          <input
            type="number"
            step="0.01"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
            required
          />
        </div>
        <button type="button" onClick={calcularImc}>
          Calcular IMC
        </button>
      </form>

      {imc && (
        <div>
          <h2>Resultado do IMC: {imc}</h2>
          <p>Classificação: {classificacao}</p>
        </div>
      )}
    </div>
  );
}

export default App;