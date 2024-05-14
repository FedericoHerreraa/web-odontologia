import axios from 'axios';

// Consulta al backend para enviar el mail con los datos del formulario
export const sendMail = async (data) => {
    try {
        //corregir la url
        const response = await axios.post('http://localhost:4000/mail/send-email', data)
        return response.data
    } catch (error) {
        console.log(error)
    }
}