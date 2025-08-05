###### Instalar la extensión "Markdown Preview Github Styling" para visualizar mejor esta información.

# seccion1:
    --fondo, imgPortada, navBar
    --La imagen hice que se quede fija en la parte superior

# seccion2: Contiene las tarjetas con las guías de cuantos pasos se requiere (segunda parte)
    
    --TarjetasGuia.jsx contiene las 2 tarjetas que se comportan exactamente igual por el diseño de su contenido.-
    --TarjetasGuia2.jsx se crea a parte como componente xq sus estilos css y cantidad de imagenes difieren del
        componente anterior, si bien se puede utilizar props para estilarlo, complejiza enormemente a la hora de
        tratar para diseñar en dispositivos moviles. Por esta razon se trata como un comp. diferente.-

# seccionProyectos: como se logró consumir las imágenes de las tarjetas y pasarlas a "ImgFondoProyecto"

¡Claro que sí! Lo que necesitas es compartir el estado de la imagen seleccionada entre las páginas, de manera que la elección realizada en `Principal` se refleje en `Proyectos`.

Para lograr esto, puedes utilizar **React Context**, **React Router** (pasando datos mediante el estado de navegación), o una librería de manejo de estado global como **Redux**. Aquí te mostraré cómo hacerlo usando **React Router** con el estado de navegación, ya que parece ser el más sencillo en tu caso.

---

### Solución:

#### 1. **Configura el Router en tu proyecto**  
Asegúrate de tener `react-router-dom` configurado y de que las páginas `Principal` y `Proyectos` estén incluidas en las rutas.

#### 2. **Modifica `TarjetaProyecto` para incluir el estado de navegación**  
Actualiza el botón dentro de `TarjetaProyecto` para pasar el valor de `bgCasa` (la imagen seleccionada) al componente de destino (`Proyectos`).

```javascript
import { useNavigate } from "react-router-dom";

export const TarjetaProyecto = ({ bgCasa, titulo, icono1, icono2, icono3, icono4, medidas }) => {
    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate('/proyecto', { state: { img: bgCasa } }); // Pasa la imagen como estado
    };

    return (
        <div className="tp-tarjetaProyecto">
            <div className="tp-imgYtxt">
                <img src={bgCasa} alt="" />
                <h3>{titulo}</h3>
            </div>
            <div className="tp-iconos">
                <div>{icono1.icono} <span>{icono1.cantidad}</span></div>
                <div>{icono2.icono} <span>{icono2.cantidad}</span></div>
                <div>{icono3.icono} <span>{icono3.cantidad}</span></div>
                <div>{icono4.icono} <span>{icono4.cantidad}</span></div>
            </div>
            <div className="tp-medidas">
                <h2>{medidas}</h2>
            </div>
            <div className="tp-btnVerProyecto">
                <button onClick={handleRedirect}>Ver proyecto</button>
            </div>
        </div>
    );
};
```

---

#### 3. **Recupera la imagen en la página `Proyectos`**  
En la página `Proyectos`, utiliza el hook `useLocation` para acceder al estado pasado desde `Principal`.

```javascript
import { useLocation } from "react-router-dom";
import ImgFondoProyecto from "../../components/seccionProyectos/seccion1/fondo/ImgFondoProyecto";

export default function Proyectos() {
    const location = useLocation();
    const img = location.state?.img; // Obtén la imagen pasada desde el estado

    return (
        <div>
            <ImgFondoProyecto img={img} />
            {/* Aquí puedes añadir más contenido de la página */}
        </div>
    );
}
```

---

#### 4. **Estructura del componente `ImgFondoProyecto`**  
Asegúrate de que el componente `ImgFondoProyecto` maneje la prop `img` correctamente.

```javascript
export default function ImgFondoProyecto({ img }) {
    return (
        <div
            className="fondo-imagen-proyecto"
            style={{
                backgroundImage: `url(${img})`, // Usa la imagen pasada como fondo
            }}
        ></div>
    );
}
```

---

### Flujo del Usuario:
1. El usuario selecciona un proyecto en `Principal` y hace clic en el botón del componente `TarjetaProyecto`.
2. El botón redirige al usuario a la página `Proyectos`, pasando la imagen seleccionada (`bgCasa`) como parte del estado de navegación.
3. La página `Proyectos` recibe la imagen y la pasa al componente `ImgFondoProyecto` para mostrarla como fondo.
