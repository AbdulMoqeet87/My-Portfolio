fetch('User.json')
    .then(response => response.json())  // Convert the response to a JSON object
    .then(data => {
        
        
        const Cover= document.getElementById("cover-content");
        
        Cover.innerHTML= `<img src="${data.user.img}"alt="Profile Picture">            
             <div id="cover-text">
                 <h1>${data.user.Name}</h1>
                 <h3 style="line-height: 2 "><i>${data.user.description}</i></h3>
                 </div>`
                 ;
        
        const education = document.getElementById("education-card");

        education.innerHTML = data.user.education.map(e => 
            `<div class="card">
                <p class="card-title">${e.title}</p>
            </div>`
        ).join('');

        setupCardHoverEffects(data.user.education); 
    })
    .catch(error => console.error('Error fetching data:', error));  


function setupCardHoverEffects(data) {
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('mouseover', () => {
            const title = card.querySelector('.card-title');
            if (!title.dataset.originalText) {
                title.dataset.originalText = title.innerText; 
            }
            if (title.dataset.originalText === "University") {
                title.innerHTML = `<p><b>${data[0].name}</b></p><p>${data[0].dis}</p><p>CGPA: ${data[0].gpa}</p>`;
            } else if (title.dataset.originalText === "College") {
                title.innerHTML = `<p><b>${data[1].name}<br></b></p><p>${data[1].dis}</p><p>Grade:${data[1].gpa}</p>`;
            } else if (title.dataset.originalText === "School") {
                title.innerHTML =  `<p><b>${data[2].name}<br></b></p><p>${data[2].dis}</p><p>Grade:${data[2].gpa}</p>`;
            }
            title.style.color = 'black';
            title.style.fontFamily = 'Gill Sans';
            card.style.backgroundColor = 'white';
            title.style.fontWeight = 'normal';
            title.style.fontSize = '100%';
            title.style.marginTop = '40px';
            card.style.width = '230px';
            card.style.height = '200px';
            title.style.flexDirection = 'column';
        });

        card.addEventListener('mouseout', () => {
            const title = card.querySelector('.card-title');
            title.innerText = title.dataset.originalText;
            title.style.color = 'white';
            card.style.backgroundColor = 'rgba(94, 94, 94, 0.747)';
            title.style.fontWeight = 'bold';
            title.style.fontSize = '200%';
            card.style.width = '230px';
            card.style.height = '200px';
            title.style.marginTop = '80px';
        });
    });
}
