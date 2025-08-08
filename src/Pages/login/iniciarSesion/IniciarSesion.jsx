import imgInicioSesion from '../../../assets/carrusel/bg-casa2.png'

/*Estilos*/
import '../../../styles/pages/login/iniciarSesion/iniciarSesion.css'

/** Recursos */
import iconoGoogle from '../../../assets/iconos/ICO_google.png'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'

export default function IniciarSesion () {

    const navigate=useNavigate();
    const [login, setLogin] = useState({});

    const onChangueLogin=(e)=>{
        e.preventDefault();
        const {name,value}=e.target;
        setLogin({...login,[name]:value})
    }

    const onSubmitLogin=async (e)=>{
        e.preventDefault();
        let config={
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(login)
        }
        const respuesta=await fetch(`${import.meta.env.VITE_URL_BACK}/login`,config);
        const res=await respuesta.json();
        if(res.token??false){
            localStorage.setItem("token",res.token);
            localStorage.setItem("id_usuario",res.user.id_usuario);
            localStorage.setItem("nombre",res.user.nombre);
            localStorage.setItem("apellido",res.user.apellido);
            navigate("/",{ replace: true });
        }else{
            console.log("Usuario o contraseña incorrectos");
        }
    }

    return(
        <>
            <div className='formularioInicioSesion'>
                <div className="imgIniciarSesion">
                    <img src={imgInicioSesion} alt="Imagen Inicio de Sesión" />
                </div>
                <div className="formularioDeInicio">
                    <form action="" onSubmit={onSubmitLogin}>
                        <h1>Iniciar sesión</h1>
                        <input className='inputGlobal' type="text" name="usuario" id="" placeholder='Usuario' onChange={onChangueLogin}/>
                        <input className='inputGlobal' type="password" name="clave" id="" placeholder='Clave' onChange={onChangueLogin}/>
                        <div className='recordarYrecuperar'>
                            <div className="grupoInputLabel">                                
                                <label>
                                    <input type="checkbox" id="" name="" />
                                    Recordar
                                </label>
                            </div>
                            <p>Perdí mi acceso</p>
                        </div>
                        <button className='btn-inicio' >Iniciar</button>
                        <button className='iniciarConGoogle'>
                            <img src={iconoGoogle} alt="Google Icon" />
                            Iniciar con Google
                        </button>
                        <a href="/registrarse">No tengo una cuenta | Registrarme</a>
                    </form>
                </div>
            </div>
        </>
    )
}