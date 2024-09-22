

fetch('User.json')
    .then(response => response.json())  // Convert the response to a JSON object
    .then(data => {
 
        console.log(data);
        const Cover= document.getElementById("cover-content");
        
       Cover.innerHTML= 
       `<img src=${data.user.img} alt="Profile Picture">            
            <div id="cover-text">
                <h1>${data.user.Name}</h1>
                <h3 style="line-height: 2 "><i>${data.user.description}</i></h3>
                </div>`
                ;
        
        const education = document.getElementById("education-card");
        education.innerHTML=data.user.education.map(e=>
            `<div class="card">
                    <p class="card-title">${e.title}</p>
                </div>`
        ).join('');
        
        
    })
    


