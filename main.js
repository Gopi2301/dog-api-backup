const url = 'https://the-vegan-recipes-db.p.rapidapi.com/';
const cardContainer = document.querySelector('.card-container');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '19eef4b15fmshfce6e13d8711929p12f7ecjsn8c80cac21097',
		'X-RapidAPI-Host': 'the-vegan-recipes-db.p.rapidapi.com'
	}
};
async function getReciepes(){
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result[0]);
      result.map((ele)=>{ 
        const card=document.createElement('div');
        card.innerHTML=`
        <img class="card-img" src=${ele.image}>
        <h2>${ele.title}</h2>
        <p> difficulty:   ${ele.difficulty
        }</p>
        `
        cardContainer.append(card)
    
      })
    } catch (error) {
        console.error(error);
    }
}
getReciepes()
