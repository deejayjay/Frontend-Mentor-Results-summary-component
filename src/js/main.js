async function loadScores() {
  const response = await fetch('../data.json');
  const data = await response.json();
  console.table(data);
  renderScores(data);
}

function renderScores(scores) {
  const list = document.querySelector('#js-scores');
  let template = '';

  for (const item of scores) {
    template += `
    <li class="scores__list-item">
      <div class="scores__category">
        <img src="./assets/images/icon-${item.category}.svg" alt="${item.category} icon" />
        ${item.category}
      </div>
      <div class="scores__individual"><span class="scores__individual--dark">${item.score}</span> / 100</div>
    </li>`;
  }
  list.innerHTML = template;
}

loadScores();
