// Original JS Code
// const year = document.getElementById("year")
// const thisYear = new Date().getFullYear()
// year.setAttribute("datetime", thisYear)
// year.textContent = thisYear

const year = document.getElementById("year") as HTMLElement
const thisYear: number | string = new Date().getFullYear().toString()
year.setAttribute("datetime", thisYear)
year.textContent = thisYear