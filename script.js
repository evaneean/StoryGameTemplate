
// --------------------------------------------------
// SCENES
// Read through the comments below to see what this section does
//
// TO CUSTOMIZE THIS SECTION
// 1) add fields for each scene, as relevant, to match your mockup
// 2) customize the scenes to fit your story
// 3) add any new fields to the function below
// --------------------------------------------------

// First, we create a variable for the current scene being displayed
let currentScene = "classroom";

// Then, we create an object that stores the data for each scene,
const scenes = {
  // See "backyard" for the first example
  classroom: {
    title: "Location: Classroom",
    character: "You",
    text: "Text: Currently, you sit in your classroom. Where do you want to go?",
    // you can choose how many choices to include
    // each choice can have text, an action, and/or nextScene
    choices: [
      {
        text: "Go to the Janitor's room",
        nextScene: "janitor"
      },
      {
        text: "Go to the Nurse's room",
        nextScene: "nurse"
      },
    ]
  },

  janitor: {
    title: "Janitor's Room",
    character: "Janitor",
    text: "I think this manhole leads outside of the school. I can't open it, though. There may be a key around here somewhere, but not in here.",
    choices: [
      {
        text: "Try to open the manhole",
        action: openManhole,
      },
         {
        text: "Return to the classroom",
        nextScene: "classroom"
      }
    ]
  },

  nurse: {
    title: "Nurse's Room",
    character: "Steven",
    text:"My name is Steven. I was brought here to assist you in your fight against the cookie demons. Please take these items. Hopefully, they will help you on your journey. I will also donate to you the Cookie Snacking Program. Please use it to fight against these cookie demons.",
    choices: [
      {
         action: function () {
          updateBatter(100);
        },
        text: "Janitor's Room",
        nextScene: "janitor"
      },
      {
        text: "Pick up the items (non negotiable)",
        action: function () {
          pickUpItem("manhole key");
        },
      },
      {
        text: "Refresh Batter Points (optional)",
        action: function () {
          updateBatter(100);
        },
      }
    ]
  },

  fight1: {
   title: "B1: Underground Passage",
   text: "You walk through the tunnel underground. Everything is dark, and something like water starts to rise underfoot the farther you go. ??? This isn’t water… It’s milk! A cookie demon is attacking you! What will you do?",
   choices: [
     {
      text: "Fight the cookie demon",
      action: function () {
        updateBatter(-20);
      },
      nextScene: "victory1"
     },
     {
      text: "Run away",
      nextScene: "badend1"
     },
   ]
  },

  badend1: {
  title: "You Lose!",
  text: "You keep running from the approaching cookie demon behind you. However, the milk keeps rising… Eventually, you are totally submerged in the milk, as you start to drown. Hey… this tastes like almonds. Aren’t you allergic to almonds? Wow, you were a goner from the start.",
  },

  victory1: {
   title: "Fight!",
   text: "You stop running and turn around to face the cookie demon. It babbles out something that vaguely sounds like “almond”. Now that you notice it, this tunnel smells like almond.. Which you’re allergic to. You have to stop this fast! You punch in a button on your Cookie Snacking Program’s panel. Out from your computer springs a huge maw, like that of a whale! It swallows the cookie demon whole, as the milk starts to evaporate. You breathe a sigh of relief and start walking again.",
  choices: [
    {
      text: "Keep walking through the underground passage",
      nextScene: "underground"
    },
  ]
  },

   underground: {
    title: "B1: Underground Passage",
    text: "You walk through the underground tunnels beneath the school. At the end, you find and climb a ladder only to find yourself back in the building, on the other wing. This totally kills your mood.",
    choices: [
      {
        text: "Go to the French Classroom",
        nextScene: "french"
      },
      {
        text: "Go to the Gym",
        action: unlockGym,
      },
      {
        text: "Go to the Science Classroom",
        action: unlockScienceRoom,
      },
      {
        text: "Go to the Roof",
        action: unlockRoof,
      },
    ]
  },

  french: {
    title: "French Classroom",
    character: "You, Other Dude",
    text: "You enter the French classroom. You meet another student, whose name is Darren! He joins you and gives you some key he found off the ground.",
   choices: [
      {
        text: "Go to the Gym",
        action: unlockGym,
      },
      {
        text: "Go to the Science Classroom",
        action: unlockScienceRoom,
      },
      {
        text: "Go to the Roof",
        action: unlockRoof,
      },
      {
        text: "Pick up the items (non negotiable)",
         action: function () {
          pickUpItem("gym key");
         },
         action: function() {
          pickUpItem("Other Student (not an item)");
         },
        action: function () { 
          pickUpItem("science key");
      },
    },
   ]
  },

  science: {
    title: "Science Classroom",
    character: "You, Other Dude(?)",
    text: "You enter the Science classroom. The wheelchair guy shows up again. (Dialogue)  Good. It seems that you’ve already made use of your Cookie Snacking Program that I’ve given you. Let me refresh your batter points, and give you some items that will help you.",
    choices: [
      {
        text: "Go to the Gym",
        action: unlockGym,
      },
      {
        text: "Go to the French Classroom",
        nextScene: "french"
      },
      {
        text: "Go to the Roof",
        action: unlockRoof,
      },
      {
        text: "pick up the items (non negotiable)",
        action: function () {
          pickUpItem("gym key");
        },
      },
      {
        text:"pick up the cookie paper (optional)",
        action: function () {
          pickUpItem("cookie parchment paper");
        },
      },
       {
        text: "Refresh Batter Points (optional)",
        action: function () {
          updateBatter(100);
        },
      },
    ]

  },

  gym: {
    title: "Gym",
    character: "You, Other Dude",
    text: "There's like a huge cookie demon in the gym. The monster lunges. You summon the maw from your Cookie Snacking Program, and it snaps off one of the monster’s heads right as it gets close to you! The yeast monster reels back in terror. Almost immediately after, though, where it lost its head starts bubbling, as two more grow back from the same spot. ",
    choices: [
     {
    text: "Attack the Cookie Hydra",
    nextScene: "victory2",
    action: function () {
      updateBatter(-30);
    }
     },
     {
      text: "Try to escape the gym",
      nextScene: "badend2",
     },
    ]
  },

  badend2:{
  title: "You Lose!",
  text: "Stirred by fear, you both decide to split from the gym and go somewhere else. As you run to the door, three of the cookie monster’s dough heads wrap around the exit and lunge at you. Maybe running away wasn’t such a good idea."
  },

  victory2: {
    title: "You Win!",
    text: "Suddenly, a plan comes to mind. You tell Darren to run in and grab whatever’s stuck in the cookie monster after you draw out its attention. As you run to the side, the heads start to follow you, leaving a blind spot where the hilt is exposed. Darren runs in and grabs the hilt, pulling it out in one clean motion. Using your Cookie Summoning Program, you activate a large group of mandibles that bite off each of the dough monster’s heads. While it regenerates, Darren swings the Cookie Sword, cleaving the dough monster in half with one clean cut. You Win!",
    choices: [
     {
        text: "pick up the items (non negotiable)",
        action: function () {
          pickUpItem("locker key");
          pickUpItem("cookie sword");
        },
      },
      {
        text: "Open the locker",
        action: unlockLocker,
      },    
      {
        text: "Go to the Roof",
        action: unlockRoof,
      },
    ]
  },

  roof: {
    title: "Roof",
    character: "You, Other Dude",
    text: "You open the door to the roof and find a ton of cookie cultists circling a cookie demon. The cookie demon speaks telepathically to you and tells you to join it because you're super strong or something.",
    choices: [
      {
        text: "Join the cookie demon",
        nextScene: "badEnd",
      },
      { 
        text: "Fight the cookie demon",
        nextScene: "solution",
      },
    ]
  },

   badEnd: {
   title: "The bad end",
    text: "You join the cookie demon and become cookie overlords. The other student is eaten by the cookie demon or something. You suck.",
   },

   solution: {
    title: "The solution",
    text: "You and the other dude start beating on the cookie demon. After a long fight, it's defeated by the sword, and cookiespace fades from existence on this plane, freeing the school. You win!",
  },
};

