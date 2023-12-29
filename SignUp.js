let Name = document.querySelector("#name");
let LastName = document.querySelector("#lastname");
let Email = document.querySelector("#email");
let Password = document.querySelector("#password")
let BTN = document.querySelector("#submitButton");

console.log(Name,LastName,Email,Password,BTN)
const userArray = getArrayFromFirebase("User");

displayAlert("გაფრთხილება", "სტატუსი შეიყვანე სწორად", "info");


BTN.addEventListener("click", () => {
    let name = Name.value;
    let lastname = LastName.value;
    let email = Email.value;
    let password = Password.value;
    let type = (document.querySelector("#Type")).value
    if(name== "" || lastname == "" || email == "" || Password== "" || type == "" )
    {
        return;
    }
    let alreadyUsedEmail = false;
    userArray.forEach((element) => {
      if (element.data.email === email) {
        alreadyUsedEmail = true;
        return;
      }
    });
    if (alreadyUsedEmail) {
        displayAlert("შეცდომა", "უკვე არსებობს ესეთი იმეილი", "info");
        return;
      }
      addElementInFirebase("User/", {
        name: name,
        lastname: lastname,
        email: email,
        password: password,
        type: type,     
       });
      displayAlert("შესრულდა", "წარმატებით დაემატა მომხარებელი", "success");
      setTimeout(() => {
        location.href= "index.html"
      },1500 )
} )