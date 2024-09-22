const NavObjects = [
    { "title": "Home", "href": '#' },
    { "title": "Education", "href": "#education" },
    { "title": "Skills", "href": "#skills"},
    { "title": "Projects", "href":"#Projects" },
    { "title": "Pursuits", "href": "#Pursuits" }
];


function populateNav() {
    const rootDiv = document.getElementById("navbar");
    rootDiv.innerHTML = NavObjects.map(n => 
        `<a href="${n.href}">${n.title}</a>`
    ).join('');
}
