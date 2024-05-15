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
                        type="text"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)} 
                    />
                    <input 
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                    <input 
                        type="password"
                        value={mensaje}
                        onChange={(e) => setMensaje(e.target.value)} 
                    />
                    <input type="submit"/>
                </form>
            </div>
        </div>
    )
}