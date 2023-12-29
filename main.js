function displayAlert(title, text, icon) {
    Swal.fire({
      icon: icon,
      text: text,
      title: title,
    });
  }

  // let one = document.querySelector("#one")
  // let change = document.querySelector("#change")
UserArray = getArrayFromFirebase("User");

// if (localStorage.getItem("userid")) {
//   let url = location.href.split("/")[3];
//   if (url === "login.html" || url === "register.html") {
//     location.href = "index.html";
//   }
// }
// if (!localStorage.getItem("userid")) {
//   if (location.href.split("/")[3] === "AddPosts.html"  ) {
//     location.href = "index.html";
//   }
// }

// setTimeout(() => {
//   UserArray.forEach((element) => {
//     if(element.data.type === "მოსწავლე"){
//       one.style.display = "none";
//     }else(
//       one.style.display = "flex"
//     )
//   } )
// },1500 )