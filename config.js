/**
 * Config (example)
 * Cassius - https://github.com/sirDonovan/Cassius
 *
 * Copy this file to 'config.js' before starting Cassius.
 *
 * @license MIT license
 */

"use strict";

// The username and password that Cassius will use to login
exports.username = "Bippy Bot";
// leave this blank if the username is unregistered
exports.password = "aadhiyo";

// The server address to which Cassius will connect
exports.server = "dawn.psim.us";

// The avatar that Cassius will use
exports.avatar = "http://play.pokemonshowdown.com/sprites/trainers/supernerd.png";

// A guide for commands and features
exports.guide = "https://pastebin.com/WDRVmjSP";

// Rooms that Cassius will attempt to join after logging in
// example: exports.rooms = ['room1', 'room2', 'room3'];
/**@type {Array<string>} */
exports.rooms = ["groupchat-frostienana-owo"];


// Rooms where scripted games are enabled
/**@type {Array<string>} */
exports.games = ["groupchat-frostienana-owo"];
exports.allowTournaments = ["groupchat-frostienana-owo"];
// Rooms where scripted tournaments are enabled
/**@type {Array<string>} */
exports.tournaments = ["groupchat-frostienana-owo"];

// The default cap to use for scripted tournaments
exports.defaultTournamentCap = 0;

// The character that determines which messages are read as commands
exports.commandCharacter = "&";
exports.language = "es";
// Symbols and rankings for the server's user groups
exports.groups = {
  "\u203d": 0,
  "!": 0,
  " ": 0,
  "+": 1,
  "%": 2,
  "@": 3,
  "*": 3,
  "#": 4,
  "&": 5,
  "~": 6
};

// Words that are either filtered or auto-locked by the server
/**@type {Array<string>} */
exports.bannedWords = [];

// Userids of those who have debug access to Cassius
// example: exports.developers = ['devuser1', 'devuser2', 'devuser3'];
/**@type {Array<string>} */
exports.developers = ["FrostieNana"];

exports.ignoreRooms = [];

exports.level = [];
exports.bannedLevel = [];
exports.msglogs = [];
// Custom functions
/**@type {?Function} */
exports.parseMessage = null;
/**@type {?Function} */
exports.moderate = null;

/**@type {boolean | {[k: string]: boolean}} */
exports.allowModeration = false;

let punishmentPoints = {
  verbalwarn: 0,
  warn: 1,
  mute: 2,
  hourmute: 3,
  roomban: 4
};

let punishmentActions = {};
for (let i in punishmentPoints) {
  punishmentActions["" + punishmentPoints[i]] = i;
}

exports.punishmentPoints = punishmentPoints;
exports.punishmentActions = punishmentActions;

// Reasons used when Cassius punishes a user for
// flooding, stretching, caps, etc.
// example: punishmentReasons = {'flooding': 'please do not flood the chat'}

/**@type {?{[k: string]: string}} */
exports.punishmentReasons = null;

exports.allowMail = true;
