function preload () { defaultFont = loadFont("assets/fonts/default.ttf"); }

function setup () {

  // createCanvas(WIDTH, HEIGHT);
  document.getElementById("defaultCanvas0").remove();

  createInputAndButton("edit input button", "message text");
  createCornerButton("edit corner button");

  create();

  Matter.Runner.run(engine);
  Render.run(renderer);

}

function create () {

  // edit ass needed!

  // creating bodies
  var a = Bodies.rectangle(400, 200, 80, 80);
  var b = Bodies.rectangle(450, 50, 80, 80);
  var c = Bodies.rectangle(WIDTH / 2, HEIGHT - 10, WIDTH, 20, { isStatic: true });

  // adding bodies to the world
  Composite.add(engine.world, [a, b, c]);

}

// function draw () {}