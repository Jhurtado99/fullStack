import { Schema, model } from 'mongoose'

const ProfesorSchema = Schema({
    nombre: {
        type: String,
        required: true
    },
    edad: {
        type: Number,
        required: true
    },
    estado: {
        type: Boolean,
        required: true
    },
    fecha: {
        type: String,
        required: true
    }
})

export default model('Profesor', ProfesorSchema, 'profesores')