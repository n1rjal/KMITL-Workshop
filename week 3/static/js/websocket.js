const wsConnection = new WebSocket("ws://localhost:8765");
const waterLevelDiv = document.getElementById("water_level");
const container = document.querySelector(".container");

const images = {
  FLOOD:
    "https://images.pexels.com/photos/1739855/pexels-photo-1739855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  DRY: "https://images.pexels.com/photos/60013/desert-drought-dehydrated-clay-soil-60013.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  NORMAL:
    "https://images.pexels.com/photos/627924/pexels-photo-627924.jpeg?auto=compress&cs=tinysrgb&w=800",
};

function getWallpaper(waterLevel) {
  /*
        below 50: Its dry
        Between 50 to 300: Its normal
        After 300: Its Flood
    */

  if (waterLevel > 300) {
    return images.FLOOD;
  } else if (waterLevel > 50 && waterLevel <= 300) {
    return images.NORMAL;
  } else {
    return images.DRY;
  }
}

wsConnection.addEventListener("open", () => {
  console.log("Connected to server Successfully");
  setInterval(() => {
    wsConnection.send("HELLO");
  }, 1500);
});

wsConnection.addEventListener("message", (message) => {
  const sensorReading = message.data;
  const waterLevelInInteger = Number.parseInt(sensorReading);
  const currentBgImage = getWallpaper(waterLevelInInteger);

  console.log({ currentBgImage });

  container.style.backgroundImage = `url('${currentBgImage}')`;
  waterLevelDiv.innerText = `${sensorReading} mm`;
});
