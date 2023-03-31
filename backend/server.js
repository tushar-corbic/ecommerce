const app = require("./app")

const dotenv = require("dotenv")
const connectDatabase = require("./config/database")


// handling uncaught exception
process.on("uncaughtException", (error)=>{
    console.log(`The error is : ${error.message}`);
    console.log("Shutting down the server due to uncaught exception");
    // process.exit(1)
})

console.log(asfjal)

// config
dotenv.config({path:"backend/config/config.env"});

// connecting to database
connectDatabase();

const server = app.listen(process.env.PORT, ()=>{
    console.log(`Server is ruinning on http://localhost:${process.env.PORT}...`)
})


// unhandled promise rejection
process.on("unhandledRejection", err=>{
    console.log(`error: ${err.message}`)
    console.log("Shutting down the server due to unhandled promise Rejection")

    server.close(()=>{
        process.exit(1);
    });
})