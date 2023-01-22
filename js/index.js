



const form = document.getElementById("myform");


const handleform = (e) => {

    e.preventDefault()                             //data of page is not refresh

    const date = document.forms["myform"]["date"].value;                //input value accesss in year



    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '32a3274666msh1328bbc5d1d6120p14a4dfjsn3e07db20185b',
            'X-RapidAPI-Host': 'pricer.p.rapidapi.com'
        }
    };

    fetch(`https://pricer.p.rapidapi.com/str?q=${date}`, options)
        .then(response => response.json())
        .then(response => {





            response.map((cval) => {

                document.getElementById("result").innerHTML += `
                    
                    <div class="col-md-4">
                    <div class="card bg-dark text-white text-center" style="width: 18rem ;">
                    <img src="${cval.img}" class="card-img-top" alt="...">
                     <div class="card-body">
                     <h5 class="card-title">${cval.title}</h5>
                       <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                       <h3 class="text-danger">price${cval.price}</h3>
                       <a href="${cval.link}" class="btn btn-primary">Read More</a>
                        </div>
                       </div>
                    </div>
                    
                    `
            })

        })
        .catch(err => console.error(err));




}
form.addEventListener("submit", handleform)
