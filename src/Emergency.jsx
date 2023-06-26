import React from "react";

const Emergency = ({ type }) => {
    const renderEmergencyImage = () => {
        if (type === "incendio") {
            return <img src="url_imagen_incendio" alt="Incendio" />;
        } else if (type === "fuga") {
            return <img src="url_imagen_fuga" alt="Fuga" />;
        } else if (type === "derrame") {
            return <img src="url_imagen_derrame" alt="Derrame" />;
        } else {
            return null;
        }
    };

    return (
        <div>
            <h2>Emergencia: {type}</h2>
            <h3>Selecciona los equipos a utilizar:</h3>
            <div className="circle" style={{ border: "2px solid red" }}>
                {renderEmergencyImage()}
                <img src="url_imagen_bomberos" alt="Bomberos" />
                <img src="url_imagen_rescatistas" alt="Rescatistas" />
                {type === "incendio" && (
                    <img src="url_imagen_edificio_incendiado" alt="Edificio Incendiado" />
                )}
                {type !== "derrame" && (
                    <img src="url_imagen_ambulancias" alt="Ambulancias" />
                )}
            </div>
            <h3>Otros equipos:</h3>
            {/* Agrega aquí los otros equipos */}
        </div>
    );
};

export default Emergency;