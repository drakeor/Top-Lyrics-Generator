// We use a script to compile this array
var words = [
  ["oh", 256],
  ["love", 502],
  ["got", 718],
  ["yeah", 905],
  ["baby", 1068],
  ["down", 1203],
  ["gonna", 1329],
  ["na", 1454],
  ["wanna", 1568],
  ["girl", 1682],
  ["feel", 1794],
  ["here", 1901],
  ["nigga", 2003],
  ["never", 2095],
  ["cause", 2184],
  ["let", 2264],
  ["ain't", 2343],
  ["night", 2419],
  ["hey", 2495],
  ["long", 2567],
  ["alive", 2635],
  ["bitch", 2703],
  ["little", 2770],
  ["where", 2836],
  ["every", 2900],
  ["around", 2963],
  ["fuck", 3025],
  ["need", 3087],
  ["tell", 3148],
  ["put", 3209],
  ["try", 3269],
  ["gone", 3327],
  ["right", 3385],
  ["money", 3443],
  ["heart", 3501],
  ["gotta", 3558],
  ["life", 3613],
  ["shit", 3667],
  ["niggas", 3718],
  ["still", 3768],
  ["tonight", 3817],
  ["keep", 3865],
  ["hold", 3913],
  ["why", 3959],
  ["man", 4004],
  ["been", 4048],
  ["bitches", 4092],
  ["again", 4135],
  ["bad", 4178],
  ["stay", 4220],
  ["live", 4262],
  ["ever", 4304],
  ["red", 4345],
  ["more", 4386],
  ["freaks", 4427],
  ["better", 4467],
  ["too", 4507],
  ["gyal", 4547],
  ["'cause", 4587],
  ["off", 4626],
  ["find", 4665],
  ["world", 4704],
  ["ball", 4741],
  ["through", 4777],
  ["kill", 4813],
  ["turn", 4848],
  ["going", 4883],
  ["let's", 4918],
  ["next", 4953],
  ["started", 4988],
  ["stop", 5022],
  ["wait", 5056],
  ["boy", 5090],
  ["wop", 5123],
  ["head", 5156],
  ["without", 5189],
  ["beat", 5222],
  ["eyes", 5255],
  ["watch", 5287],
  ["mind", 5319],
  ["am", 5351],
  ["fall", 5383],
  ["joe", 5415],
  ["same", 5446],
  ["care", 5477],
  ["done", 5507],
  ["mine", 5537],
  ["fire", 5567],
  ["bottom", 5597],
  ["looking", 5626],
  ["feeling", 5655],
  ["ya", 5684],
  ["had", 5713],
  ["home", 5742],
  ["nothing", 5771],
  ["show", 5800],
  ["pull", 5828],
  ["high", 5856],
  ["did", 5883],
  ["power", 5910],
  ["different", 5937],
  ["said", 5964],
  ["gold", 5990],
  ["meetcha", 6016],
  ["song", 6042],
  ["call", 6068],
  ["should", 6094],
  ["feet", 6119],
  ["whole", 6144],
  ["end", 6169],
  ["another", 6194],
  ["much", 6219],
  ["trying", 6244],
  ["getcha", 6269],
  ["party", 6294],
  ["rock", 6319],
  ["whoa", 6343],
  ["light", 6367],
  ["ceiling", 6391],
  ["hope", 6415],
  ["close", 6439],
  ["week", 6463],
  ["pretty", 6486],
  ["wish", 6509],
  ["hit", 6532],
  ["drink", 6555],
  ["throw", 6577],
  ["hard", 6599],
  ["real", 6621],
  ["those", 6643],
  ["getting", 6665],
  ["c'mon", 6687],
  ["miss", 6708],
  ["believe", 6729],
  ["play", 6750],
  ["name", 6771],
  ["molly", 6792],
  ["away", 6812],
  ["made", 6832],
  ["alone", 6852],
  ["shine", 6872],
  ["bring", 6892],
  ["di", 6912],
  ["yo", 6932],
  ["'bout", 6952],
  ["things", 6972],
  ["hoes", 6992],
  ["style", 7012],
  ["momma", 7032],
  ["really", 7052],
  ["somebody's", 7071],
  ["does", 7090],
  ["club", 7109],
  ["myself", 7128],
  ["sweet", 7147],
  ["didn't", 7166],
  ["maybe", 7185],
  ["town", 7204],
  ["carry", 7223],
  ["gave", 7242],
  ["burn", 7261],
  ["vibe", 7280],
  ["broken", 7299],
  ["ass", 7318],
  ["change", 7337],
  ["shout", 7355],
  ["door", 7373],
  ["hands", 7391],
  ["leave", 7409],
  ["told", 7427],
  ["might", 7445],
  ["girls", 7463],
  ["ground", 7481],
  ["mean", 7499],
  ["friends", 7517],
  ["makes", 7535],
  ["moment", 7552],
  ["team", 7569],
  ["breath", 7586],
  ["lost", 7603],
  ["slow", 7620],
  ["fight", 7637],
  ["you've", 7654],
  ["lights", 7671],
  ["lady", 7688],
  ["pussy", 7705],
  ["comes", 7722],
  ["comin'", 7739],
  ["run", 7756],
  ["kind", 7773],
  ["both", 7790],
  ["crazy", 7806],
  ["were", 7822],
  ["highway", 7838],
  ["lose", 7854],
  ["neva", 7870],
  ["war", 7886],
  ["sure", 7902],
  ["old", 7918],
  ["young", 7934],
  ["before", 7950],
  ["gangnam", 7966],
  ["summer", 7982],
  ["always", 7998],
  ["came", 8014],
  ["affection", 8030],
  ["boys", 8046],
  ["kiss", 8062],
  ["side", 8078],
  ["house", 8093],
  ["rich", 8108],
  ["fly", 8123],
  ["ha", 8138],
  ["walk", 8153],
  ["bottle", 8168],
  ["scream", 8183],
  ["y'all", 8198],
  ["fast", 8213],
  ["anywhere", 8228],
  ["living", 8243],
  ["bit", 8258],
  ["hair", 8273],
  ["left", 8287],
  ["start", 8301],
  ["die", 8315],
  ["learn", 8329],
  ["dreams", 8343],
  ["wrong", 8357],
  ["ho", 8371],
  ["troublemaker", 8385],
  ["cold", 8399],
  ["damn", 8413],
  ["help", 8427],
  ["sound", 8441],
  ["own", 8455],
  ["wild", 8469],
  ["sexy", 8483],
  ["pop", 8497],
  ["yes", 8511],
  ["belong", 8525],
  ["something", 8539],
  ["body", 8553],
  ["'til", 8567],
  ["diffie", 8581],
  ["everything", 8595],
  ["'em", 8609],
  ["road", 8623],
  ["bigger", 8637],
  ["pick", 8650],
  ["hand", 8663]
]

// Easier for the text to speech system to store into this variable
var lastPhrase = "";

// Gets a random word from the array
// Not super efficient or scales well but it works
function getRandomWord(arrLen) {
  var maxWordSize = words[arrLen - 1][1];
  var randomNum = Math.floor(Math.random() * maxWordSize);
  console.info(randomNum)
  for (var i = 0; i < arrLen - 1; i++) {
    if (words[i][1] > randomNum) {
      return words[i][0];
    }
  }
  return words[arrLen - 1][0];
}

// Updates the lyrics text
function getLyrics(num, arrLength) {
  var lyricString = "";
  for (var i = 0; i < num; i++) {
    lyricString += getRandomWord(arrLength) + " ";
  }
  document.getElementById("lyrics").innerHTML = lyricString;
  lastPhrase = lyricString;
}