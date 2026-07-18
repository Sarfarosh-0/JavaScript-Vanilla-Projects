const buttons = document.querySelectorAll("button");
const click = document.getElementById("clickSound");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    click.currentTime = 0; 
    console.log('Played Audio');
    click.play().catch((error) => {
      console.log("Playback prevented:", error);
    });
  });
});
