let a = document.querySelector(".explore") 

let c = document.querySelector(".li1") 



a.addEventListener("click" , () => {
    let b = document.querySelector("#home") 
    b.style.display = "none"
    let r = document.querySelector(".conta1") 
    r.classList.add("hide")
    let romo = document.querySelector("#explore") 
     romo.style.display = "block"
   
})


c.addEventListener(("click") , () => { 
     let b = document.querySelector("#home") 
    b.style.display = "block"
     let r = document.querySelector(".conta1") 
    r.classList.remove("hide")
    let romo = document.querySelector("#explore") 
    romo.style.display = "none"

 })


// const boxes = document.getElementsByClassName("like");
// const asli = boxes[0].children

// Array.from(asli).forEach((i, index) => {
    
//     i.style.backgroundImage = `url("images/im${index + 1}.jpg")`;

// });

let boxex = document.querySelectorAll(".a_")

boxex.forEach((i , index)  => {  
    let div = document.createElement("div")
    div.innerHTML = `<img class = "imr flex" src="images/im${index + 1}.jpg" alt="image">`
    
    div.classList.add("bgimagesr") 

    i.append(div)
 }
)
const text = [
"Darshan Raval" , 
"Jubin Nutiyal" , 
"Anuv Jain" , 
"Pritam" , 
"ED Shereen" , 
"Arjit Singh" , 
"Tony Kakkar" , 
"Armaan Malik" , 
"Karan Aujila" , 
"Sonu Nigam"

]


boxex.forEach((i , index)  => {  
   i.innerHTML = i.innerHTML +  text[index]
 }
)




let people = document.querySelectorAll(".a_") 








 let songs = [

    ["soni soni","Barsaat","Ek tarfa" ] ,  /* 0 darshan raval */
    ["Tum he ho" , "Channa mereya" , "Apna bana le"] , /*arjit sing  */
    ["Afsos" ,"Alag aasman" , "Antriksh"], /*anuv jain  */
    ["Aujla","BTFU" ,"Softly"], /*karan aujla  */
    ["Control","You" ,"Bol do"], /*armaan malik */
    ["Shivers","Perfect" ,"Bad habits"],/*ed sherren */
    ["Lut gaye","Rataan Lambiyan" ,"Humnava mere"],/*jubin nutiyal */
    ["Raat din","Kal ho na ho" ,"Melody"], /*sonu nigam  */
    ["Coca cola","Mile ho tum" ,"Pop energy"], /*tony kakkar  */
    ["Keasriya","Tum se" ,"Love aaj kal"] , /*pritam  */

    
 ]

let obj = {"Darshan Raval" : 0 , "Arjit Singh" : 1 , "Anuv Jain" : 2 , "Karan Aujila":3 , 
           "Armaan Malik" :4 , "ED Shereen" : 5 , "Jubin Nutiyal" : 6 , "Sonu Nigam" :7  ,
           "Tony Kakkar" : 8 , "Pritam" : 9 
 }



index = 0
let d = document.querySelectorAll(".a_2") 
for (let i = 1; i < 11; i++) {

    if(index>d.length) {
        break 
    }

    for (let j = 1; j < 4; j++) {
 let divele= document.createElement("div")
 let divele1= document.createElement("div")
    divele.classList.add("a__")
    divele1.classList.add("a__text")    

    
    divele.innerHTML = `<img class = "sec" src="${i}/${j}.jpg" alt="image">`
    divele1.innerHTML = songs[i-1][j-1]
    d[index].append(divele)
    d[index].append(divele1)

    index++
  
    }
 
}





const searchbar = document.querySelector(".searchbar");
const searchbarDisplay = document.querySelector(".searchbar_display");

