// Store Background Classes
let bg = [
  'bg0',
  'bg1', 
  'bg2',
  'bg3',
  'bg4',
  'bg5',
  'bg6',
  'bg7',
  'bg8'
]

var numRand;

numRand = Math.floor(Math.random() * bg.length );

let siteBg = document.querySelector('body');

siteBg.className = bg[numRand]




