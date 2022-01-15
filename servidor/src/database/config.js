import mongoose from 'mongoose'

export const dbConnection = async () => {
    try {
        await mongoose.connect('mongodb+srv://admin:admin123@cluster0.to4er.mongodb.net/graphql2')
        console.log('base de datos conectada')
    } catch(error) {
        console.log(error)
    }
}

