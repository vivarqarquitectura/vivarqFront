
function ImgPortadaProyecto({ imgPortada }) {

    return (
        <div className="imgPortadaProyecto">
            <img
                src={imgPortada} // Ruta de la imagen
                alt="Portada" // Descripción de la imagen
            />
        </div>
    );
}

export default ImgPortadaProyecto;
