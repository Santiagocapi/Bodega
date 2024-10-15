const app = require("./app/app")
const port = process.env.PORT || 3000;  

app.listen(port, (err) => {
    if(err){
        console.error("Error al iniciar el servidor")
        return
    }
    console.log(`El servidor se ha iniciado en http://localhost:${port}`)
});
