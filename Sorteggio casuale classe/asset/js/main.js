let nomi = ["Modestino", "Abdelhamid" ,"Andrea","Alberto","Vincenzo","Gerardo" ,"Luca","Tancredi","Valentino","Ludovica","Davide","Nizar","Alessandro","Gabriele" ,"Stefano","Angelo","Caterina","Sergio","Clara","Matteo","Simone" ,"Noemi","Roberto","Andrea","Andrea","Simone" ,"Samuele" ,"Vera","Ivan","Michael","Simone Luca","Francesco"];
let cognomi = ["Arpa","Ayadi","Bellucci","Biga","Borriello","Calia","Carbone","Carluccio","De Stefano","Di Benedetto","Di Pietro","Fergag","Fonzi","Magni","Maiorchini","Melotti","Moccia","Nifosi","Nocilla","Nuvoloni","Pavone","Pintaldi","Piva","Pontillo","Rosellini","Saputo","Spadaro","Sprinceana","Toselli","Wachnicki","Zaino","Natoli"]

let list = [];

let i = 0;

while ( i < nomi.length ) {
    console.log(i)
    list.push(`${cognomi[i]} ${nomi[i]}`)
    console.log(list[i]);

    i++
}

let buttonRandom = document.getElementById("buttonRandom");

buttonRandom.addEventListener("click",
    function () {
        let containerNomeEstratto = document.getElementById("nomeEstratto");
        let nomeEstratto = list[Math.floor(Math.random() * list.length)];
        containerNomeEstratto.innerHTML = `<div style="font-size: 2em; vertical-align: middle;"> ${nomeEstratto} </div>`; 
    }
)



