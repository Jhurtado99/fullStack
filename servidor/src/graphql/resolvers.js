import { cursos } from "../data/cursos"
import Curso from "../models/Curso"
import Usuario from "../models/Usuario"
import bcrypt from "bcrypt"
import { generarJwt } from "../helpers/jwt"

export const resolvers = {
    Query: {
        Hola: (parent, args) => {
            return `Hola ${args.nombre}`
        },
        Cursos(_, args, context){
            console.log(context)
            return Curso.find()

            if (context.user.auth){
            }else{
                return null
            }
        },
        async CursoById(_,{id}){
            return await Curso.findById(id)
        },
        async Login(_, {email, password}){
            const usuario = await Usuario.findOne({email})
            if (!usuario){
                return "Usuario no registrado"
            }
            const validarPassword = bcrypt.compareSync(password, usuario.password)
            if (validarPassword){
                const token = await generarJwt(usuario.id, usuario.nombre)
                return token
            }else {
                return "Contraseña incorrecta"
            }
        }
    },

    Mutation: {
        async AgregarCurso(_, {curso}){
            const nCurso = new Curso(curso)
            return await nCurso.save()
        },
        async AgregarUsuario(_,{usuario}){

            const salt = bcrypt.genSaltSync()

            let nUsuario = new Usuario(usuario)
            nUsuario.password = bcrypt.hashSync(usuario.password, salt)
            return await nUsuario.save()
        }
    }

}