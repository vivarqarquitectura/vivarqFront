import { useState } from 'react'
import imgInicioSesion from '../../../assets/carrusel/bg-casa4.jpg'

/*Estilos*/
import '../../../styles/pages/login/iniciarSesion/iniciarSesion.css'

import { useForm } from "react-hook-form"


export default function Registrarse () {
    const { register, handleSubmit } = useForm()

    const onSubmit =async (data) =>{
        if(data.clave !== data.clave2) return alert('Las claves no coinciden');
        let config={
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(data)
        }
        const respuesta=await fetch(`${import.meta.env.VITE_URL_BACK}/registro`,config);
        const res=await respuesta.json();
        alert(res.message);
            
    }
        return(
        <>
            <div className='formularioInicioSesion'>
                <div className="imgIniciarSesion">
                    <img src={imgInicioSesion} alt="Imagen Inicio de Sesión" />
                </div>
                <div className="formularioDeInicio">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h1>Regístrate y elíge la casa de tus sueños</h1>
                        <input className='inputGlobal' type="text" id="" placeholder='Primer nombre' {...register("nombre")}/>
                        <input className='inputGlobal' type="text" id="" placeholder='Apellido' {...register("apellido")}/>
                        <input className='inputGlobal' type="text" id="" placeholder='Correo electrónico' {...register("correo")}/>
                        <input className='inputGlobal' type="text" id="" placeholder='Nombre de usuario' {...register("usuario")}/>
                        <input className='inputGlobal' type="password" id="" placeholder='Clave' {...register("clave")}/>
                        <input className='inputGlobal' type="password" id="" placeholder='Repetir clave' {...register("clave2")}/>
                        <button className='btn-inicio' >Registrarme</button>
                        <a href="/iniciarSesion">Ya tengo una cuenta | Iniciar sesión</a>
                    </form>
                </div>
            </div>
        </>
    )
}