function start(){
    user2= document.getElementById("user2").value 
    localStorage.setItem("user2", user2)
    window.location = "game-page.html"
}
window.addEventListener("keydown", mykeydown)
function mykeydown(e){
keyPressed = e.keyCode
if(keyPressed == '13')
		{
			start();
			console.log("Player 2 login");
		}
	}