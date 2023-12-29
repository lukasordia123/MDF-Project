 let ProfileName = document.querySelector(".ProfileName");
 let ProfileIMg = document.querySelector(".ProfileImg");
 let ProfileTitle = document.querySelector(".ProfileText");
 let MainImg = document.querySelector(".MainImg");
 let MainText = document.querySelector(".TextArea");
 let ProfileReaction = document.querySelector(".ProfileReaction");
 let ProfilleComment = document.querySelector(".ProfileComment")
 let BTN = document.querySelector(".Btn");

BTN.addEventListener("click", () => {
    let ProfileNameValue = ProfileName.value;
    let ProfileTitleValue = ProfileTitle.value;
    let MainTextValue = MainText.value;
    let ProfileReactionValue = ProfileReaction.value;
    let ProfileCommentValue = ProfilleComment.value;
    if(
        ProfileNameValue == "" ||
        ProfileTitleValue == "" ||
        MainTextValue == "" ||
        ProfileReactionValue == "" ||
        ProfileCommentValue == "" 
    ){
        return;
    }
    let profileimgsrc = ""
    let mainimgsrc = ""
    try{
        const reader = new FileReader();
        const reader1 = new FileReader();
        reader1.readAsDataURL(MainImg.files[0]);
        reader.readAsDataURL(ProfileIMg.files[0]);
        reader.onload; reader1.onload = () => {
            profileimgsrc = reader.result;
            mainimgsrc = reader1.result;
            addElementInFirebase("Post/", {
                profilename : ProfileNameValue,
                profileimg : profileimgsrc,
                profiletitle : ProfileTitleValue,
                mainimg :  mainimgsrc,
                maintext : MainTextValue,
                procilereaction: ProfileReactionValue,
                profilecomment : ProfileCommentValue,
                uploadTime: new Date().toLocaleString(),
            } )
        }
    }catch(err){
        profileimgsrc = "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-6.png";
        mainimgsrc = "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-6.png";
        addElementInFirebase("Post/", {
            profilename : ProfileNameValue,
            profileimg : profileimgsrc,
            profiletitle : ProfileTitleValue,
            mainimg :  mainimgsrc,
            maintext : MainTextValue,
            procilereaction: ProfileReactionValue,
            profilecomment : ProfileCommentValue,
            uploadTime: new Date().toLocaleString(),
        } )
    }
    displayAlert("წარმატებული ოპერაცია", "პოსტი წარმატებით დაემატა", "success");
    ProfileName.value = "";
    ProfileTitle.value = "";
    setTimeout(() => {
      location.href = "index.html";
    }, 1500);
} )