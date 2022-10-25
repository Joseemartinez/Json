fetch("http://127.0.0.1:5500/jsondepractica.json")
.then((Response)=>Response.json())
.then((nombres)=>{
    const nombresdepasajeros = nombres.map((nombre)=>nombre.nombre);
    console.log(nombresdepasajeros);
});
