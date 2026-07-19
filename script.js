
//createUser();

let capture;


// const presences = playhtml.presence.getPresences();
// for (const [id, p] of presences) {
//   p.isMe;            // boolean
//   p.playerIdentity;  // name, colors, publicKey
//   p.cursor;          // { x, y, pointer } | null
// // createNewCap(p.playerIdentity);
// }
// console.log(presences);

// Subscribe to a specific channel — fires only when that channel changes
//const unsub = playhtml.presence.onPresenceChange("playerIdentity", createUser);

//when new user joins

function createUser(){
  const el = document.createElement("div");
  el.setAttribute("can-mirror", "")
el.id = playhtml.presence.getMyIdentity().publicKey;
//
document.getElementById('sketch-holder').appendChild(el);
new p5(newCapture);
//playhtml.setupPlayElement(el, { ignoreIfAlreadySetup: true });
}

function newCapture(p) {
  p.setup = function () {
  let canvas = p.createCanvas(100, 200);
capture = p.createCapture(p.VIDEO,{ flipped:true });
  
  // Move the canvas so it’s inside our <div id="sketch-holder">.

    capture.parent(document.getElementById(playhtml.presence.getMyIdentity().publicKey));
          canvas.parent('sketch-holder');
          canvas.hide();
  };
}



//createUser();
let capture;
let canvas;



document.addEventListener('mousemove', (event) => {
  // Use clientX and clientY for viewport coordinates
  document.getElementById(playhtml.presence.getMyIdentity().publicKey).style.left = `${event.clientX}px`;
  document.getElementById(playhtml.presence.getMyIdentity().publicKey).style.top = `${event.clientY}px`;

  if(document.getElementById('music-player').muted){
    document.getElementById('music-player').muted = false;
  }
});


const presences = playhtml.presence.getPresences();
for (const [id, p] of presences) {
  p.isMe;            // boolean
  p.playerIdentity;  // name, colors, publicKey
  p.cursor;          // { x, y, pointer } | null
// createNewCap(p.playerIdentity);
}
console.log(presences);

// Subscribe to a specific channel — fires only when that channel changes
const unsub = playhtml.presence.onPresenceChange("playerIdentity", createUser);

//when new user joins

function createUser(){
  const el = document.createElement("div");
  el.setAttribute("can-mirror", "")
el.id = playhtml.presence.getMyIdentity().publicKey;
//
document.getElementById('sketch-holder').appendChild(el);
new p5(newCapture);
playhtml.setupPlayElement(el, { ignoreIfAlreadySetup: true });
}

function newCapture(p) {
  p.setup = function () {
  canvas = p.createCanvas(100, 200);
capture = p.createCapture(p.VIDEO,{ flipped:true });
  // Move the canvas so it’s inside our <div id="sketch-holder">.

    capture.parent(document.getElementById(playhtml.presence.getMyIdentity().publicKey));
          canvas.parent('sketch-holder');
          canvas.hide();
  };
}



// const el = document.getElementById("sketch-host");
//   el.myDefaultAwareness = "#2563eb";
//   el.updateElementAwareness = ({ element, awareness }) => {
//     element.replaceChildren(
//       ...awareness.map((publicKey) => {
//  const el = document.createElement("div");
// el.id = "note-42";
// element = document.getElementById(el.id);
// document.getElementById('sketch-holder').appendChild(el);
// createElem(el.id);
//         return dot;
//       }),
//     );
//   }
 
