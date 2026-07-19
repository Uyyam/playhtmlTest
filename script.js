
//createUser();

const captures = {};


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

function createUser(id){
  const el = document.createElement("div");
  el.setAttribute("can-mirror", "")
el.id = id;
//
document.getElementById('sketch-holder').appendChild(el);
new p5((p) => newCapture(p, id));
//playhtml.setupPlayElement(el, { ignoreIfAlreadySetup: true });
}

function newCapture(p , id) {
  p.setup = function () {
  let canvas = p.createCanvas(100, 200);
const capture = p.createCapture(p.VIDEO, { flipped: true });

    captures[id] = capture; // store it, keyed by user id
  
  // Move the canvas so it’s inside our <div id="sketch-holder">.

    capture.parent(document.getElementById(id));
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
 
