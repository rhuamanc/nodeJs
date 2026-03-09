import mongose from 'mongoose';

export const connectDB=async()=>{
    try {

        //const url = process.env.MONGO_URL || process.env.MONGO_URI;
        const {connection} = await mongose.connect(process.env.MONGO_URI);
        const url2 = `${connection.host}:${connection.port}`;
        console.log('DB connected en:', url2);
        //console.log(connection);
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}