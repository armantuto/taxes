
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
const principalex = document.querySelector(".principale")
const div = document.createElement("div");
botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (evento) => {
        botonesCategorias.forEach(boton => {
            if (boton !== evento.currentTarget) {
                boton.classList.remove("active");
            }
        });
        evento.currentTarget.classList.add("active");
        if (evento.currentTarget.id == "Bevidas") {
            tituloPrincipal.innerHTML = "Calcolo Mensile"
            principalex.classList.add("disabled")
            calcoloMensile()
        } else if (evento.currentTarget.id == "Snacks") {
            tituloPrincipal.innerHTML = "Calcolo Consegna"
            principalex.classList.add("disabled")
            calcoloConsegna()
        } else {
            tituloPrincipal.innerHTML = "principale"
            principale()

        }

    });
});

function calcoloMensile() {
    const contenedorProductos = document.querySelector("#contenedor-productos");


    div.innerHTML = ` 
    <div class="wrapper">
    <div class="form-box register">
        <h2>Calcolo netto Mensile</h2>
        <form action="#">
            <div class="input-box">
                <span class="icon"><ion-icon name="person"></ion-icon></span>
                <input type="decimal"   id="lordeM">
                <label>Inserisci il guadagno </label>
            </div>
            <div class="input-box">
                <span class="icon"><ion-icon name="mail"></ion-icon></span>
                <input type="decimal" id="carburante" >
                <label>inserisce spese carburante</label>
            </div>
            <div class="input-box">
                <span class="icon"><ion-icon name="lock-closed"></ion-icon></span>
                <input type="decimal" id="altreSpesse">
                <label>inserisce altre spese</label>
            </div>
           
            <button type="submit" class="btn" onclick="CalcolaTasse()">Cacola</button> <br> <br> <br>
          
                <h1> <span id="calcola"></span> </h1>  <br> <br>
           </form>`;


    contenedorProductos.append(div);
}

function principale() {
    const contenedorProductos = document.querySelector("#contenedor-productos");


    div.innerHTML = `<br> <div class="principale"> <h4> Benvenuti a Rider Tax, l'azienda che aiuta i lavoratori con partita IVA ad avere una gestione
    semplice ed
    efficace delle tasse da pagare.</h4> <br> <br>
<p>Il nostro programma calcola con precisione gli importi dovuti, e inoltre,
    tiene conto dei costi aggiuntivi come la benzina, la manutenzione del veicolo e le spese extra. In questo
    modo, potrai conoscere il netto mensile che guadagnerai dopo tutte le spese e le tasse. Scegli Rider Tax per
    avere una soluzione comoda e affidabile per la gestione delle tue tasse.</p>

</div>

        `;

    contenedorProductos.append(div);
}

function calcoloConsegna() {
    const contenedorProductos = document.querySelector("#contenedor-productos");


    div.innerHTML = `    <div class="wrapper">
    <div class="form-box register">
        <h2>Calcolo netto per consegna</h2>
        <form action="#">
            <div class="input-box">
                <span class="icon"><ion-icon name="person"></ion-icon></span>
                <input type="decimal" id="oil" >
                <label>Inserisci il ultimo prezzo della benzina</label>
            </div>
            <div class="input-box">
                <span class="icon"><ion-icon name="mail"></ion-icon></span>
                <input type="decimal" id="consegnaP" >
                <label>Inserisci il prezzo della consegna</label>
            </div>
            <div class="input-box">
                <span class="icon"><ion-icon name="lock-closed"></ion-icon></span>
                <input type="decimal" id="km">
                <label>inserisci i km da percorrere per la consegna</label>
            </div>
           
            <button type="submit" class="btn"onclick="NettoConsegna()" >Cacola</button> <br> <br> <br>
            <div> <h3 id="benzi"> </h3></div> <br>
            <div> <h3 id="tas"> </h3></div> <br>
            <div> <h3 id="nettoC"> </h3></div> 
        </form>
    </div>
    </div>`;

    contenedorProductos.append(div);
}