let card = document.querySelector(".card");
let CardArray = getArrayFromFirebase("Post");


  setTimeout(() => {
    CardArray.forEach((element) => {
        card.innerHTML += `
        <div class="f-card">
        <div class="header">
          <div class="options"><i class="fa fa-chevron-down"></i></div>
          <img class="co-logo" src="${element.data.profileimg}" />
          <div class="co-name"><a href="#">${element.data.profilename} </a></div>
          <div class="time"><a href="#"></a>${element.data.uploadTime} <i class="fa fa-globe"></i></div>
        </div>
        <div class="content">
          <p> ${element.data.profiletitle} <a href="http://placehold.it/300"></a></p>
        </div>
      
        <div class="reference">
          <img class="reference-thumb" src="${element.data.mainimg} " />
          <div class="reference-content">
            <div class="reference-title">${element.data.maintext}</div>
          </div>
        </div>
        <div class="social">
          <div class="social-content">
              <div class="Left">
                <span><i class="fa-solid fa-heart"></i> <i class="fa fa-thumbs-up"></i></i>${element.data.procilereaction} </span>
              </div>
            <div class="Right">
                ${element.data.profilecomment} Comments
            </div>
          </div>
          <div class="social-buttons">
            <span><i class="fa fa-thumbs-up"></i></i> Like</span>
            <span><i class="fa fa-comment"></i>Comment</span>
            <span><i class="fa fa-share"></i>Share</span></div>
        </div>
      </div>
        `
    } )
  },3000 )
//   let array = localStorage.getItem("userid")
//     let one = document.querySelector("#one")
//     let two = document.querySelector("#two")

// if (!localStorage.getItem("userid")) {
//     if (location.href === "AddPosts.html") {
//       location.href = "index.html";
//     }
//   }

//   two.addEventListener("click", () => {
//     localStorage.clear();
//     location.reload();
//   });