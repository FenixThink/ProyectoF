const log = (...something)=>{
    console.log(...something)
}
const MasMenos = (e)=>{
    let parcial = e.target.parentNode.children[3].innerText
    parcial= parcial++
    if(e.target.innerText ==  "add"){
        let value = e.target.parentNode.children[3].innerText
        value = +value
        value++
        e.target.parentNode.children[3].innerText = value

    }else if (e.target.innerText ==  "remove" && parcial>0) {
        let value = e.target.parentNode.children[3].innerText
        value = +value
        value--
        e.target.parentNode.children[3].innerText = value
    }
}
const locations = (e)=>{
  localStorage.setItem("Product",e.target.value)
  localStorage.setItem("ValueNumber",e.target.parentNode.children[3].innerText)

  window.location = "../../Products/Index/IndexProducts.html"
}
const loadInfo = (data)=>{
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
  </nav>
  <div id="carouselExampleIndicators" class="carousel slide carrousel" data-bs-ride="false">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item prueba active">
      <img src="..\\..\\Sources/meicamrbcarrosul.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..\\..\\Sources/medicamentos-2.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..\\..\\Sources/medicament-que-es.jpg" class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
        </div>
    `
  const main = document.querySelector('.main')

  
  main.innerHTML= minidata
  for (let i = 0; i < data.length; i++) {
    const medicament =  ` <div class="container-md w-50 mt-5 mb-5">
  <div class="center">
      <div class="img">
          <img class="imagencita" src="${data[i].UrlImg}" alt="">
      </div>
      <div class="text">
          <h3>${data[i].NombreProducto}</h3>
              <span class="price">${data[i].Precio}</span>
              <span class="buttoncito material-symbols-outlined">
                  add
                  </span>
                  <span class="buttoncito value removeCursorPinter material-symbols-outlined">
                      0
                      </span>
                  <span class="buttoncito material-symbols-outlined">
                      remove
                      </span>
              <button type="button" class="btn añadir btn-success" value=${data[i].id}>Añadir Carrito</button>
      </div>
  </div>`
  main.innerHTML += medicament
    
}
const botones = document.querySelectorAll(".buttoncito")
botones.forEach(element => {
    element.addEventListener("click", MasMenos)
});
const anadir = document.querySelectorAll('.añadir')
anadir.forEach(element => {
  element.addEventListener("click", locations)
});
    log(data)
}
window.addEventListener("load", ()=>{
    const loadData = async ()=>{
        try {
            const res = await fetch('http://127.0.0.1:8000/api/product/Index')
             const data = await res.json()
             loadInfo(data)
        } catch (error) {
            log(error)
        }
    }
    loadData()
})