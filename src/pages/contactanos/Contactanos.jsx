import { useState } from "react"
import styles from "./Contactanos.module.css"

export default function Contactanos() {
    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [mensaje, setMensaje] = useState('')

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
                    <input 
                        className={styles.inputs}
                        type="text"
                        value={nombre}
                        placeholder="Nombre y Apellido"
                        onChange={(e) => setNombre(e.target.value)} 
                    />
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
                        value={mensaje}
                        placeholder="Escriba aquí su mensaje..."
                        onChange={(e) => setMensaje(e.target.value)} 
                    />
                    <input className={styles.enviar} type="submit"/>
                </form>
            </div>
        </div>
        
    )
}