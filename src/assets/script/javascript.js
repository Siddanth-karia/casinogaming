// sign in modal

function signinModalOpen(){
  document.getElementById('modal').style.display = 'block';
}
function signinModalClose(){
  document.getElementById('modal').style.display = 'none';
}


// register modal
function registerModalOpen(){
  document.getElementById('registerModal').style.display = 'block';
}
function registerModalClose(){
  document.getElementById('registerModal').style.display = 'none';
}

// forgot password modal

function forgotModalOpen(){
  signinModalClose()
  document.getElementById('forgotModal').style.display = 'block';
}
function forgotModalClose(){
  document.getElementById('forgotModal').style.display = 'none';
}

// countinue modal
function countinueModalOpen(){
  signinModalClose()
  document.getElementById('countinueModal').style.display = 'block';
}
function countinueModalClose(){
  document.getElementById('countinueModal').style.display = 'none';
}


//create a game modal
function createGameModal(){
  document.getElementById('createGameModal').style.display = 'block';
  document.getElementById("countLabel").innerHTML = 10;
  let count = 10;
  const func = setInterval(stoptime, 1500); 
  function stoptime() {
    if(count != 0){
      count = count-1;
      stop = document.getElementById("countLabel");
      stop.innerHTML = count;
    }else{
      clearInterval(func);
      document.getElementById('createGameModal').style.display = 'none';
    }
  }
}
function backGameModal(){
  document.getElementById('backGameModal').style.display = 'block';
}


// function createGameModalClose(){
//   document.getElementById('createGameModal').style.display = 'none';
// }





