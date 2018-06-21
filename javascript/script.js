var task = "";
function high(){
  task = document.getElementById("ip").value;
  document.getElementById("op").innerHTML += '<div class="alert alert-danger" role="alert"><input type="checkbox" name="" value=""><label>'+task+'</label></div>';
}

function moderate(){
  task = document.getElementById("ip").value;
  document.getElementById("op").innerHTML += '<div class="alert alert-warning" role="alert"><input type="checkbox" name="" value=""><label>'+task+'</label></div>';
}

function low(){
  task = document.getElementById("ip").value;
  document.getElementById("op").innerHTML += '<div class="alert alert-success" role="alert"><input type="checkbox" name="" value=""><label>'+task+'</label></div>';
}
