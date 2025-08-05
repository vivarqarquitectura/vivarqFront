import React, { useState} from 'react'
import axios from 'axios'

export default function FormNuevoProyecto() {

    //estado para cargar uno solo archivo
    const [file, setFile] = useState();
    const [proyecto, setProyecto] = useState({});
    const [imagen, setImagen] = useState(null);

    //obtengo todos los datos del formulario
    const hendlerChangueDatosProyecto=(e)=>{
        setProyecto({
            ...proyecto,
            [e.target.name]: e.target.value
        })
    }

    //metodo para obtener la imagen y mostrarla en el input
    const handleImageChange = (event) => {
      const file = event.target.files[0];
      if (file) {
        const previewURL = URL.createObjectURL(file);
        setImagen(previewURL);
      }
    };

    //metodo para subir el archivo y el forulario del proyecto
    const upload = async (e) => {
          const formData = new FormData();
          //verifico que la imagen no este vacia
          if(typeof file !== 'undefined'){
            formData.append('file', file);
          }else{
            alert("No se ha seleccionado ningun archivo")
          }

          //consulto si queire subir la imagen o no
          let valor=confirm("¿Estas seguro de cargar la imagen?");
          if(valor===true){
            try {
              const res = await axios.post(`${import.meta.env.VITE_URL_SUBIR_IMAGENES}/subirImagen`,formData)
              // Aquí puedes manejar la respuesta si lo necesitas
              setProyecto({
                ...proyecto,
                img_proyecto: res.data.imagen
              })
              alert("Imagen subida correctamente")
            
            } catch (er) {
              console.log(er);
            }
          }else{
            alert("No se ha subido la imagen");
          }
    };

    //metodo para cargar el proyecto entero con la imagen
    const cargarProyectos=async()=>{
        // Enviar el formulario del proyecto
        console.log(proyecto);
        
            let config={
              method:"POST",
              headers:{
                  "content-type":"application/json"
              },
              body:JSON.stringify(proyecto)
          }
        
          const respuesta=await fetch(`${import.meta.env.VITE_URL_BACK}/nuevoProyecto`,config);
          const resp=await respuesta.json();
          alert("Proyecto cargado correctamente") 
    }

    
  return (
    <div>
        <div>
            <h1>Agregar un nuevo Proyecto</h1>
            <label htmlFor="archivo">Agregar imagen</label>
            <input type="file" id='archivo' onChange={(e) => setFile(e.target.files[0])} onBlur={handleImageChange}/> <br />
            <input type="button" value="Cargar Imagen" onClick={upload}/><br />
            {imagen && (
              <div style={{ marginTop: '10px' }}>
                <p>Vista previa:</p>
                <img src={imagen} alt="Vista previa" style={{ maxWidth: '300px' }} />
              </div>
            )}
            {
              proyecto.img_proyecto && (
                <>
                    <input type="text" id="nombre" name="nombre" placeholder='Nombre del Proyecto' onChange={hendlerChangueDatosProyecto}/><br />
                    
                    <input type="text" id="estilo" name="estilo" placeholder='Estilo' onChange={hendlerChangueDatosProyecto}/><br />

                    <input type="text" id="frente" name="frente" placeholder='Frente en metros' onChange={hendlerChangueDatosProyecto}/><br />

                    <input type="text" id="fondo" name="fondo" placeholder='fondo en metros' onChange={hendlerChangueDatosProyecto}/><br />

                    <input type="text" id="cocina" name="cocina" placeholder='Cant de cocinas' onChange={hendlerChangueDatosProyecto}/><br />

                    <input type="text" id="habitacion" name="habitacion" placeholder='cant de habitaciones' onChange={hendlerChangueDatosProyecto}/><br />

                    <input type="text" id="baño" name="baño" placeholder='cant de baños' onChange={hendlerChangueDatosProyecto}/><br/>

                    <input type="text" id="sala_estar" name="sala_estar" placeholder='cant de sala de estar' onChange={hendlerChangueDatosProyecto}/><br />

                    <input type="text" id="comedor" name="comedor" placeholder='cant de comedor' onChange={hendlerChangueDatosProyecto}/><br />

                    <input type="text" id="garaje" name="garaje" placeholder='garaje' onChange={hendlerChangueDatosProyecto}/><br />

                    <input type="text" id="lavadero" name="lavadero" placeholder='Lavadero' onChange={hendlerChangueDatosProyecto}/><br />

                    <input type="text" id="vestidor" name="vestidor" placeholder='Vestidor' onChange={hendlerChangueDatosProyecto}/><br />

                    <input type="text" id="esencial" name="esencial" placeholder='Precio del proyecto Esencial' onChange={hendlerChangueDatosProyecto}/><br />

                    <input type="text" id="avanzado" name="avanzado" placeholder='Precio del proyecto avanzado' onChange={hendlerChangueDatosProyecto}/><br />

                    <input type="text" id="premium" name="premium" placeholder='Precio del proyecto Premium' onChange={hendlerChangueDatosProyecto}/><br />

                    <button type="button" onClick={cargarProyectos}>Agregar proyecto</button>
                </>
              )
            }
            
      </div>
    </div>
  )
}
