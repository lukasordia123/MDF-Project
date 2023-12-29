let Email = document.querySelector("#email");
let Password = document.querySelector("#password");
let BTN = document.querySelector("#submitButton");

const userArray = getArrayFromFirebase("User");
submitButton.addEventListener("click", () => {
    let email = Email.value;
    let password = Password.value;
    let currentUser = {};
    let successAuth = false;
    userArray.forEach((element) => {
      if (element.data.email === email && element.data.password === password) {
        successAuth = true;
        currentUser = element;
        return;
      }
    });
    if (!successAuth) {
      displayAlert("შეცდომა", "არ არსებობს მომხარებელი", "info");
      return;
    }
    displayAlert("შესრულდა", "წარმატებით დაემატა გაიარეთ ავტორიზაცია", "success");
    localStorage.setItem("userid", currentUser.userid);
    setTimeout(() => {
      location.href = "index.html";
    }, 1000);
  });