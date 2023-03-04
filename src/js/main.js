async function loadScores() {
  const response = await fetch('../data.json');
  const data = await response.json();
  renderScores(data);
}

function renderScores(scores) {
  const list = document.querySelector('#js-scores');
  const overall = document.querySelector('#js-overall');

  let template = '';
  let total = 0;

  for (const item of scores) {
    template += `
    <li class="scores__list-item">
      <div class="scores__category">
        <img src="./assets/images/icon-${item.category}.svg" alt="${item.category} icon" />
        ${item.category}
      </div>
      <div class="scores__individual"><span class="scores__individual--dark">${item.score}</span> / 100</div>
    </li>`;
    total += item.score;
  }

  total = Math.round(total / scores.length);
  list.innerHTML = template;
  overall.innerHTML = total;
}

loadScores();
