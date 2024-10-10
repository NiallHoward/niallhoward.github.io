$(document).ready(function(){

  const firebaseConfig = {
    apiKey: "AIzaSyDfWuHzifBxtZiDG_kZL_B9W8NI-velFtg",
    authDomain: "niallhoward-80986.firebaseapp.com",
    projectId: "niallhoward-80986",
  };
  
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();

  auth.createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    var user = userCredential.user;
    console.log("User created:", user);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });

// Sign-in
auth.signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    var user = userCredential.user;
    console.log("Logged in:", user);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });

  $(function() {
        //caches a jQuery object containing the header element
        var header = $(".buttonnavigation");
        $(window).scroll(function() {
            var scroll = $(window).scrollTop();

            if (scroll >= 500) {
                header.addClass("smaller");
            } else {
                header.removeClass("smaller");
            }
        });
    });

    $( '.allclickable' ).click( function() {
        var clickLinkClass = $( this ).find( 'a.clicklink' );

        if( clickLinkClass.length ) {

          if( clickLinkClass.attr( 'target' ) == '_blank' ) {
            var link = clickLinkClass.attr( 'href' );
            window.open( link, '_blank');
          }
          else {
            window.location = clickLinkClass.attr( 'href' );
          }
        }
        return false;
    });

});