function TextoPortada({ onVerProyecto }) {

    return (
        <div className="textoPortada">
            <h3 className="tituloH3">Encuentra</h3>
            <h1 className="tituloH1">La casa de <br />tus sueños</h1>
            <h3 className="subTituloH3">y descubre cómo hacerla realidad tu mismo</h3>
            <button className="btnVerProyecto" onClick={onVerProyecto}>Ver Proyecto</button>
        </div>
    );
}

export default TextoPortada;
