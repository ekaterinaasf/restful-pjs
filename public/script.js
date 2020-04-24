class fetcher {
  constructor(i) {
    this.i = i;
    const start = Date.now();
    const timedMsg = (msg) => `${Date.now() - start} ms.: ${msg}`;
  }

  async fetching0() {
    const res = await fetch("http://127.0.0.1:3000/todos");
    const data = await res.json();
    console.log("Step " + i);
    //rez1();
  }
}

const butEl = document.getElementById("button");
const ui = new fetcher();
let i = 1;
function rez1() {
  console.log("Step " + i);
  i++;
  i = i % 19;
}
let name = "ui.fetching" + i;
butEl.addEventListener("click", function (event) {
  event.preventDefault();
  ui.name();
});
