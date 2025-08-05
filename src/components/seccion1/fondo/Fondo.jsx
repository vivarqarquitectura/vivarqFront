import '../../../styles/components/Fondo/fondo.css'

export default function ImagenDeFondo({ img }) {
    return (
        <div
            className="fondo-imagen"
            style={{
                backgroundImage: `url(${img})`
            }}
        ></div>
    );
}
