export const Card = (prop) => {

    const { nombre,edad,aldea,rango,afiliación,jutsu_destacado,estado,imagen } = prop

    return (
        <div className="cardPersonaje">
            {/* Para llamar a una imagen se tiene que poner como el siguiente ejemplo */}
            <img src={`/img/${imagen}`} alt="" />
            <div>
                <h2>Nombre: {nombre}</h2>
                <p>Edad: {edad}</p>
                <p>Aldea: {aldea}</p>
                <p>Rango: {rango}</p>
                <p>Equipo: {afiliación}</p>
                <p>Justsu Destacado: {jutsu_destacado}</p>
                <p>Estado: {estado}</p>
            </div>
        </div>
    )
}