fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users =>{
    console.log(users);
    displayUsers(users);
});

/**
 * Fonction displayUsers qui sert à créer le tableau des éléments
 * @param {*} users 
 */
function displayUsers (users) {
    let div = document.querySelector("#users");

    let html = `<table class="table table-striped">
                    <thead>
                    <tr>`
                    html += displayHeaders(users[0]);
                    html +=
                    `</tr>
                    </thead>`;
    users.forEach(user => {
       html += displayUser(user);
        
    });

    html += `</table>`
    div.innerHTML = html;
}

/**
 * Fonction displayUser qui sert à afficher tout les éléments d'un fichier json
 * @param {*} user 
 * @returns 
 */
function displayUser(user) {
    
    let html = `<tr>`
    
    for(let prop in user){

        if (user[prop] instanceof Object){
            let obj = user[prop];
            html += "<td>"

            // On affiche chaque élément du sous-objet
            for(let prop in obj){
                html += obj[prop] + " "
            }
            html += "</td>"
        }
        
        else {
        html += `<td>${user[prop]}</td>`;
        }
    }

    html += `</tr>`;

    return html;
}

/**
 * Fonction displayHeaders qui sert à afficher l'en-tête du fichier json
 * @param {*} user 
 * @returns 
 */
function displayHeaders(user) {
    
    let html ='';

    for(let prop in user)
    {
        html += `<th>${prop}</th>`
    }
    return html;
}