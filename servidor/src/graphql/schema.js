import { makeExecutableSchema } from "@graphql-tools/schema"
import { resolvers } from "./resolvers"

const typeDefs = `
    type Query {
        Hola(nombre: String!): String
        Cursos: [Curso]
        CursoById(id: ID!): Curso
        Login(email: String!, password: String!): String
    }

    type Mutation {
        AgregarCurso(curso: CursoInput): Curso
        AgregarUsuario(usuario: UsuarioInput): Usuario
    }

    type Curso {
        id: ID,
        nombre: String,
        lenguajes: [Lenguaje],
        fecha: String
    }

    type Usuario {
        id: ID,
        nombre: String,
        email: String,
        password: String
    }

    type Lenguaje {
        id: ID,
        lenguaje: String
    }

    input CursoInput {
        nombre: String,
        lenguajes: [LenguajeInput],
        fecha: String
    }

    input UsuarioInput {
        nombre: String,
        email: String,
        password: String
    }

    input LenguajeInput {
        lenguaje: String
    }
`


export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
})