function checkWidth() {
    if (window.innerWidth <= 1000) {
        searchbar.style.display = "none";
        searchbarDisplay.style.display = "block";


        
let searches1 = document.querySelector(".searchbar_display") 

searches1.addEventListener("input" , () => { 

    let word1 = searches1.value.toLowerCase() 

    people.forEach(
     i => {
        let textc = i.innerText.toLowerCase() 
        if(textc.includes(word1)){
            i.style.display="flex "
        }
        else {
            i.style.display = "none"
        }
     }
    )

 })

    } else {
        searchbar.style.display = "block";
        searchbarDisplay.style.display = "none";

        let searches = document.querySelector(".searchbar") 
        people.forEach(i =>{
            i.style.display =""
        })


searches.addEventListener("input" , () => { 
    let word = searches.value.toLowerCase() 
    people.forEach(
     i => {
        let textc = i.textContent.toLowerCase() 
        if(textc.includes(word)){
            i.style.display="flex "
        }
        else {
            i.style.display = "none"
        }
     }
    )
 })
    }

}
checkWidth();
window.addEventListener("resize", checkWidth);



/*****************************random allotment ***************  */
const grid = document.querySelector(".songs");
const boxes = Array.from(grid.children);

for (let i = boxes.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [boxes[i], boxes[j]] = [boxes[j], boxes[i]];
}

boxes.forEach(box => grid.appendChild(box));


const grid11 = document.querySelector(".artist");
const boxes11 = Array.from(grid11.children);

for (let i = boxes11.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [boxes11[i], boxes11[j]] = [boxes11[j], boxes11[i]];
}

boxes11.forEach(box => grid11.appendChild(box));

/****************************************************************/

let all_songs_folder = [
    "soni_soni",
    "Barsaat",
    "Ek_tarfa",
    "Tum_he_ho",
    "Channa_mereya",
    "Apna_bana_le",
    "Afsos",
    "Alag_aasman",
    "Antriksh",
    "Aujla",
    "BTFU",
    "Softly",
    "Control",
    "You",
    "Bol_do",
    "Shivers",
    "Perfect",
    "Bad_habits",
    "Lut_gaye",
    "Rataan_Lambiyan",
    "Humnava_mere",
    "Raat_din",
    "Kal_ho_na_ho",
    "Melody",
    "Coca_cola",
    "Mile_ho_tum",
    "Pop_energy",
    "Keasriya",
    "Tum_se",
    "Love_aaj_kal"
];

let allboxes = document.querySelectorAll(".a_2")   

allboxes.forEach(i =>{
   
    i.addEventListener("click" , (e)=>{

        let matcher = i.innerText   

        let fake_tr = ""   
        for (const i of matcher) {
            if(i!=" ")
                fake_tr= fake_tr+i
            else if(i == " "){
                fake_tr= fake_tr+ "_"
            }
        }



        for (const i in all_songs_folder) {
            if(all_songs_folder[i]==fake_tr ) {
                
            let elom = document.createElement("div")
            elom.classList.add("elomre") 
            elom.innerHTML = ` <video autoplay controls src="songre/${all_songs_folder[i]}.wav" class="actual_elom"></video>`
            document.querySelector(".play").replaceChildren(elom);
            
            }
        
        }


    })



})

 
// let all_songs =  document.querySelectorAll(".a_2") 
// let all_artist = document.querySelectorAll(".a_") 
// all_artist.forEach(i =>{
//     i.addEventListener("click" , (e)=>{
      
//         let clicked_text = i.textContent   
//         let artist_index = obj[clicked_text] 
//         all_songs.forEach(i =>{
//             let tect_song = i.textContent
//             if(songs[artist_index].includes(tect_song)) {
//                 i.style.display = "Block" 
//             }
//             else{
//                 i.style.display ="none"
//             }
//         })

//     })
// })


let all_songs = document.querySelectorAll(".a_2");
let all_artist = document.querySelectorAll(".a_");

let selected = "";

all_artist.forEach(i => {
    i.addEventListener("click", (e) => {

        let clicked_text = i.textContent;
        let artist_index = obj[clicked_text];

        if (selected === clicked_text) {
            all_songs.forEach(i => {
                i.style.display = "";
            });

            selected = "";
            return;
        }

        selected = clicked_text;

        all_songs.forEach(i => {
            let tect_song = i.textContent.trim();

            if (songs[artist_index].includes(tect_song)) {
                i.style.display = "block";
            }
            else {
                i.style.display = "none";
            }
        });

    });
});
