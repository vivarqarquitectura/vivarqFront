
export default function ImgFondoProyecto({ img }) {
    return (
        <div
            className="fondo-imagen-proyecto"
            style={{
                backgroundImage: `url(${img})`
            }}
        ></div>
    );
}
