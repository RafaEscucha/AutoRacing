function generateProducts() {
    return [
        {
            Id: 1,
            Name: "Subaru Impreza 2.0 WRX STI V.E.",
            Description: "El Subaru Impreza 2.0 WRX STI V.E. (2004-2005) tiene un motor gasolina de 1994 cc con 4 cilindros ubicados boxer que alcanza una potencia máxima de 265 CV a 6000 rpm y par máximo de 350 nm a 4000 rpm. Se trata por lo tanto de una mecánica con una potencia específica de 265 CV, con nutrición inyección indirecta.",
            Amount: 1200,
            Image: "../Image/Auto Subaru.jpg"
        },
        {
            Id: 2,
            Name: "BMW M2 Competition M DCT",
            Description: "El BMW M2 Competition M DCT (2018-2021) tiene un motor gasolina de 2979 cc con 6 cilindros ubicados en línea que alcanza una potencia máxima de 411 CV a 5250-7000 rpm y par máximo de 550 nm a 2350-5200 rpm. Se trata por consiguiente de una mecánica con una potencia específica de 411 CV, con nutrición turbo.",
            Amount: 1650,
            Image: "../Image/Auto BMW.jpg"
        },
        {
            Id: 3,
            Name: "Aston Martin V8 Vantage Roadster",
            Description: "El Aston Martin V8 Vantage Roadster (2020) tiene un motor gasolina de 3982 cc con 8 cilindros situados en v que alcanza una potencia máxima de 510 CV a 6000 rpm y par máximo de 685 nm a 2000-5000 rpm. Se trata por consiguiente de una mecánica con una potencia específica de 510 CV, con nutrición intercooler.",
            Amount: 1900,
            Image: "../Image/Auto Aston Martin.jpg"
        },
        {
            Id: 4,
            Name: "Porsche 911 R",
            Description: "El Porsche 911 R (2016-2017) tiene un motor gasolina de 3996 cc con 6 cilindros situados boxer que alcanza una potencia máxima de 500 CV a 8250 rpm y par máximo de 460 nm a 6250 rpm. Se trata por tanto de una mecánica con una potencia máxima de 500 CV, con alimentación inyección directa.",
            Amount: 2000,
            Image: "../Image/Auto Porsche.jpg"
        },
        {
            Id: 5,
            Name: "Ferrari 458 Italia",
            Description: "El Ferrari 458 Italia (2010-2012) tiene un motor gasolina de 4497 cc con 8 cilindros ubicados en v que alcanza una potencia máxima de 570 CV a 9000 rpm y par máximo de 540 nm a 6000 rpm. Se trata por tanto de una mecánica con una potencia específica de 570 CV, con nutrición inyección directa.",
            Amount: 2150,
            Image: "../Image/Auto Ferrari.jpg"
        },
        {
            Id: 6,
            Name: "Bugatti Veyron 16.4",
            Description: "El Bugatti Veyron 16.4 (2005-2008) tiene un motor gasolina de 7993 cc con 16 cilindros ubicados en w que alcanza una potencia máxima de 1001 CV a 6000 rpm y par máximo de 1250 nm a 2200-5500 rpm. Se trata en consecuencia de una mecánica con una potencia máxima de 1001 CV, con nutrición inyección directa.",
            Amount: 3000,
            Image: "../Image/Auto Bugatti.jpg"
        },
        {
            Id: 7,
            Name: "Mercedes-Benz SLR McLaren Coupé",
            Description: "El Mercedes-Benz SLR McLaren Coupé (2003-2008) tiene un motor gasolina de 5439 cc con 8 cilindros situados en v que alcanza una potencia máxima de 625 CV a 6500 rpm y par máximo de 780 nm a 3250-5000 rpm. Se trata por ende de una mecánica con una potencia máxima de 625 CV, con nutrición intercooler.",
            Amount: 2050,
            Image: "../Image/Auto Mercedes.jpg"
        },
        {
            Id: 8,
            Name: "McLaren 675LT Spider",
            Description: "El McLaren 675LT Spider (2016-2018) tiene un motor gasolina de 3799 cc con 8 cilindros situados en v que alcanza una potencia máxima de 675 CV a 7100 rpm y par máximo de 700 nm a 5500-6500 rpm. Se trata por lo tanto de una mecánica con una potencia específica de 675 CV, con alimentación turbo.",
            Amount: 2020,
            Image: "../Image/Auto Mclaren.jpg"
        },
        {
            Id: 9,
            Name: "Dodge Viper SRT10 Roadster",
            Description: "El Dodge Viper SRT10 Roadster (2008-2009) tiene un motor gasolina de 8277 cc con 10 cilindros ubicados en v que alcanza una potencia máxima de 506 CV a 5600 rpm y par máximo de 712 nm a 4200 rpm. Se trata en consecuencia de una mecánica con una potencia concreta de 506 CV, con alimentación.",
            Amount: 1300,
            Image: "../Image/Auto Dodge.jpg"
        },
        {
            Id: 10,
            Name: "Lamborghini Huracán LP 610-4 Spyder",
            Description: "El Lamborghini Huracán LP 610-4 Spyder (2015-2019) tiene un motor gasolina de 5204 cc con 10 cilindros situados en v que alcanza una potencia máxima de 610 CV a 8000 rpm y par máximo de 560 nm a 6500 rpm. Se trata por consiguiente de una mecánica con una potencia máxima de 610 CV, con alimentación inyección mixta directa/indirecta.",
            Amount: 2500,
            Image: "../Image/Auto Lamborghini.jpg"
        }
    ];
}

function showDescription(productId) {
    const products = generateProducts();
    const product = products.find(p => p.Id === productId);
    const descriptionContainer = document.getElementById(`description-${product.Id}`);
    const button = event.target;

    if (descriptionContainer.style.display === "none" || descriptionContainer.style.display === "") {
        descriptionContainer.style.display = "block"; 
        button.textContent = "Ocultar descripción"; 
    } else {
        descriptionContainer.style.display = "none";
        button.textContent = "Mostrar descripción";
    }
}

function displayProducts() {
    const products = generateProducts();
    const container = document.getElementById("product-container");
    products.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `
            <h2>${product.Name}</h2>
            <img src="${product.Image}" alt="${product.Name}" class="product-image">
            <p>Precio: USD$${product.Amount.toFixed(2)} + Alquiler del circuito</p>
            <button onclick="showDescription(${product.Id})">Mostrar descripción</button>
            <div id="description-${product.Id}" class="product-description" style="display: none;">
                <p>${product.Description}</p>
            </div>
        `;
        container.appendChild(card);
    });
}

window.onload = displayProducts;