const levels = [
  {
    name: "Skeletal Shenanagins",
    creator: "YoRied",
    difficulty: "Medium Demon",
    video: "https://youtu.be/mgzTHUKATqo?si=nBJ-yLfE50wb5p34"
  },
  {
    name: "B",
    creator: "motleyorc",
    difficulty: "Medium Demon",
    video: "https://youtu.be/ohKPqGxotao?si=3oh_m6ur_OXPKYM7"
  },
  {
    name: "Deadlocked",
    creator: "Robtop",
    difficulty: "Easy Demon",
    video: "https://youtu.be/M95jvT_q-24?si=vhnkw_RuICIhmZto"
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
