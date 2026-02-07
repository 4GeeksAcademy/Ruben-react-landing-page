import React from "react";

import Card from "./Card";

// ❌ ERROR CORREGIDO: Cambié todos los "class" por "className"
// 💡 SUGERENCIA AVANZADA: Podrías usar .map() para renderizar las cards desde un array de datos

function Gallery() {
    return (
        // ✅ CORREGIDO: "class" cambiado a "className" (líneas 7, 8, 9, 12, 15, 18)
        <div className="container-fluid text-center px-0">
            <div className="row align-items-start flex-md-row flex-column">
                {/* ✅ PATRÓN POSITIVO: Grid responsivo con Bootstrap (flex-md-row flex-column) */}
                <div className="col my-2">
                    <Card text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo unde molestiae atque repellendus eum sequi ex maiores facilis voluptatibus" />
                </div>
                <div className="col my-2">
                    <Card text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo unde molestiae atque repellendus eum sequi ex maiores facilis voluptatibus Lorem ipsum dolor sit amet, consectetur adipisicing elit." />
                </div>
                <div className="col my-2">
                    <Card text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo unde molestiae atque repellendus eum sequi ex maiores facilis voluptatibus" />
                </div>
                <div className="col my-2">
                    <Card text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo unde molestiae atque repellendus eum sequi ex maiores facilis voluptatibus Lorem ipsum dolor sit amet, consectetur adipisicing elit." />
                </div>
            </div>
        </div>
    );
};

export default Gallery;