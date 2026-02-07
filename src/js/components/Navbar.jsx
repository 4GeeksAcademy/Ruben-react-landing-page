import React from "react";

// ❌ ERROR CORREGIDO: Cambié "class" por "className" en línea 5
// ❌ CÓDIGO DUPLICADO ELIMINADO: Removí el <ul className="dropdown-menu"> que estaba duplicado
// 💡 SUGERENCIA: Considera recibir los links como props para hacer este componente reutilizable

function Navbar() {
    return (
        // ✅ CORREGIDO: "class" cambiado a "className"
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark" aria-label="Third navbar example">
            <div className="container-fluid">
                {/* ⚠️ NOTA: <h1> con href no es semántico. Debería ser <a> con clase navbar-brand */}
                <h1 className="navbar-brand" href="#">Start Bootstrap</h1>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarsExample03">
                    <div>
                        {/* ✅ PATRÓN POSITIVO: Lista de navegación bien estructurada */}
                        <ul className="navbar-nav me-auto mb-2 mb-sm-0">
                            <li className="nav-item"> <a className="nav-link active" aria-current="page" href="#">Home</a></li>
                            <li className="nav-item"> <a className="nav-link" href="#">About</a> </li>
                            <li className="nav-item"> <a className="nav-link" href="#">Services</a> </li>
                            <li className="nav-item"> <a className="nav-link" href="#">Contact</a> </li>
                            {/* ✅ MEJORA APLICADA: Eliminé el <ul className="dropdown-menu"> duplicado que no se usaba */}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;