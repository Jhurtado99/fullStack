import { useQuery } from '@apollo/client'
import React from 'react'
import GET_CURSOS from '../Apollo/gql/getCursos'
import Curso from './Curso'
// import {useEffect} from 'react'

const Cursos = () => {

    const { loading, data, error } = useQuery(GET_CURSOS)

    console.log(data)

    return (
        <div>
            {loading && <p>Cargando...</p>}
            {error && <p>Se ha presentado un error</p>}
            {data && data.Cursos.map(curso => {
                return <Curso key = {curso.id} curso = {curso}/>
            })}
        </div>
    )
    }
    
    export default Cursos


    // useEffect(() => {
    //     fetch('http://localhost:4000/graphql', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             query: `
    //                 query{
    //                     Cursos{
    //                     id
    //                     nombre
    //                     lenguajes{
    //                         id
    //                         lenguaje
    //                     }
    //                     fecha
    //                     }
    //                 }
    //             `
    //         })
    //     })
    //     .then(res => res.json())
    //     .then(res => {
    //         console.log(res.data)
    //     })
    // })

    // return (
    //     <div>
    //         {loading && <p>Cargando...</p>}
    //         {error && <p>Se ha presentado un error</p>}
    //         {data && <p>Imprimiendo datos</p>}
    //     </div>
    // )

// export default Cursos

