export const TarjetasGuia = ({
    titulo,
    descripcion,
    rutaImg1,
    rutaImg2,
    rutaImg3,
}) => {
    return (
        <div className="tarjetaGuiaDinamica">
            <h1>{titulo}</h1>
            <p>{descripcion}</p>
            <div className="imagenesX3">
                <img
                    src={rutaImg1}
                    alt=""
                />
                <img
                    src={rutaImg2}
                    alt=""
                />
                <img
                    src={rutaImg3}
                    alt=""
                />
            </div>
        </div>
    );
};