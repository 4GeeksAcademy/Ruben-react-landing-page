import React from "react";

import Navbar from "./Navbar";
import Body from "./body/Body";
import Footer from "./Footer";

// ✅ PATRÓN POSITIVO: Componente principal bien organizado
// 💡 SUGERENCIA: Considera usar <> </> (Fragment) en lugar de <div> si no necesitas estilos

const Home = () => {
	return (
		<div>
			{/* ✅ COMPOSICIÓN CORRECTA: Navbar en la parte superior */}
			<Navbar />
			{/* ✅ Contenido principal en el medio */}
			<Body />
			{/* ✅ Footer al final */}
			<Footer />
		</div>
	);
};

export default Home;