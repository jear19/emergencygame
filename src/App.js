import React, { useState } from "react";
import Emergency from "./Emergency";

function App() {
  const [emergencyType, setEmergencyType] = useState(null);

  const handleEmergencySelection = (type) => {
    setEmergencyType(type);
  };

  return (
    <div>
      <h1>¡Juego de Atención a Emergencias!</h1>
      {!emergencyType && (
        <div>
          <h2>Selecciona el tipo de emergencia:</h2>
          <button onClick={() => handleEmergencySelection("incendio")}>
            Incendio
          </button>
          <button onClick={() => handleEmergencySelection("fuga")}>
            Fuga
          </button>
          <button onClick={() => handleEmergencySelection("derrame")}>
            Derrame
          </button>
        </div>
      )}
      {emergencyType && <Emergency type={emergencyType} />}
    </div>
  );
}

export default App;