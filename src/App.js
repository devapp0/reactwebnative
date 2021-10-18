import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Image,
  TextInput,
  AsyncStorage,
  Alert
} from "react-native";
import Draggable from "./Draggable";
const logoUri = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 841.9 595.3"><g fill="#61DAFB"><path d="M666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9V78c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V78.5c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zM421.2 430c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24 4.7 8 9.5 15.8 14.4 23.4zM420.7 163c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6 0-15.7 22.9-35.6 58.3-50.6 8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zM310 490c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6zM320.8 78.4z" /><circle cx="420.9" cy="296.5" r="45.7" /><path d="M520.5 78.1z" /></g></svg>`;

const Link = props => (
  <Text
    {...props}
    accessibilityRole="link"
    style={StyleSheet.compose(
      styles.link,
      props.style
    )}
  />
);

class Circle extends Component {
  render() {
    return <View style={styles.circle} />;
  }
}

class Eye extends Component {
  constructor(props) {
    super(props);
    this.state = { open: true };
  }

  render() {
    let display = this.state.open ? this.props.text : " ";
    return <Text>{display}</Text>;
  }
}

class PetStatus extends Component {
  constructor(props) {
    super(props);
  }

  renderBar(value, bool) {
    var barLength = value * 20;
    var color;
    if (bool) {
      color = "green";
    } else {
      color = "red";
    }
    return (
      <View
        style={{
          height: 5,
          width: barLength,
          backgroundColor: color,
          marginTop: 10
        }}
      />
    );
  }

  render() {
    return (
      <View style={{ position: "absolute", top: 50, left: 50 }}>
        <Text>{this.props.pet.name}</Text>
        <Text>
          Fullness:{" "}
          {this.renderBar(
            this.props.pet.fullness + 1 / 4,
            this.props.pet.isFull()
          )}
        </Text>
        <Text>
          Restfulness:{" "}
          {this.renderBar(
            this.props.pet.restLv() / 5760 + 1 / 4,
            this.props.pet.isRested()
          )}
        </Text>
      </View>
    );
  }
}

class Pet {
  constructor(
    fullness,
    lastFed,
    lvl,
    playLv,
    lastEntertained,
    name,
    wokeUpAt,
    startedSleepingAt,
    sleeping,
    restLvPivot
  ) {
    this.works = false;
    this.fullness = fullness;
    this.lastFed = lastFed;
    this.currentTime = 0;
    this.currentPersonality = "a";
    this.quality = 100;
    this.species = "abapo";

    this.lvl = lvl;

    this.wokeUpAt = wokeUpAt;
    this.startedSleepingAt = startedSleepingAt;
    this.sleeping = sleeping;
    this.restLvPivot = restLvPivot;

    this.playLv = playLv;
    this.lastEntertained = lastEntertained;
    this.name = name;
  }

  petFeed() {
    this.fullness += 1;
    this.lastFed = this.currentTime;
    console.log(this.fullness);
    AsyncStorage.setItem("lastFed", JSON.stringify(this.lastFed));
    AsyncStorage.setItem("fullness", JSON.stringify(this.fullness));
  }

  isFull() {
    return this.fullness >= 3;
  }

  resetHunger() {
    this.fullness = 0;
  }

  decreaseHunger() {
    if (this.fullness > 0 && !this.sleeping) {
      this.fullness -= 1;
      this.lastFed = this.currentTime;
    }
  }

  updateTime(time) {
    this.currentTime = time;
  }

  canEat() {
    return this.fullness < 5;
  }

  sleep() {
    this.restLvPivot = this.restLv();
    this.sleeping = !this.sleeping;

    AsyncStorage.setItem("restLvPivot", JSON.stringify(this.restLvPivot));
    AsyncStorage.setItem("sleeping", JSON.stringify(this.sleeping));
    AsyncStorage.setItem("lastFed", JSON.stringify(this.lastFed));
    AsyncStorage.setItem("fullness", JSON.stringify(this.fullness));

    if (this.sleeping) {
      this.startedSleepingAt = this.currentTime;
      AsyncStorage.setItem(
        "startedSleepingAt",
        JSON.stringify(this.startedSleepingAt)
      );
    } else {
      this.wokeUpAt = this.currentTime;
      AsyncStorage.setItem("wokeUpAt", JSON.stringify(this.wokeUpAt));
    }
  }

