import { useState } from "react"
import styles from "./Contactanos.module.css"
import img from './../../../img/image.png'

export default function Contactanos() {
    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [mensaje, setMensaje] = useState('')
    const [asunto, setAsunto] = useState('')
    const [telefono, setTelefono] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log('enviando')
        // const response = await sendMail({nombre, email, mensaje})
        // console.log(response)
    }

    return (
        <div className={styles.contenedor}>
            <div className={styles.ContForm}>
                <h1 className={styles.titulo}>Contactanos</h1>
                <form onSubmit={handleSubmit} className={styles.campoForm}>
                    <div className={styles.section}>
                        <div>
                            <input 
                                className={styles.inputs}
                                type="text"
                                value={nombre}
                                placeholder="Nombre Completo"
                                onChange={(e) => setNombre(e.target.value)} 
                            />
                            <input 
                                className={styles.inputs}
                                type="text"
                                value={asunto}
                                placeholder="Asunto"
                                onChange={(e) => setAsunto(e.target.value)} 
                            />
                        </div>
                        <div >
                            <input 
                                className={styles.inputs}
                                type="email"
                                value={email}
                                placeholder="Correo electrónico"
                                onChange={(e) => setEmail(e.target.value)} 
                            />
                            <input 
                                className={styles.inputs}
                                type="text"
                                value={telefono}
                                placeholder="Teléfono Celular"
                                onChange={(e) => setTelefono(e.target.value)} 
                            />
                        </div>
                    </div>
                    <div>
                        <input 
                            className={styles.txt}
                            type="text"
                            value={mensaje}
                            placeholder="Escriba aquí su mensaje..."
                            onChange={(e) => setMensaje(e.target.value)} 
                        />
                    </div>
                    <input className={styles.enviar} type="submit"/>
                </form>
            </div>
            <div className={styles.contEncontranos}>
                <h2>Encontranos</h2>
                <img src={img} alt="" />
            </div>
        </div>
        
    )
}