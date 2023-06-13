let remove = document.getElementById("initial")
function removeInitial() {
  remove.remove()
} 

let username = prompt("Enter your full NAME to get access to the source code of lectures🙂")
setTimeout(()=>{
  const ele1=document.getElementById("blink");
  ele1.remove();
},6000)

var intervalID = window.setInterval(updateScreen, 200);
var console=document.getElementById("console");

var txt = [
  "FORCE: XX0022. ENCYPT://000.222.2345",
  "TRYPASS: ********* AUTH CODE: ALPHA GAMMA: 1___ PRIORITY 1",
  "RETRY: REINDEER FLOTILLA",
  "Z:> /FALKEN/USERNAME/TICTACTOE/ EXECUTE -PLAYERS 0",
  "================================================",
  "Priority 1 // local / scanning...",
  "scanning ports...",
  "IP FOUND (23.45.23.12.00000000)",
  "LOCATION FOUND (E.S.T:13.66.23.12.00110000)",
  "DEVICE FOUND (13.66.23.12.00110044)",
  "...",
  "...",
  "BRUTE.EXE -r -z",
  "...locating vulnerabilities...",
  "...vulnerabilities found...",
  "MCP/> DEPLOY CLU",
  "GETTING ALL DATA ZIP,,,....***************",
  "SCAN: __ Password....@rgijfg**hbghfdal",
  "SCAN: __ IP Address....",
  "SCAN: __ SYSTEM SECURITY,...",
  "SCAN: __ IP:0012.0000.0553.0030",
  "SCAN: __ CID:0100.0000.0554.0080",
  "SCAN: __ PORT:0020.0000.0553.0080",
]

var docfrag=document.createDocumentFragment();
function updateScreen(){
  //shuffle the "txt" array
  txt.push(txt.shift());
  //rebuild doc fragment
  txt.forEach(function(e){
    var p=document.createElement("p");
    p.textContent=e;
    docfrag.appendChild(p);
  });
  for(let i=0;i<txt.length;i++){
    console.appendChild(docfrag);
  }
  setTimeout(()=>{
    for(let i=0;i<txt.length;i++){
      console.removeChild(console.firstChild);
    }
  },2000);
}
setTimeout(()=>{
  const ele1=document.getElementById("blink");
  ele1.remove();
},6000)
setTimeout(() => {
  console.remove();
}, 6000);

async function Hackerman() {
  let p1 = new Promise(() => {
    setTimeout(() => {
      document.getElementById("hackerman").innerHTML = "Hacking!!!";
    }, 1000)

    setTimeout(() => {
      let msg1 = document.getElementById("msg1").innerHTML = ">>> Initializing Network [DATABASE] Injection ....";
      console.log(msg1)
    }, 2500)

    setTimeout(() => {
      let msg2 = document.getElementById("msg2").innerHTML = ">>> Connecting To IP ADDRESS:147.1546.4555.5555";
      console.log(msg2)
    }, 3000)
  })

  let p2 = new Promise(() => {
    setTimeout(() => {
      let msg3 = document.getElementById("msg3").innerHTML = ">>> SYSTEM ***username*** @.GET(INFO)";
      console.log(msg3)
    }, 4000)

    setTimeout(() => {
      let msg4 = document.getElementById("msg4").innerHTML = ">>> ****VULUNERABILITES FOUND****...";
      console.log(msg4)
    }, 4500)
  })

  let p3 = new Promise(() => {
    setTimeout(() => {
      let msg5 = document.getElementById("msg5").innerHTML = ">>> Hello " + username + "!";
      console.log(msg5)
    }, 4700)
  })

  let p4 = new Promise(() => {
    setTimeout(() => {
      let msg6 = document.getElementById("msg6").innerHTML = ">>> TRYING TO COMPUTE COMBINATIONS AMONG 4.5 Trillion PASSWOROD*#*#*#*#...";
      console.log(msg6)
    }, 5000)

    setTimeout(() => {
      let msg7 = document.getElementById("msg7").innerHTML = ">>> Password found!!";
      console.log(msg7)
    }, 6000)
  })

}

const hacking = async () => {
  setTimeout(() => {
    let msg8 = document.getElementById("msg8").innerHTML = ">>> Connecting....";
    console.log(msg8)
  }, 7000)

  // setTimeout(() => {
  //   let msg9 = document.getElementById("msg9").innerHTML = ">>> .....";
  //   console.log(msg9)
  // }, 8000)

  setTimeout(() => {
    let msg10 = document.getElementById("msg10").innerHTML = ">>> Connected!";
    console.log(msg10)
  }, 9000)

  setTimeout(() => {
    let msg11 = document.getElementById("msg11").innerHTML = ">>> Sorry" +" <b>\"<b>" + username + "<b>\"<b>, "+ "your system is hacked ";
    console.log(msg11)
  }, 10000)

  setTimeout(() => {
    let msg12 = document.getElementById("msg12").innerHTML = ">>> 👁 YOU ARE UNDER-SURVILLIENCE OF THE POONAM_KUMARI HACKER 👁!";
    console.log(msg12)
  }, 11100)

  setTimeout(() => {
    let msg13 = document.getElementById("msg13").innerHTML = ">>> Now try to login! If you can. ";
    console.log(msg13)
  }, 12000)

  // setTimeout(() => {
  //   let msg14 = document.getElementById("msg14").innerHTML = ">>> Now try to login! If you can 🥺";
  //   console.log(msg14)
  // }, 12000)
}

const end = async () => {
  setTimeout(() => {
    let msg15 = document.getElementById("msg15").innerHTML = "Got scared 😜<br>Don't be; it was a prank 🤣";
    console.log(msg15)
  }, 15000)
}

const hacked = async () => {
  await Hackerman()
  await hacking()
  await end()

}

if (username === "") {
  // user pressed OK, but the input field was empty
  alert("Please enter your username. You hit OK without entering username. Please reload the page to continue.")
} else if (username) {
  // user typed something and hit OK
  hacked()
} else {
  // user hit cancel
  alert("Sorry, you don't need the service. Reload the page for accessing.")
}