  isRested() {
    return this.restLv() >= 11600;
  }

  restLv() {
    //rn this is wrong because its treating dates strings as integers (eg 6:00 - 5:30 = 30 vs 600 - 530 = 70)
    var rLv;
    if (!this.sleeping) {
      //while awake, restlv = the amount of energy the pet had when it woke up - the time spent awake
      rLv = this.restLvPivot - (this.currentTime - this.wokeUpAt);
    } else {
      //while sleeping, the amount of energy the pet had when it went to sleep + the time spent sleeping
      rLv = this.restLvPivot + (this.currentTime - this.startedSleepingAt);
    }
    //console.log(rLv);
    if (rLv > 28800) {
      return 28800;
    } else if (rLv < 0) {
      return 0;
    } else {
      return rLv;
    }
  }

  color() {
    if (this.lvl < 5) {
      return "#F1FAEE";
    } else if (this.lvl < 15) {
      return "#D3A588";
    } else {
      return "#7A6563";
    }
  }

  petPlay() {
    if (this.playLv < 20) {
      this.playLv += 1;
    }
    this.lastPlayed = this.currentTime;
  }

  isEntertained() {
    return this.playLv >= 5;
  }

  decreaseEntertainment() {
    if (this.playLv > 0) {
      this.playLv -= 1;
      this.lastEntertained = this.currentTime;
    }
  }

  levelUp() {
    this.lvl += 1;
  }

  resetLevel() {
    this.lvl = 0;
  }

