import { gql } from '@apollo/client'

const GET_CURSO_BY_ID = gql`
query findById($id:ID!){
  CursoById(id: $id){
    id
    nombre
    lenguajes{
        lenguaje
    }
    fecha
  }
}
`

export default GET_CURSO_BY_ID