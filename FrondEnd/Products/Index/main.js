const log = (...something)=>{
    console.log(...something)
}
let cont = 0
const product = (localStorage.getItem("Product"))
let valueCant = (localStorage.getItem("ValueNumber"))
let totalGeneral = 0

log(product)

const MasMenos = (e)=>{
    log(e.target)
    let parcial = e.target.parentNode.children[1].innerText
    parcial= parcial++
    
    let valuePrice = (localStorage.getItem("ValueProc"))

    if(e.target.innerText ==  "add"){
        let value = e.target.parentNode.children[1].innerText
        value = +value
        value++
        e.target.parentNode.children[1].innerText = value
        valueCant = value
        document.querySelector(".valueCantidad").innerText = valueCant
        totalFin = value*valuePrice
        document.querySelector(".valuePrice").innerText = totalFin 
        let parcialTolta = valuePrice
        localStorage.setItem("total", totalFin)

        if(valueCant == 0){
            log("Supuesto entra if")
            document.querySelector(".parcialito").innerText = 0
        }else{
            log("Supuesto no entra if")
            document.querySelector(".parcialito").innerText = parcialTolta
        }
    }else if (e.target.innerText ==  "remove" && parcial>0) {
        let value = e.target.parentNode.children[1].innerText
        value = +value
        value--
        e.target.parentNode.children[1].innerText = value
        valueCant = value
        document.querySelector(".valueCantidad").innerText = valueCant
        totalFin = valueCant*valuePrice
        let parcialTolta = valuePrice
        document.querySelector(".parcialito").innerText = parcialTolta
        document.querySelector(".valuePrice").innerText = totalFin
        localStorage.setItem("total", totalFin)
        if(valueCant == 0){
            document.querySelector(".parcialito").innerText = 0
        }else{
            document.querySelector(".parcialito").innerText = parcialTolta
        }
    }
}
const generarPago = (dataParametro)=>{
    log(dataParametro)
    const Total = dataParametro.Precio*valueCant
    if(valueCant == 0){
        return Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Debe seleccionar la cantidad que desea Comprar!',
          })
    }
    const loadData = async ()=>{
        try {
            let data1 = {
                    "user_id": "1",
                    "product_id": dataParametro.id,
                    "SubTotal": dataParametro.Precio,
                    "Total": Total
                }
            
            const res = await fetch('http://127.0.0.1:8000/api/Factura/Register',{
                method: 'POST', // or 'PUT'
                body: JSON.stringify(data1), // data can be `string` or {object}!
                headers:{
                  'Content-Type': 'application/json'
                }})
             const data = await res.json()
             Swal.fire(
                'Good job!',
                'Has registrado la compra Correctamente!',
                'success'
              )
        } catch (error) {
            log(error)
        }
    }
    loadData() 
}
const registro = ()=>{
    log("Depsues")
    let total = (localStorage.getItem("total"))
    let id = (localStorage.getItem("id"))
    let ValueProc = (localStorage.getItem("ValueProc"))    

    log(total)
    log(id)
    const loadData1 = async ()=>{
        try {
            const res = await fetch(`http://127.0.0.1:8000/api/product/show/${id}`)
             const data = await res.json()
             generarPago(data)
        } catch (error) {
            log(error)
        }
    }
    const datica = loadData1()
    log(datica)
}
const listeners = ()=>{
    log("listeners")
    document.querySelector(".registerFactura").addEventListener("click", registro)
    const buts = document.querySelectorAll(".buttoncito")
    log(buts)
    buts.forEach(element => {
      element.addEventListener("click", MasMenos)})
}
const loadInformation = (data)=>{
    const minidata = `<nav class="navbar bg-success">
    <div class="container">
      <div class="navbar-brand text-center" href="#">
        <img src="..\\..\\Sources/hospital-2_icon-icons.com_66067.png" alt="Bootstrap" width="60" height="50">
        <p class="textimg">healthCare</p>
      </div>
      <div class="d-flex w-50" role="search">
        <input class="form-control me-2 w-50" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-info" type="submit">Search</button>
        <span class="material-symbols-outlined carrito" >
            shopping_cart
            </span>
            <span class="material-symbols-outlined carrito">
                person
                </span>
      </div>
    </div>
  </nav>`
  const main = document.querySelector('.main')
  main.innerHTML = minidata
  const medicament =  `
  <div class="container-md w-75 mt-3 mb-5 d-flex conta">
        <div class="container-md w-50 mt-5 imag">
            <div class="center1">
                <div class="img">
                    <img class="imagencita" src="${data.UrlImg}" alt="">
                </div>
            </div>
        </div>
        <div class="container-md w-75 mt-3">
            <div class="center">
                <div class="text padding">
                    <h3>${data.NombreProducto}</h3>
                    <div class="partMidOne mt-3">
                        <span class="price">${data.Precio}</span>
                        <button type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop" class="btn añadir btn-success" value=${data.id}>Comprar Ahora</button>
                    </div>
                    <div class="partMidTwo mt-3">
                        <div class="buttonsLeft">
                            <span class="buttoncito material-symbols-outlined">
                                add
                            </span>
                            <span class="buttoncito value removeCursorPinter material-symbols-outlined">
                                ${valueCant}
                            </span>
                            <span class="buttoncito material-symbols-outlined">
                                remove
                            </span>
                        </div>
                        <button type="button" class="btn añadir btn-success" value=${data.id}>Añadir Carrito</button>
                    </div>
                    <div class="partMidthree mt-3">
                        <p class="descripcion mt-3">ES UN MEDICAMENTO. NO EXCEDER SU 
                            CONSUMO. LEER INDICACIONES Y 
                            CONTRAINDICACIONES. SI LOS SÍNTOMAS 
                            PERSISTEN, CONSULTAR AL MÉDICO</p>
                        <p class="minides">Caja con 6 Sobres</p>
                        <p class="minides">Via de Administracion: Oral</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    ` 
  main.innerHTML += medicament
    let tolpar = data.Precio
    let TotalPRice = (localStorage.setItem("ValueProc",data.Precio))
    localStorage.setItem("SubTotal", data.precio)
    localStorage.setItem("id", data.id)

  let modal = `<div class="modal fade " id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">Producto añadido correctaMente a su carrito de compras</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <div class="parent">
                <div class="div1"> 
                    <img class="imagencitaModal" src="${data.UrlImg}" alt="">
                </div>
                <div class="div2"> 
                    <p>Agregaste:</p>
                    <p class="descrpModal">${data.NombreProducto}</p>
                </div>
                <div class="div3">
                    <p class="priceModal">$${data.Precio}</p>    
                </div>
                <div class="div4">
                    <p class="negrilla">Resumen de </p>
                    <p>Sub Total</p>
                    <p>Transporte</p>
                    <p>Cantidad</p>
                    <p>IVA</p>
                    <p>Total</p>
                    <p>Incluido IVA</p>
                </div>
                <div class="div5">
                    <p class="negrilla"> tu Carrito</p>
                    <p class="negrilla parcialito">$0</p>
                    <p class="negrilla">Sin Costo</p>
                    <p class="negrilla valueCantidad">${valueCant}</p>
                    <p class="negrilla">Incluido</p>
                    <p class="negrilla valuePrice">$${tolpar}</p>
                    <p class="negrilla">$0</p>
                </div>
                </div>                
        </div>
        <div class="modal-footer foot">
          <button type="button" class="btn btn-outline-success" data-bs-dismiss="modal">Ver Mas Productos</button>
          <button type="button" class="btn btn-success registerFactura">Pagar</button>
        </div>
      </div>
    </div>
  </div>`
  main.innerHTML += modal
}

