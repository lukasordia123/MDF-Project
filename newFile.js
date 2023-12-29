BTN.addEventListener("click", () => {
  let ProfileNameValue = ProfileName.value;
  let ProfileTitleValue = ProfileTitle.value;
  let MainTextValue = MainText.value;
  let ProfileReactionValue = ProfileReaction.value;
  let ProfileCommentValue = ProfilleComment.value;
  if (
    ProfileNameValue == "" ||
    ProfileTitleValue == "" ||
    MainTextValue == "" ||
    ProfileReactionValue == "" ||
    ProfileCommentValue == ""
  ) {
    return;
  }
  let profileimgsrc = "";
  let mainimgsrc = "";
  try {
    const reader = new FileReader();
    const reader1 = new FileReader();
    reader1.readAsDataURL(MainImg.files[0]);
    reader.readAsDataURL(ProfileIMg.files[0]);
    reader.onload || reader1.onload;
    () => {
      profileimgsrc = reader.result;
    };
  } catch {}
});
