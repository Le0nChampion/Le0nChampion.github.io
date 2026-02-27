const levels = [
  {
    name: "Infernal Void",
    creator: "You",
    difficulty: "Extreme Demon",
    video: "https://youtube.com/"
  },
  {
    name: "Crimson Pulse",
    creator: "You",
    difficulty: "Insane Demon",
    video: "https://youtube.com/"
  },
  {
    name: "Silent Chaos",
    creator: "You",
    difficulty: "Hard Demon",
    video: "https://youtube.com/"
  }
];

const listContainer = document.getElementById("demonList");

levels.forEach((level, index) => {
  const div = document.createElement("div");
  div.className = "level";

  div.innerHTML = `
    <div class="rank">#${index + 1}</div>
    <div class="level-info">
      <strong>${level.name}</strong><br>
      Creator: ${level.creator}<br>
      Difficulty: ${level.difficulty}<br>
      <a href="${level.video}" target="_blank">Video Proof</a>
    </div>
  `;

  listContainer.appendChild(div);
});
