/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

console.log('Happy hacking :)--')

const appNode = document.querySelector('#app');
appNode.className = ""


//internalizacion de formatos 
//Fechas
//Monedas

//Funcion de formato de monedas
function formatPrice( price ){
    const newPrice = new window.Intl.NumberFormat('en-EN',{
        style: "currency",
        currency: "USD"
    }).format(price);
    return newPrice;
}

const url = "https://platzi-avo.vercel.app"
//Connectarno al server
//Procesar la respuesta y convertirla en JSON
// JSON -> Data -> Renderizacion

//Nos ayuda traer recursos de cualquier parte de una web
window.fetch(`${url}/api/avo`) 
.then( (respuesta) => respuesta.json())
.then((response) =>{
    const itemList = []
    var index = 1;
    const container = document.createElement('div');
    
    response.data.forEach(element => {
        const img = document.createElement('img');
        img.width = "100";
        img.height = "100";
        img.className = " mx-auto rounded-md hover:translate-y-1 ";
        img.src = `${url}${element.image}`
            
        const title = document.createElement('h2');
        title.textContent = element.name;
        
        title.className="text-sm"
        const price = document.createElement('span');
        price.className = "rounded-full px-1 mx-auto"
        price.style ="background-color:#d9f99d;"
        price.textContent  = formatPrice(element.price);
        
        const sku = document.createElement("span");
        sku.style.fontSize="0.5rem"
        sku.className = "opacity-0 sku transition duration-150 delay-50 "
        sku.textContent = "SKU: " + element.sku;
        

        const item = document.createElement('div');
        
        item.className = " flex flex-col  p-1.5 bg-gray-200 rounded-md text-center hover:shadow-2xl hover:scale-110 transition transform ease-in-out delay-50 duration-300 "
        item.append(img,title,price,sku);
    
        
        item.id = index++;
        itemList.push(item);
        
        item.addEventListener("mouseover",(event) =>{
            const item = event.currentTarget.querySelector(".sku");
            if(item != null ){
                item.className= "opacity-100 sku transition duration-150 delay-50";
            }

        }
        );

        item.addEventListener("mouseout",(event) =>{
            const item = event.currentTarget.querySelector(".sku");
            if(item != null ){
                item.className= " opacity-0 sku transition duration-150 delay-50";
            }

        }
        );
        
        
    });
    container.className = `grid grid-cols-2 gap-10`;
    container.append(...itemList);
    appNode.appendChild(container);
}); 

//promise -> async /await

