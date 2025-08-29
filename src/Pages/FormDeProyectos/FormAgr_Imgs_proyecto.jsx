import React, { useEffect, useState } from 'react'
import axios from 'axios'

//Estilos
import "../../styles/pages/formDeProyectos/formAgrImgsProyecto.css";

export default function FormAgr_Imgs_proyecto() {

    //estado para cargar uno solo archivo
    const [file, setFile] = useState();
    
    //estado para guardar los proyectos de la base de datos
    const [proyectos, setProyectos] = useState([])

    //estado para guardar el proyecto con sus imagenes
    const [proyectoImagenes, setProyectoImagenes] = useState({})

    //imagen del plano con medidas
    const [imagen, setImagen] = useState(null);
    
    //estado para guardar varias imagen
    const [files, setFiles] = useState([]);

    useEffect(() => {
      getProyectos();
    }, [])

    //metodo para obtener el id del proyecto
    const hendlerProyectoImagenes=(e)=>{
        const { name, value } = e.target;
        setProyectoImagenes({
            ...proyectoImagenes,
            [name]: value
        })
    }
    
    //metodo para obtener todos los proyectos
    const getProyectos = async () => {
        const respuesta = await fetch(`${import.meta.env.VITE_URL_BACK}/proyectos`);
        const res = await respuesta.json();
        setProyectos(res);
    }

    //metodo para obtener la imagen y mostrarla en el input
    const handleImageChange = (event) => {
      const file = event.target.files[0];
      if (file) {
        const previewURL = URL.createObjectURL(file);
        setImagen(previewURL);
      }
    };

    //metodo para obtener varias imagenes
    const handleFilesChange = (event) => {
    setFiles([...event.target.files]);
    };
    
    //metodo para subir la imagen de plano con medida
    const upload_img_medidas = async (e) => {
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
              setProyectoImagenes({
                ...proyectoImagenes,
                img_plano_con_medida: res.data.imagen
              })
              alert("Imagen subida correctamente");

            
            } catch (er) {
              console.log(er);
            }
          }else{
            alert("No se ha subido la imagen");
          }
    };

    //metodo para subir varias imagenes
    const subirImagenes = async (e) => {
        e.preventDefault();
        const formData = new FormData();

        files.forEach((file) => {
          formData.append('files', file); // nombre del campo: 'files'
        });

        try {
          const response = await fetch(`${import.meta.env.VITE_URL_SUBIR_IMAGENES}/subirVariasImagenes`, { 
            method: 'POST',
            body: formData,
          });

          const data = await response.json();
          setProyectoImagenes({
            ...proyectoImagenes,
            render_uno: data.files[0],
            render_dos: data.files[1],
            render_tres: data.files[2],
            render_cuatro: data.files[3],
          })
          console.log('Archivos subidos:', data);
        } catch (error) {
          console.error('Error al subir archivos:', error);
        }
    }

    const agregarImagenesPoryecto=async(e)=>{
        try {
            const res = await fetch(`${import.meta.env.VITE_URL_BACK}/nuevoProyecto_render`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(proyectoImagenes)
            })
            const data = await res.json();
            console.log('Archivos subidos:', data);
            alert("Imagenes subidas correctamente");
        }catch (error) {
        }
    }


  return (
    <div className="form-agr-imgs-container">
        <h1>Agregar Imagenes a un proyecto</h1>
        <form action="" className="form-agr-imgs-form">
            <label htmlFor="proyecto">Seleccionar Proyecto</label><hr />
            <select name="id_proyecto" onChange={hendlerProyectoImagenes}>
                <option selected>Seleccionar</option>
                {proyectos.map((proyecto) => (
                    
                    <option key={proyecto.id_proyecto} value={proyecto.id_proyecto} >
                        {proyecto.nombre}
                    </option>
                ))}
            </select><br /><br />

            <h3>Agregar Imagenes Render</h3><br />
            <label htmlFor="archivo">Agregar imagen de plano con medidas</label><br />
            <input type="file" id='archivo' onChange={(e) => setFile(e.target.files[0])} onBlur={handleImageChange}/> <br />
           
            {imagen && (
              <div style={{ marginTop: '10px' }}>
                <p>Vista previa:</p>
                <img src={imagen} alt="Vista previa" style={{ maxWidth: '300px' }} />
              </div>
            )}
             <input type="button" value="Cargar Imagen" onClick={upload_img_medidas}/><br />

             <h3>Agregar 4 imagenes Render</h3>
            <input type="file" multiple onChange={handleFilesChange}/><br />
            <button onClick={subirImagenes}>Subir archivos</button><br />
            <input type="button" value="Cargar todo el proyecto" onClick={agregarImagenesPoryecto}/><br />
        </form>
    </div>
  )
}
