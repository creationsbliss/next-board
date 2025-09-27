import mongoose from 'mongoose';

export async function connectToDatabase() {
    let connection = {}
    try {
        if(connection.isConnected)  return;
        const db = await mongoose.connect(process.env.MONGO);
        connection.isConnected =  db.connections[0].readyState;
    } catch (error) {
        throw new Error(error);
    }
}