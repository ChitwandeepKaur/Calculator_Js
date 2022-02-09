const form = document.querySelector('form');
const show = document.getElementById('showMoviesHere');

function getShows(searchText){

    while(show.firstChild){                 //removes previous searches from the page
        show.removeChild(show.firstChild);
    }

    const url=`https://api.tvmaze.com/search/shows?q=${searchText}`;

    axios.get(url)      //request is being sent to the API
    .then((res)=>{
        for(let item of res.data){
            
            if(item.show.image){

                const title = document.createElement('span');
                const name = document.createTextNode(item.show.name);
                const img = document.createElement('img');
                img.src = item.show.image.medium;   
                title.appendChild(img);
                title.appendChild(name);
                if(item.show.premiered){
                    const date = document.createTextNode(" (" + (item.show.premiered).split('-')[0] + ")");
                    title.appendChild(date); 
                }  
                show.append(title);           //results are appended into HTML element
            }
        }
        

    })
    .catch((err)=>{
        console.log(err);
    })
}


form.addEventListener('submit',(e)=>{
    e.preventDefault();   //to prevent the default functioning when the form is submitted

    const searchText = e.target[0].value;

    getShows(searchText);
})