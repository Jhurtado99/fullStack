import { useLazyQuery } from '@apollo/client'
import React, { useEffect, useState } from 'react'
import GET_CURSO_BY_ID from '../Apollo/gql/getCursoById'

const Curso = ({curso}) => {

    const [getCursoById, result] = useLazyQuery(GET_CURSO_BY_ID)
    const [nCurso, setCurso] = useState(null)

    const showCursos = () => {
        getCursoById({ variables: { id : curso.id}})
    }

    useEffect(() => {
        if (result.data){
            setCurso(result.data.CursoById)
            console.log(nCurso) 
        }
    }, [nCurso, result]) 

    return (
        <div>
            <p>{ curso.nombre }</p>
            <button onClick = { showCursos }>Consultar</button>
        </div>
    )
}

export default Curso
