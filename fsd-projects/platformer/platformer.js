$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //  toggleGrid();
    // i took it off because it makes my game glitch

// 
    // TODO 2 - Create Platforms

createPlatform(50, 430, 250, 50, "red");
createPlatform(550, 0, 50, 400);
createPlatform(400, 500, 250, 50, "red");
createPlatform(900, 0, 50, 400);
createPlatform(800, 500, 250, 50, "red");
    createPlatform(1000, 450, 50, 50, "hotpink"); // bright green for a finished platform
createPlatform(1050, 350, 250, 50, "red");
createPlatform(900, 230, 250, 30, "red")
createPlatform(1300, 150, 50, 50, "red");
createPlatform(400, 350, 50, 50, "red")
createPlatform(250, 100, 50, 50, "pink")
createPlatform(130, 230, 200, 50, "red")

createPlatform(750, 400, 200, 20, "blue", 600, 700, 1)
    // TODO 3 - Create Collectables

  createCollectable("max",700, 350);
  createCollectable("steve",250, 50);
createCollectable("kennedi",1300, 110);
    

    // TODO 4 - Create Cannons

createCannon("right",800 , 1000);
createCannon("right", 300, 2000);
    createCannon("top", 800, 2000);
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }


  registerSetup(setup);
});
