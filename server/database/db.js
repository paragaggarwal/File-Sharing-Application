import mongoose from "mongoose";


const DBConnection = async () => {
    const MONODB_URI = 'mongodb://1902463ececec:<P@rag1234>@ac-81rkisb-shard-00-00.myfrbrj.mongodb.net:27017,ac-81rkisb-shard-00-01.myfrbrj.mongodb.net:27017,ac-81rkisb-shard-00-02.myfrbrj.mongodb.net:27017/?ssl=true&replicaSet=atlas-rwiw3b-shard-0&authSource=admin&retryWrites=true&w=majority';
    try {
      await  mongoose.connect(MONODB_URI, { useNewUrlParser: true });
        console.log('Database connected successfully');

    } catch (error) {
        console.error('Error while connecting with the database', error.message);
    }
}

export default DBConnection;