  renamePet(text) {
    this.name = text;
  }
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      squished: false,
      menuOpened: false,
      text: "",
      line: 0,
      petBarActive: false,
      feedingActive: false,
      sleepingActive: false,
      playingActive: false,
      washingActive: false,
      active: "",
      pettt: new Pet()
      //daysAlive (real mode)
      //birthDay
      //secondsAlive (dev mode)
      //birthTime
      //kinda bad
    };
  }

  onPress = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  onSquish = () => {
    this.setState({
      squished: !this.state.squished
    });
  };

  levelPet() {
    var levelTo = this.state.daysCaredFor + 1;
    AsyncStorage.setItem("daysCaredFor", JSON.stringify(levelTo));
    this.setState({ daysCaredFor: levelTo });
    this.state.pettt.levelUp();
    console.log(levelTo);
    console.log(this.state.daysCaredFor);
  }

  resetLevelPet() {
    var levelTo = 0;
    AsyncStorage.setItem("daysCaredFor", JSON.stringify(levelTo));
    this.setState({ daysCaredFor: levelTo });
    this.setState({ nameScreenActive: true });
    this.state.pettt.resetLevel();
    console.log(levelTo);
    console.log(this.state.daysCaredFor);
  }

  pressPet() {
    {
      this.state.petBarActive
        ? this.careForPet()
        : this.setState({ petBarActive: true });
    }
  }

  careForPet() {
    {
      this.state.active == "feed"
        ? this.feedPet()
        : this.state.active == "sleep"
        ? this.restPet()
        : this.state.active == "play"
        ? this.entertainPet()
        : this.state.active == "wash"
        ? this.washPet()
        : null;
    }
  }

  feedPet() {
    {
      !this.state.fed &&
      this.state.rested &&
      this.state.entertained &&
      this.state.washed
        ? this.levelPet()
        : null;
    }
  }

  feedPetHelper() {
    AsyncStorage.setItem("fed", JSON.stringify(true));
    this.setState({ fed: true });

    AsyncStorage.setItem("lastFed", JSON.stringify(this.state.todaysDate));
    this.setState({ lastFed: this.state.todaysDate });
  }

  restPet() {
    this.state.pettt.sleep();

    {
      this.state.fed &&
      !this.state.rested &&
      this.state.entertained &&
      this.state.washed
        ? this.levelPet()
        : null;
    }
  }

  restPetHelper() {
    AsyncStorage.setItem("rested", JSON.stringify(true));
    this.setState({ rested: true });

    AsyncStorage.setItem("lastRested", JSON.stringify(this.state.todaysDate));
    this.setState({ lastRested: this.state.todaysDate });
  }

  entertainPet() {
    {
      this.state.pettt.sleeping ? null : this.state.pettt.petPlay();
    }

    {
      this.state.fed &&
      this.state.rested &&
      !this.state.entertained &&
      this.state.washed
        ? this.levelPet()
        : null;
    }
  }

  entertainPetHelper() {
    AsyncStorage.setItem("entertained", JSON.stringify(true));
    this.setState({ entertained: true });

    AsyncStorage.setItem(
      "lastEntertained",
      JSON.stringify(this.state.todaysDate)
    );
    this.setState({ lastEntertained: this.state.todaysDate });
  }

  washPet() {
    {
      this.state.washed ? null : this.washPetHelper();
    }

    {
      this.state.fed &&
      this.state.rested &&
      this.state.entertained &&
      !this.state.washed
        ? this.levelPet()
        : null;
    }
  }

  washPetHelper() {
    AsyncStorage.setItem("washed", JSON.stringify(true));
    this.setState({ washed: true });

    AsyncStorage.setItem("lastWashed", JSON.stringify(this.state.todaysDate));
    this.setState({ lastWashed: this.state.todaysDate });
  }

  menuPress = () => {
    this.setState({
      menuOpened: !this.state.menuOpened
    });
  };

  linePress = () => {
    this.setState({
      line: this.state.line + 1
    });
  };

  exitNameScreen() {
    this.setState({ nameScreenActive: false });
  }

  renamePet(text) {
    this.state.pettt.renamePet(text);
  }

  componentDidMount() {
    AsyncStorage.getItem("myKey").then(value => {
      this.setState({ myKey: value });
    });

    AsyncStorage.getItem("fed").then(value => {
      this.setState({ fed: JSON.parse(value) });
    });
    AsyncStorage.getItem("rested").then(value => {
      this.setState({ rested: JSON.parse(value) });
    });
    AsyncStorage.getItem("entertained").then(value => {
      this.setState({ entertained: JSON.parse(value) });
    });
    AsyncStorage.getItem("washed").then(value => {
      this.setState({ washed: JSON.parse(value) });
    });

    AsyncStorage.getItem("lastFed").then(value => {
      this.setState({ lastFed: JSON.parse(value) });
    });
    AsyncStorage.getItem("lastRested").then(value => {
      this.setState({ lastRested: JSON.parse(value) });
    });
    AsyncStorage.getItem("lastEntertained").then(value => {
      this.setState({ lastEntertained: JSON.parse(value) });
    });
    AsyncStorage.getItem("lastWashed").then(value => {
      this.setState({ lastWashed: JSON.parse(value) });
    });

    AsyncStorage.getItem("daysCaredFor").then(value => {
      this.setState({ daysCaredFor: JSON.parse(value) });
    });

    AsyncStorage.getItem("fullness").then(value => {
      this.setState({ fullness: JSON.parse(value) });
    });

    AsyncStorage.getItem("playLv").then(value => {
      this.setState({ playLv: JSON.parse(value) });
    });

    AsyncStorage.getItem("wokeUpAt").then(value => {
      this.setState({ wokeUpAt: JSON.parse(value) });
    });

    AsyncStorage.getItem("startedSleepingAt").then(value => {
      this.setState({ startedSleepingAt: JSON.parse(value) });
    });

    AsyncStorage.getItem("sleeping").then(value => {
      this.setState({ sleeping: JSON.parse(value) });
    });

    AsyncStorage.getItem("restLvPivot").then(value => {
      this.setState({ restLvPivot: JSON.parse(value) });
    });

    //this.setState({pettt: new Pet(this.state.fullness)});
    //you can't use this.state.fullness here, it will still be undefined

    setTimeout(() => {
      this.startSetTodaysDate();
    }, 1);
    setInterval(() => {
      this.setTodaysDate();
    }, 1000);
  }

  startSetTodaysDate() {
    this.setState({
      pettt: new Pet(
        this.state.fullness,
        this.state.lastFed,
        this.state.daysCaredFor,
        this.state.playLv,
        this.lastEntertained,
        "squishy",
        this.state.wokeUpAt,
        this.state.startedSleepingAt,
        this.state.sleeping,
        this.state.restLvPivot
      )
    });
    console.log(this.state.fullness);
    var year = new Date().getFullYear();
    var month = new Date().getMonth() + 1;
    var day = new Date().getDate();
    var hours = new Date().getHours();
    var minutes = new Date().getMinutes();
    var seconds = new Date().getSeconds();

    {
      month < 10 ? (month = 0 + "" + month) : null;
    }
    {
      day < 10 ? (day = 0 + "" + day) : null;
    }
    {
      hours < 10 ? (hours = 0 + "" + hours) : null;
    }
    {
      minutes < 10 ? (minutes = 0 + "" + minutes) : null;
    }
    {
      seconds < 10 ? (seconds = 0 + "" + seconds) : null;
    }

    //var date = year + "" + month + "" + day + "" + hours + "" + minutes + "" + seconds;
    var date = Math.floor(new Date().valueOf() / 1000);

    this.setState({ todaysDate: date });
    this.state.pettt.updateTime(date);

    {
      this.state.todaysDate - this.state.pettt.lastFed > 5
        ? this.setState({ fed: false })
        : null;
    }

    {
      this.state.todaysDate - this.state.lastEntertained > 5
        ? this.setState({ entertained: false })
        : null;
    }
    {
      this.state.todaysDate - this.state.lastWashed > 5
        ? this.setState({ washed: false })
        : null;
    }
    AsyncStorage.setItem("fed", JSON.stringify(this.state.fed));
    AsyncStorage.setItem("rested", JSON.stringify(this.state.rested));
    AsyncStorage.setItem("entertained", JSON.stringify(this.state.entertained));
    AsyncStorage.setItem("washed", JSON.stringify(this.state.washed));
  }

  //this calculates the time everysecond, and compares it to the last time
  //the pet was cared for in each of its needs, if the time now is greater than the time then, it sets its
  //cared for attribute to false
  setTodaysDate() {
    var year = new Date().getFullYear();
    var month = new Date().getMonth() + 1;
    var day = new Date().getDate();
    var hours = new Date().getHours();
    var minutes = new Date().getMinutes();
    var seconds = new Date().getSeconds();

    {
      month < 10 ? (month = 0 + "" + month) : null;
    }
    {
      day < 10 ? (day = 0 + "" + day) : null;
    }
    {
      hours < 10 ? (hours = 0 + "" + hours) : null;
    }
    {
      minutes < 10 ? (minutes = 0 + "" + minutes) : null;
    }
    {
      seconds < 10 ? (seconds = 0 + "" + seconds) : null;
    }

    //var date = year + "" + month + "" + day + "" + hours + "" + minutes + "" + seconds;
    var date = Math.floor(new Date().valueOf() / 1000);

    this.setState({ todaysDate: date });
    this.state.pettt.updateTime(date);

    {
      this.state.todaysDate - this.state.pettt.lastFed > 5
        ? this.state.pettt.decreaseHunger()
        : null;
    }
    {
      this.state.todaysDate - this.state.pettt.lastEntertained > 5
        ? this.state.pettt.decreaseEntertainment()
        : null;
    }

    {
      this.state.todaysDate - this.state.lastEntertained > 5
        ? this.setState({ entertained: false })
        : null;
    }
    {
      this.state.todaysDate - this.state.lastWashed > 5
        ? this.setState({ washed: false })
        : null;
    }
    this.setState({ fed: this.state.pettt.isFull() });
    this.setState({ rested: this.state.pettt.isRested() });
    this.setState({ entertained: this.state.pettt.isEntertained() });
    AsyncStorage.setItem("fed", JSON.stringify(this.state.fed));
    AsyncStorage.setItem("rested", JSON.stringify(this.state.rested));
    AsyncStorage.setItem("entertained", JSON.stringify(this.state.entertained));
    AsyncStorage.setItem("washed", JSON.stringify(this.state.washed));
    AsyncStorage.setItem("fullness", JSON.stringify(this.state.pettt.fullness));
    AsyncStorage.setItem("playLv", JSON.stringify(this.state.pettt.playLv));
    AsyncStorage.setItem("lastFed", JSON.stringify(this.state.pettt.lastFed));
  }

  safelyLogTodaysDate() {
    console.log(this.state.todaysDate);
  }

  saveData(value) {
    AsyncStorage.setItem("myKey", value);
    this.setState({ myKey: value });
  }

  feed() {
    {
      this.state.active == "feed"
        ? this.setState({ active: "" })
        : this.setState({ active: "feed" });
    }
  }

  sleep() {
    {
      this.state.active == "sleep"
        ? this.setState({ active: "" })
        : this.setState({ active: "sleep" });
    }
  }

  play() {
    {
      this.state.active == "play"
        ? this.setState({ active: "" })
        : this.setState({ active: "play" });
    }
  }

  wash() {
    {
      this.state.active == "wash"
        ? this.setState({ active: "" })
        : this.setState({ active: "wash" });
    }
  }

  LevelUpIfAllTrue() {
    //levels up the pet if all of its needs are met
    {
      this.state.fed
        ? this.state.rested
          ? this.state.entertained
            ? this.state.washed
              ? this.setState({ daysAlive: this.state.daysAlive + 1 })
              : null
            : null
          : null
        : null;
    }
  }

  render() {
    const lvl = {
      backgroundColor: this.state.pettt.color()
    };
    var draggable1 = new Draggable();
    var line1 = this.state.pettt.name + " wants to learn more about the world.";
    var line2 = "Tell them about 3 things you're grateful for!";
    var backgroundStyle;
    var shadowStyle;
    var shadowSquishedStyle;
    {
      this.state.petBarActive
        ? this.state.active == "feed"
          ? (backgroundStyle = [
              styles.container,
              { backgroundColor: "#CC7E85" }
            ])
          : this.state.active == "sleep"
          ? (backgroundStyle = [
              styles.container,
              { backgroundColor: "#00A878" }
            ])
          : this.state.active == "play"
          ? (backgroundStyle = [
              styles.container,
              { backgroundColor: "#F4A259" }
            ])
          : this.state.active == "wash"
          ? (backgroundStyle = [
              styles.container,
              { backgroundColor: "#F4E285" }
            ])
          : (backgroundStyle = styles.container)
        : (backgroundStyle = styles.container);
    }

    {
      this.state.petBarActive
        ? this.state.active == "feed"
          ? (shadowStyle = [styles.shadow, { backgroundColor: "#684551" }])
          : this.state.active == "sleep"
          ? (shadowStyle = [styles.shadow, { backgroundColor: "#0B5351" }])
          : this.state.active == "play"
          ? (shadowStyle = [styles.shadow, { backgroundColor: "#AA5042" }])
          : this.state.active == "wash"
          ? (shadowStyle = [styles.shadow, { backgroundColor: "#A49966" }])
          : (shadowStyle = styles.shadow)
        : (shadowStyle = styles.shadow);
    }

    {
      this.state.petBarActive
        ? this.state.active == "feed"
          ? (shadowSquishedStyle = [
              styles.shadowSquished,
              { backgroundColor: "#684551" }
            ])
          : this.state.active == "sleep"
          ? (shadowSquishedStyle = [
              styles.shadowSquished,
              { backgroundColor: "#0B5351" }
            ])
          : this.state.active == "play"
          ? (shadowSquishedStyle = [
              styles.shadowSquished,
              { backgroundColor: "#AA5042" }
            ])
          : this.state.active == "wash"
          ? (shadowSquishedStyle = [
              styles.shadowSquished,
              { backgroundColor: "#A49966" }
            ])
          : (shadowSquishedStyle = styles.shadowSquished)
        : (shadowSquishedStyle = styles.shadowSquished);
    }

    return (
      <TouchableOpacity
        activeOpacity={1}
        style={backgroundStyle}
        onPress={() => {
          this.setState({ petBarActive: false });
        }}
      >
        {this.state.menuOpened && (
          <View style={this.state.menuOpened ? styles.menu : null}>
            <Text style={styles.title} onPress={this.linePress}>
              {this.state.line % 2 == 0 ? line1 : line2}
            </Text>
            <TextInput
              style={
                this.state.menuOpened
                  ? {
                      backgroundColor: "white",
                      padding: 16,
                      borderRadius: 16,
                      width: "50%",
                      margin: 10
                    }
                  : null
              }
              placeholder="Type here to translate!"
              onChangeText={text => this.setState({ text })}
            />
            <TextInput
              style={
                this.state.menuOpened
                  ? {
                      backgroundColor: "white",
                      padding: 16,
                      borderRadius: 16,
                      width: "50%",
                      margin: 10
                    }
                  : null
              }
              placeholder="Type here to translate!"
              onChangeText={text => this.setState({ text })}
            />
            <TextInput
              style={
                this.state.menuOpened
                  ? {
                      backgroundColor: "white",
                      padding: 16,
                      borderRadius: 16,
                      width: "50%",
                      margin: 10
                    }
                  : null
              }
              placeholder="Type here to translate!"
              onChangeText={text => this.setState({ text })}
            />
            <Text>{this.state.text}</Text>
          </View>
        )}
        <PetStatus pet={this.state.pettt} />

        <TouchableOpacity
          activeOpacity={1}
          style={[
            this.state.squished ? styles.circleSquished : styles.circle,
            lvl
          ]}
          onPress={() => this.pressPet()}
          onPressIn={this.onSquish}
          onPressOut={this.onSquish}
        >
          <View style={styles.eyes}>
            <View
              style={
                this.state.squished || this.state.pettt.sleeping
                  ? styles.blinked
                  : styles.eye
              }
            />
            <View
              style={
                this.state.squished || this.state.pettt.sleeping
                  ? styles.blinked
                  : styles.eye
              }
            />
          </View>
          <View style={[styles.countContainer]} />
        </TouchableOpacity>
        <View style={this.state.squished ? shadowSquishedStyle : shadowStyle} />
        <Text style={styles.name}>{this.state.pettt.name}</Text>
        {this.state.petBarActive && (
          <View style={styles.petBar}>
            <TouchableOpacity
              style={[styles.petBarItem, styles.button]}
              onPress={() => this.feed()}
            >
              <Text>Feed</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.petBarItem, , styles.button]}
              onPress={() => this.sleep()}
            >
              <Text>Sleep</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.petBarItem, styles.button]}
              onPress={() => this.play()}
            >
              <Text>Play</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.petBarItem, styles.button]}
              onPress={() => this.wash()}
            >
              <Text>Wash</Text>
            </TouchableOpacity>
          </View>
        )}
        {this.state.petBarActive && this.state.active == "feed" && (
          <View style={[styles.petBar, { top: "15%" }]}>
            <Draggable
              pet={this.state.pettt}
              style={[styles.food, styles.petBarItem]}
            />
            <Draggable
              pet={this.state.pettt}
              style={[styles.food, styles.petBarItem]}
            />
            <Draggable
              pet={this.state.pettt}
              style={[styles.food, styles.petBarItem]}
            />
            <Draggable
              pet={this.state.pettt}
              style={[styles.food, styles.petBarItem]}
            />
          </View>
        )}
        <TouchableOpacity
          style={[
            this.state.menuOpened
              ? styles.gratitudeButtonOpened
              : styles.gratitudeButton,
            styles.button
          ]}
          onPress={this.menuPress}
        >
          <Text>Gratitude</Text>
        </TouchableOpacity>
        <View style={styles.gratitudeButtonShadow} />
        <TouchableOpacity
          style={[styles.resetLevelButton, styles.button]}
          onPress={() => this.resetLevelPet()}
        >
          <Text>Reset </Text>
          <Text>Level</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.levelUpButton, styles.button]}
          onPress={() => this.levelPet()}
        >
          <Text>Level</Text>
          <Text>Up</Text>
          <Text>{this.state.pettt.lvl}</Text>
        </TouchableOpacity>

        {this.state.nameScreenActive && (
          <View style={styles.nameScreen}>
            <TextInput
              style={{
                backgroundColor: "white",
                padding: 20,
                borderRadius: 16,
                width: "60%",
                zIndex: 1
              }}
              placeholder="Name your pet"
              onChangeText={text => this.state.pettt.renamePet(text)}
            />
            <View style={styles.nameScreenBackground} />
            <TouchableOpacity
              style={styles.exitNameScreenButton}
              onPress={() => this.exitNameScreen()}
            >
              <Text
                style={{ color: "white", fontSize: 32, textAlign: "center" }}
              >
                X
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </TouchableOpacity>
    );
  }
}

