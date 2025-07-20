import { Server } from "http";
import app from "./app"



const PORT = 3000;

const main = async () =>{
    const server:Server = app.listen(PORT,()=>{
        console.log(`Health server is running http://localhost:${PORT}`)
    })
}

main()