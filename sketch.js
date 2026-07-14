let capture;
let canvas;


function setup() {
  canvas = createCanvas(100, 100);
capture = createCapture(VIDEO,{ flipped:true });
       capture.size(100,100);
  // Move the canvas so it’s inside our <div id="sketch-holder">.

    capture.parent(document.getElementById(playhtml.presence.getMyIdentity().publicKey));
          canvas.parent('sketch-holder');
          canvas.hide();

//  background(255, 0, 200);
}

function createNewCap(id){
    let newcap = createCapture(VIDEO, {flipper:true});
  newcap.parent(document.getElementById(id));
}
// for each user in presence
// create a new capture and make it the child of the element with the users id


function draw() {
  background(220);
}