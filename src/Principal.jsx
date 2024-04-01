import { Card } from "./components/Card"
import { Navbar } from "./components/NavBar"
import './index.css'
import { personajes } from "./utils/personajes"

export const Principal = () => {
    return (
        <main>
            <Navbar/>
            <h1>Mi primer aplicativo CERTUS</h1>
            {/* {JSON.stringify(personajes)}  esto ayuda a ver si el json se esta exportando  */}
            {/*A continuacion se procede a recorrer el json con el map y pintara la cantidad de veces en base al continido del json*/}
            {/*A continuacion se procede a ver un ejemplo detallado de como llamar los datos del json y tambien resumido {...personajes} */}
            {/* Notar que para un mejor orden se tiene que poner una llame o key que tiene ser unico, ver ejemplo */}
            {
                personajes.map((personajes)=>(
                    <Card 
                    // nombre={personajes.nombre}
                    // edad={personajes.edad}
                    // aldea={personajes.aldea}
                    // rango={personajes.rango}
                    // afiliación={personajes.afiliación}
                    // jutsu_destacado={personajes.jutsu_destacado}
                    // estado={personajes.estado}   
                    // imagen={personajes.imagen}
                    key={personajes.nombre}
                    {...personajes}                
                    />

                ))
            }

        </main>
    )
}