("use strict");

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#A8DADC",
    alignItems: "center",
    justifyContent: "center"
  },
  menu: {
    //flex: 1,
    backgroundColor: "#1D3557",
    //backgroundColor: '#E63946',
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
    position: "absolute",
    zIndex: 2
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
    margin: 50,
    top: -50
  },
  petBar: {
    backgroundColor: "#1D3557",
    position: "absolute",
    height: 80,
    top: "65%",
    borderRadius: 200,
    flexDirection: "row",
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 10,
    paddingBottom: 10,
    display: "flex"
  },
  petBarItem: {
    backgroundColor: "#457B9D",
    height: 60,
    width: 60,
    borderRadius: 30,
    marginLeft: 5,
    marginRight: 5
  },
  food: {
    marginLeft: 200,
    width: 100,
    position: "relative"
  },
  circle: {
    width: 200,
    height: 200,
    borderRadius: 200 / 2,
    backgroundColor: "#F1FAEE",
    borderWidth: 4,
    borderColor: "black",
    bottom: "37%",
    position: "absolute"
  },
  circleSquished: {
    width: 230,
    height: 170,
    borderRadius: 200 / 2,
    backgroundColor: "#F1FAEE",
    borderWidth: 4,
    borderColor: "black",
    bottom: "37%",
    position: "absolute"
  },
  countContainer: {
    alignItems: "center",
    padding: 10
  },
  countText: {
    color: "black"
  },
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  gratitudeButton: {
    zIndex: 4,
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
    backgroundColor: "#E63946",
    position: "absolute",
    bottom: "8%",
    right: "10%",
    elevation: 2
  },
  gratitudeButtonShadow: {
    zIndex: 3,
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
    backgroundColor: "#457B9D",
    position: "absolute",
    bottom: "7.5%",
    right: "10%",
    elevation: 2
  },
  gratitudeButtonOpened: {
    zIndex: 4,
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
    backgroundColor: "#F1FAEE",
    position: "absolute",
    bottom: "8%",
    right: "10%",
    elevation: 2
  },
  eyes: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row"
  },
  eye: {
    height: 8,
    width: 8,
    backgroundColor: "black",
    borderRadius: 8 / 2
  },
  blinked: {
    height: 4,
    width: 12,
    backgroundColor: "black",
    borderRadius: 8 / 2
  },
  shadow: {
    position: "absolute",
    width: 60,
    height: 60,
    backgroundColor: "#457B9D",
    borderRadius: 200 / 2,
    bottom: "35%",
    zIndex: -1,
    transform: [{ scaleX: 3 }]
  },
  shadowSquished: {
    position: "absolute",
    width: 60,
    height: 60,
    backgroundColor: "#457B9D",
    borderRadius: 200 / 2,
    bottom: "35%",
    zIndex: -1,
    transform: [{ scaleX: 3.5 }]
  },
  resetLevelButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#E63946",
    position: "absolute",
    bottom: "8%",
    left: "15%"
  },
  levelUpButton: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    backgroundColor: "#E63946",
    position: "absolute",
    bottom: "8%",
    left: "30%"
  },
  name: {
    bottom: "30%",
    position: "absolute",
    fontSize: 36,
    color: "white"
  },
  nameScreen: {
    height: "100%",
    width: "100%",
    //backgroundColor: 'black',
    zIndex: 2,
    //opacity: 0.5,

    alignItems: "center",
    justifyContent: "center",
    position: "absolute"
    //backgroundColor: 'blue',
  },
  nameScreenBackground: {
    height: "100%",
    width: "100%",
    backgroundColor: "black",
    //zIndex: 4,
    opacity: 0.5,
    position: "absolute"
    //left: 0,
    //top: 0,
  },
  exitNameScreenButton: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    //backgroundColor: '#E63946',
    position: "absolute",
    top: "10%",
    right: "10%",
    zIndex: 1
  }
});
