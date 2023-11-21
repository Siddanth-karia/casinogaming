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
  registerModalClose()
  document.getElementById('countinueModal').style.display = 'block';
}
function countinueModalClose(){
  document.getElementById('countinueModal').style.display = 'none';
}
function walletModalOpen(){
  document.getElementById('walletmodal').style.display = 'block';
  document.getElementById('spanBGDepositColor').style.backgroundColor = "#2f4454";
}
function walletModalClose(){
  document.getElementById('walletmodal').style.display = 'none';
}
function depositModalOpen(){
  withdrawModalClose()
  document.getElementById('depositSection').style.display = "block";
  document.getElementById('spanBGDepositColor').style.backgroundColor = "#2f4454";
}
function depositModalClose(){
  document.getElementById('depositSection').style.display = "none";
  document.getElementById('spanBGDepositColor').style.backgroundColor = "#1A2C38";
}
function withdrawModalOpen(){
  depositModalClose();
  document.getElementById('withdrawSection').style.display = "block";
  document.getElementById('spanBGWithdrawColor').style.backgroundColor = "#2f4454";
}
function withdrawModalClose(){
  document.getElementById('withdrawSection').style.display = "none";
  document.getElementById('spanBGWithdrawColor').style.backgroundColor = "#1A2C38";
}
// crypto
function cryptoModalOpen(){
  withdrawModalClose();
  document.getElementById('cryptoSection').style.display = "block";
  document.getElementById('spanBGcryptoColor').style.backgroundColor = "#2f4454";
}
function cryptoModalClose(){
  document.getElementById('cryptoSection').style.display = "none";
  document.getElementById('spanBGcryptoColor').style.backgroundColor = "#1A2C38";
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