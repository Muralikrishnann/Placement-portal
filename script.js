
    var firebaseConfig = {
    apiKey: "AIzaSyBflWhnhh-PK-FmYb0G4diqyjV4TFxCIWg",
    authDomain: "placement-portal-328be.firebaseapp.com",
    databaseURL: "https://placement-portal-328be.firebaseio.com",
    projectId: "placement-portal-328be",
    storageBucket: "placement-portal-328be.appspot.com",
    messagingSenderId: "543914254372",
    appId: "1:543914254372:web:c4858d061cb5012a5278b1",
    measurementId: "G-HTZ7CCB22E"
  };
  
  


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
function googleSignin() {
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(function(result) {
      window.location.replace("viewpage.html");
    })
    .catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(error.code);
      console.log(error.message);
    });
}

function googleSignin1() {
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(function(result) {
      window.location.replace("Adddetails.html");
    })
    .catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(error.code);
      console.log(error.message);
    });
}

var database = firebase.database();
function addinfo() {
  var name = document.getElementById("name").value;
  name = name.toUpperCase();
  var e = document.getElementById("choice");
  var package = e.options[e.selectedIndex].value;
  var salary=document.getElementById("package").value;
  var date = document.getElementById("date").value;
  var email = document.getElementById("email").value;
  var designation = document.getElementById("designation").value;
  var locality = document.getElementById("locality").value;
  var id = document.getElementById("id").value;
  if (
    name != "" &&
    designation != "" &&
    date != "" &&
    email != "" &&
    locality != "" &&
    package != ""  &&
    salary !=""
  ) {
    var ref = database.ref("Cgpa/" + package + "/" + id + "/").set({
      CompanyName: name,
      Designation:designation,
      Date:date,
      Email: email,
      Locality: locality,
      Package:package,
      Salary:salary
    });
    alert("Added");
    window.location.replace("Adddetails.html");
  }
}
function search() {
  alert("Are you sure ? ");
  var e = document.getElementById("choice");
  var cat = e.options[e.selectedIndex].value;
  console.log(cat);
  database.ref("Cgpa/" + cat).on("value", printdata, errdata);
  function printdata(snapshort) {
    var listitems = snapshort.val();
    var keys = Object.keys(listitems);
    document.getElementById("tri").style.display = "inline";

    for (var i = 0; i < keys.length; i++) {
      var index = keys[i];
      var name = listitems[index].CompanyName;
      var designation = listitems[index].Designation;
      var date = listitems[index].Date;
      var email = listitems[index].Email;
      var location = listitems[index].Locality;
      var salary = listitems[index].Salary;
      console.log(salary);
      var node = document.createElement("td");
      var people = document.createTextNode(i + 1 + "." + " " + name);
      node.appendChild(people);
      document.getElementById("results").appendChild(node);

      var node = document.createElement("td");
      var people = document.createTextNode(designation);
      node.appendChild(people);
      document.getElementById("results").appendChild(node);

      var node = document.createElement("td");
      var people = document.createTextNode(salary);
      node.appendChild(people);
      document.getElementById("results").appendChild(node);

      var node = document.createElement("td");
      var people = document.createTextNode(date);
      node.appendChild(people);
      document.getElementById("results").appendChild(node);

      var node = document.createElement("td");
      var people = document.createTextNode(email);
      node.appendChild(people);
      document.getElementById("results").appendChild(node);

      var node = document.createElement("td");
      var people = document.createTextNode(location);
      node.appendChild(people);
      document.getElementById("results").appendChild(node);

  

      var node = document.createElement("br");
      var people = document.createTextNode("");
      node.appendChild(people);
      document.getElementById("results").appendChild(node);
    }
  }
}
function errdata() {
  console.log("error");
}
function find() {
  window.location.replace("viewpage.html");
}
function add()
{
  window.location.replace("viewpage.html");
}
function okay()
{
  window.location.replace("viewpage.html");
}


//<th>Name</th>
//<th>Designation</th>
//<th>Package  </th>
//<th>Date     </th>
//<th>Email    </th>
//<th>Location</th>