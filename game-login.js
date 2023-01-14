function p2login(){
    user1= document.getElementById("user1").value 
    localStorage.setItem("user1", user1)
    window.location = "game-login2.html"
}
window.addEventListener("keydown", mykeydown)
function mykeydown(e){
keyPressed = e.keyCode
if(keyPressed == '13')
		{
			p2login();
			console.log("Player 2 login");
		}
	}