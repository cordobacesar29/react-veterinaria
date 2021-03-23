const API_URL = 'https://veterinariapp-backend.vercel.app'

export const listarEntidades = async ({ entidad = 'mascotas'}) => {
    
    try {
        const respuesta = await fetch(`${API_URL}/${entidad}`);
        const datos =  await respuesta.json();
        return datos;
    } catch (error) {
        console.log(error);
    }
}
    