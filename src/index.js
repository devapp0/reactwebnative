import { AppRegistry } from "react-native";
import App from "./App";

AppRegistry.registerComponent("App", () => App);

AppRegistry.runApplication("App", {
  rootTag: document.getElementById("root")
});

// Meet Squishy
// Feel free to play with him as much as you want

// You can feed him, put him to sleep, and wake him up

// You can do this by tapping on him to open up the menu
// and choosing what you mode you want to enter
// For example, you will only be able to put him to
// sleep and wake him up in sleep mode

// You can only feed him when he's awake
// When he's awake, he gets hungry really fast

// When he's asleep, his eyes will be closed,
// he won't get hungry, and he'll slowly grow more
// rested.

// If you put him to sleep totally full, and check
// back tomorrow, he will have raised a level!
