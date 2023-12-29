const firebaseConfig = {
    apiKey: "AIzaSyBPmD3nguzWc4apflQCC5KcfOOhuDSt2f8",
    authDomain: "mdf-project-a49b6.firebaseapp.com",
    databaseURL: "https://mdf-project-a49b6-default-rtdb.firebaseio.com",
    projectId: "mdf-project-a49b6",
    storageBucket: "mdf-project-a49b6.appspot.com",
    messagingSenderId: "76323430012",
    appId: "1:76323430012:web:aebed45635d04de25273f9",
    measurementId: "G-0RR3V5E1D4"
  };
    
  firebase.initializeApp(firebaseConfig);
  
  function randomID() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
      let r = (Math.random() * 16) | 0;
      let v = c == "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }
  
  function generateFirebaseItem(ID, value) {
    return {
      userid: ID,
      data: value,
    };
  }
  
  function addElementInFirebase(REF, data) {
    firebase
      .database()
      .ref(REF + randomID())
      .set(data);
  }
  
  function getArrayFromFirebase(REF) {
    let tempArray = [];
    firebase
      .database()
      .ref(REF)
      .on("value", (response) => {
        response.forEach((element) => {
          tempArray.push(generateFirebaseItem(element.key, element.val()));
        });
      });
    return tempArray;
  }
  
  function removeRefFromFirebase(REF) {
    firebase.database().ref(`${REF}`).remove();
  }
  
  function removeElementFromFirebase(REF, id) {
    firebase.database().ref(`${REF}/${id}`).remove();
  }
  
  function getElementFromFirebaseByID(REF, id) {
    const tempArray = getArrayFromFirebase(REF);
    let temp = {};
    tempArray.forEach((element) => {
      if (element.userid === id) {
        temp = element;
      }
    });
    console.log(temp);
    return temp;
  }
  
  function changeDataOnFirebaseByID(REF, ID, data) {
    firebase
      .database()
      .ref(REF + "/" + ID)
      .set(data);
  }