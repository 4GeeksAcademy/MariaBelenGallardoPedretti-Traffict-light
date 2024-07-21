import React, { useState } from "react";

const Semaforo = () => {

    const [encender, setEncender] = useState("Rojo");
    const cambioColor = (color) =>{
        setEncender(color);
    }
    return (
        <div className="Contenedor">
            <div className="base-semaforo"></div>
            <div className="base-luces">
                <div 
                className={`Rojo ${encender == "Rojo" ? "luz-encendida" : "" }`}
                onClick={()=>cambioColor("Rojo")}
                ></div>
                <div 
                className={`Amarillo ${encender == "Amarillo" ? "luz-encendida" : "" }`}
                onClick={()=>cambioColor("Amarillo")}
                ></div>
                <div 
                className={`Verde ${encender == "Verde" ? "luz-encendida" : "" }`}
                onClick={()=>cambioColor("Verde")}
                ></div>
            </div>
        </div>  
    )
}

export default Semaforo;