const otherProduct = (e)=>{
    localStorage.setItem("Product",e.target.value)
    localStorage.setItem("ValueNumber",0)
    window.location.reload()
}
const loadInformation1 =  async (id)=>{
    log(id)
    const res = await fetch(`http://127.0.0.1:8000/api/product/Index/`)
    const data = await res.json()
    log(data)
    const filteredNames = data.filter((element) => element.id!=id);
    log(filteredNames)
    let html1 = document.querySelector(".main")
    html1.innerHTML += `<div class="producFoot d-flex w-75">`
    let html2 = document.querySelector(".producFoot")
    for (let i = 0; i < filteredNames.length; i++) {
        const mindata = `<div class="container-md w-25 mt-3">
        <div class="center2">
            <div class="imgDown">
                <img class="imagencitaAbajo" src="${filteredNames[i].UrlImg}" alt="">
            </div>
            <div class="text1">
                <h3 class="abajoh3">${filteredNames[i].NombreProducto}</h3>
                <div class="partMidDown mt-3 mb-3">
                    <span class="price1 pb-4">${filteredNames[i].Precio}</span>
                    <button type="button" class="btn downButton btn-success mb-3" value=${filteredNames[i].id}>Añadir Al Carrito</button>
                </div>
            </div>
        </div>
    </div>`
    html2.innerHTML += mindata
    }
    const butt = document.querySelectorAll('.downButton')
    butt.forEach(element => {
        element.addEventListener("click", otherProduct)
    });
    listeners(data,id)
}

window.addEventListener("load", ()=>{
    const loadData = async ()=>{
        try {
            const res = await fetch(`http://127.0.0.1:8000/api/product/show/${product}`)
             const data = await res.json()
             loadInformation(data)
             loadInformation1(data.id)
             loadModal(data.id)
        } catch (error) {
            log(error)
        }
    }
    loadData()
})