// --------------------------------------------------
// UPDATE SCENES
// Read through the comments below to see what this section does
//
// TO CUSTOMIZE THIS SECTION
// 1) add a new const variable for each new field you added above
// Make sure to match the ids used in your mock up with the fields 
// 2) set the .textContent of each variable to the corresponding field in the scene object
// Use sceneTitle as a model
// --------------------------------------------------

// First, we create variables to hold the references to the HTML elements
// Technically you could just use document.getElementById('id-name') 
// in the function itself, but that would be very wordy 
// and make the code harder to read
const sceneTitle = document.getElementById("scene-title");
const sceneText = document.getElementById("scene-text");
const choicesContainer = document.getElementById("choices-container");
const characterName = document.getElementById("character-name");

// Then, we create a function to update the scene,
function updateScene(sceneName) {

  //This update the variable currentScene with the new scene passed as a parameter
  currentScene = sceneName;

  //This accesses the scene object based on the scene name
  const scene = scenes[sceneName];

  // Here, for each html element, you change the textContent to match
  // the appropriate text from the scene object
  sceneTitle.textContent = scene.title;
  sceneText.textContent = scene.text;
  characterName.textContent = scene.character;

  // Clear the old buttons before creating new ones
  choicesContainer.innerHTML = "";

  // Loop through each choice in the scene, connecting an action and nextScene if included
  scene.choices.forEach(function (choice) {
    const button = document.createElement("button");

    button.textContent = choice.text;

    button.addEventListener("click", function () {
      if (choice.action) {
        choice.action();
      }

      if (choice.nextScene) {
        updateScene(choice.nextScene);
      }
    });

    choicesContainer.appendChild(button);
  });
}

