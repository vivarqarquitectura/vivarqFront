export const TarjetasGuia2 = ({
    titulo,
    descripcion,
    rutaImg2,

}) => {
    return (
        <div className="tarjetaGuiaDinamica">
            <h1>{titulo}</h1>
            <p>{descripcion}</p>
            <div className="imagenesX1">
                <img
                    src={rutaImg2}
                    alt=""
                />
            </div>
        </div>
    );
};