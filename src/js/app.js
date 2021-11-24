export default class App {
  constructor() {
    this.counter = 0;
    this.initialArr = [];
    this.data = [
      {
        "id": 26,
        "title": "Побег из Шоушенка",
        "imdb": 9.30,
        "year": 1994
      },
      {
        "id": 25,
        "title": "Крёстный отец",
        "imdb": 9.20,
        "year": 1972
      },
      {
        "id": 27,
        "title": "Крёстный отец 2",
        "imdb": 9.00,
        "year": 1974
      },
      {
        "id": 1047,
        "title": "Тёмный рыцарь",
        "imdb": 9.00,
        "year": 2008
      },
      {
        "id": 223,
        "title": "Криминальное чтиво",
        "imdb": 8.90,
        "year": 1994
      }
    ];
    this.table = document.getElementById("container");
    this.init();
    console.log(this.initialArr)
  }

  init() {
    const  a = [];
    a.push(...this.data);
    this.initialArr.push(a.sort((prev, next )=> prev.id - next.id));
    const  b = [];
    b.push(...this.data);
    this.initialArr.push(b.sort((prev, next )=> next.id - prev.id));
    const  c = [];
    c.push(...this.data);
    this.initialArr.push(c.sort((prev, next )=> {
      if (prev.title > next.title) return 1;
      if (prev.title < next.title) return -1;}));
    const  d = [];
    d.push(...this.data);
    this.initialArr.push(d.sort((prev, next )=> {
      if (prev.title < next.title) return 1;
      if (prev.title > next.title) return -1;}));
    const  e = [];
    e.push(...this.data);
    this.initialArr.push(e.sort((prev, next )=> prev.imdb - next.imdb));
    const  f = [];
    f.push(...this.data);
    this.initialArr.push(f.sort((prev, next )=> next.imdb - prev.imdb));
    const  g = [];
    g.push(...this.data);
    this.initialArr.push(g.sort((prev, next )=> prev.year - next.year));
    const  h = [];
    h.push(...this.data);
    this.initialArr.push(h.sort((prev, next )=> next.year - prev.year));
  }

  getSort() {

    this.table.innerHTML = '';
    for (let line of this.initialArr[this.counter]) {
      const tr = document.createElement("tr");
      for (let field of Object.values(line)) {
        const td = document.createElement("td");
        td.classList.add("td");
        tr.appendChild(td);
        td.innerText = field;
      }
      this.table.appendChild(tr);
    }
    this.counter++;
    if (this.counter === this.initialArr.length) this.counter = 0;
  }

  start() {
    setInterval(() => this.getSort(), 3000);
  }
}

const app = new App();
app.start();
