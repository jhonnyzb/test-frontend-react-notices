const useUtils = () => {

    const formatDate = (dateString: string): string => {
        // Crear un objeto Date a partir de la cadena
        const date = new Date(dateString);
        // Definir los nombres de los meses
        const months = [
            "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
            "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
        ];

        // Obtener el día, mes y año
        const day = date.getDate(); // Obtiene el día del mes
        const month = months[date.getMonth()]; // Obtiene el mes en texto
        const year = date.getFullYear(); // Obtiene el año

        // Formatear y retornar la fecha
        return `${day} de ${month} de ${year}`;

    }



    return {
        formatDate,
    };
}

export default useUtils;