// This updates the screen with the current scene
updateScene(currentScene);


// --------------------------------------------------
// HEALTH
// Read through the comments below to see what this section does
//
// TO CUSTOMIZE THIS SECTION
// Either customize the name from health to steps, stress, etc...
// OR
// create a copy of each step for each additional state you want to track throughout the game
// --------------------------------------------------

// Create a variable for health
let health = 100;

// Display current health
const healthDisplay = document.getElementById("health-display");

// Create a function to update health 
function updateHealth(amount) {
  health += amount;
  healthDisplay.textContent = health;
}

// This refreshes the health display
updateHealth(0);

let batter = 0;

const batterDisplay = document.getElementById("batter-display");

function updateBatter(amount) {
  batter += amount;
  batterDisplay.textContent = batter;
}

updateBatter(0);

// --------------------------------------------------
// INVENTORY
// Read through the comments below to see what this section does
//
// For now, you are probably leaving this section as is. 
// --------------------------------------------------

// Create a variable for inventory
let inventory = [];

// Display current inventory
const inventoryDisplay = document.querySelector("#inventory-display");
const messageDisplay = document.getElementById("message-display");

// Create a function to update inventory 
function pickUpItem(itemName) {
    // Add itemName to the inventory array
    // Show the updated inventory on the page
    if (!inventory.includes(itemName)) {
      inventory.push(itemName);
    }
  inventoryDisplay.textContent = inventory.join(", ");
}

// --------------------------------------------------
// CONDITIONAL 
// Depending on how you want to implement the conditional logic, you may 
// simply adjust the names below or you may need to expand upon this section
// --------------------------------------------------

// Create a function that checks if the inventory contains one item and if so shows the win condition scene.
function unlockDoor() {
  if (inventory.includes("brass key")) {
    updateScene("solution");
  } else {
    messageDisplay.textContent = "The door is locked.";
  }
}

function openManhole() {
  if(inventory.includes("manhole key")) {
    updateScene("fight1");
  } else {
    messageDisplay.textContent = "The manhole is locked.";
  }
}

function unlockScienceRoom() {
  if(inventory.includes("science key")) {
    updateScene("science");
  } else {
    messageDisplay.textContent = "The science classroom is locked.";
  }
}

function unlockGym() {
  if(inventory.includes("gym key")) {
    updateScene("gym");
  } else {
    messageDisplay.textContent = "The gym is locked.";
  }
}

function unlockRoof() {
 if(inventory.includes("roof key")) {
  updateScene("roof");
 } else {
  messageDisplay.textContent = "The roof is locked.";
 }
}

function unlockLocker() {
  if(inventory.includes("locker key")) {
    messageDisplay.textContent = "You opened the locker and found a key to the roof";
    pickUpItem("roof key");
} else {
  messageDisplay.textContent = "The locker is locked. This isn't possible because you just got the key...";
}
}