async function getPeliculas() {
    try {
        const response = await fetch("http://localhost:3001/productos",{

       method:"GET",
       headers:{
        "Content-Type": "application/json"
        

       }
     })
     const peliculas = await response.json()
     return peliculas
        
    } catch (error) {
     console.error("hay un error al obtener los productos", error)
     throw error
     
    }
}

export {getPeliculas}


async function postPeliculas(productos) {
    try {
        const response = await fetch("http://localhost:3001/productos",{

       method:"POST",
       headers:{
        "Content-Type": "application/json",
        
        },
       body:JSON.stringify(productos)

     })
     const peliculas = await response.json()
     return peliculas
        
    } catch (error) {
     console.error("hay un error al crear los productos", error)
     throw error
     
    }
}
export {postPeliculas}