const jest = require('jest');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const fs = require("fs");

const employee = [];


function addNew() {
    const newEmployeeQs = inquirer
      .prompt([
        {
            name: "role",
            type: "list",
            message: "Please select the new employee's role",
            choices: ["Engineer", "Intern", "Manager"],
        },
        {
            name: "name",
            message: `What is the employee's name?`,
        },
        {
          message: `What is the employee's id number?`,
          name: "id",
        },
        {
            name: "email",
            message: `What is the employee's email?`,
        }
      ])

      

    .then(function ({ name, role, id, email }) {
        let roleQuestion = "";
        let roleInfo = "";
        if (role === "Intern") {
            roleQuestion = "Which school did the intern go to?";
            roleInfo = "school";
        } else if (role === "Engineer") {
            roleQuestion = "What is the engineer's GitHub username?";
            roleInfo = "github";
        } else {
          roleQuestion = "What is the manager's office number?";
          roleInfo = "officeNumber";
        }
    inquirer
          .prompt([
            {
              name: roleInfo,
              message: roleQuestion, 
            },
            {
              name: "addAnother",
              type: "confirm",
              message: "Would you like to add another employee?",
            },
        ])
        .then(function (response) {
            employee.push({ role, name, id, email, ...response });
            if (response.addAnother) {
              addNew();
            } else {
              let roleQuestion = "";
              for (var i = 0; i < employee.length; i++) {
                console.log(employee[i]);
                
        let employeeContainer = `
        <div class="container">
          <div class="col">
              <div class="row" style="padding-top: 40px;">
                  <div class="card #fff3e0 orange lighten-5">
                      <div class="card-content black-text">
                          <span class="card-title"><strong><h3>${employee[i].name}</h3></strong></span>
                              <ul class="title" style="font-size: large;">
                                  <li><strong>Name:</strong> ${employee[i].role}</li>
                                  <li><strong>Email:</strong> ${employee[i].id}</li>
                                  <li><strong>ID:</strong> ${employee[i].email}</li>
                                 <li> 
                                 ${employee[i].role === "Intern" ? `School: ${employee[i].school}` : ""}
                                 ${employee[i].role === "Engineer" ? `Github: ${employee[i].github}` : ""}
                                 ${employee[i].role === "Manager" ? `Office Number: ${employee[i].officeNumber}` : ""} </li>
                                </ul>
                      </div>
                  </div>
              </div>
          </div>
      </div>`;
    fs.appendFile("./team-profiles.html", employeeContainer, function (err) {
        if (err) {
            return reject(err);}
                });
              }
            }
        });
    });
  }
  function teamBuild() {
    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    
        <title>Team Profile</title>
    </head>  
    <body style="background-color: #ffcc80;">
        <nav>
            <div class="nav-wrapper ##ffa726 orange lighten-1" style="padding:150 px;">
                <a href="#" class="brand-logo center">Team Profile!!!</a>
            </div>
        </nav>`;
    fs.writeFile("./team-profiles.html", html, function (err) {
      if (err) {
        console.log(err);
      }
    });
  }
  

  addNew();
  teamBuild();
 




    
