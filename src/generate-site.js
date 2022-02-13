const createTeam = team => {
    // empty array to add the html cards to
    const cards = [];
    // functions to create the employee cards
    const createManager = manager => {
        let managerCard = `
        <div class="card" style="width: 18rem">
            <div class="card-header">
            ${manager.name} <br/>
            <i class="fas fa-mug-hot"></i> Manager</div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${manager.id}</li>
                <li class="list-group-item">Email: <span id="email"><a href="mailto:${manager.email}">${manager.email}</a></span></li>
                <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
            </ul>
        </div>
        `;

        cards.push(managerCard);
    };

    const createEngineer = engineer => {
        let engineerCard = `
        <div class="card" style="width: 18rem">
            <div class="card-header">
            ${engineer.name} <br/>
            <i class="fas fa-glasses"></i> Engineer</div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${engineer.id}</li>
                <li class="list-group-item">Email: <span id="email"><a href="mailto:${engineer.email}">${engineer.email}</a></span></li>
                <li class="list-group-item">GitHub Username: <a target="_blank" href="https://github.com/${engineer.github}">${engineer.github}</a></li>
            </ul>
        </div>
        `;

        cards.push(engineerCard);
    };
    
    const createIntern = intern => {
        let internCard = `
        <div class="card" style="width: 18rem">
            <div class="card-header">
            ${intern.name} <br/>
            <i class="fas fa-user-graduate"></i> Intern</div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${intern.id}</li>
                <li class="list-group-item">Email: <span id="email"><a href="mailto:${intern.email}">${intern.email}</a></span></li>
                <li class="list-group-item">School: ${intern.school}</li>
            </ul>
        </div>
        `;

        cards.push(internCard);
    };

    // loop through all entered employees and create a card for each
    for (let i=0; i < team.length; i++) {
        if (team[i].getRole() === "Manager") {
            createManager(team[i]);
        }
        if (team[i].getRole() === "Engineer") {
            createEngineer(team[i]);
        }
        if (team[i].getRole() === "Intern") {
            createIntern(team[i]);
        }
    };

    // join all the cards
    return cards.join('');
};

// generates the page on export
module.exports = team => {
    // template for the cards to go into
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link rel="stylesheet" href="../dist/style.css" />
    <title>Team Information</title>
</head>
<body>
    <header>
        <h1> My Team </h1>
    </header>

    <main> ${createTeam(team)} </main>

</body>
</html>
    `;
};