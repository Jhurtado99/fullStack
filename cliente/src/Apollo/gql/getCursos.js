import { gql } from '@apollo/client'

const GET_CURSOS = gql`
query{
    Cursos {
        id
        nombre
        lenguajes {
            lenguaje
        }
        fecha
    }
}
`

export default GET_CURSOS