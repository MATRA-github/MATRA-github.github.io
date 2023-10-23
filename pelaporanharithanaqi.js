var ctx = document.getElementById("myChart").getContext("2d");
const xValues = ["UF1","UF2","SEM1","UF3"];

const chart = new Chart(ctx, {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      data: [42,97,86,100], //pai
      borderColor: "red",
      fill: false,
      label:'Pendidikan Islam',
    },{
      data: [38,63,58,63], //math
      borderColor: "green",
      fill: false,
      label:'Matematik',
    },{
      data: [83,89,81,85],//bi
      borderColor: "blue",
      fill: false,
      label:'Bahasa Inggeris',
    },{
        data: [50,83,73,52],//bm
        borderColor: "yellow",
        fill: false,
        label:'Bahasa Melayu',
      },{
        data: [84,70,75,70],//chemistry
        borderColor: "purple",
        fill: false,
        label:'Kimia',
        
      },{
        data: [63,93,68,70],//physics
        borderColor: "pink",
        fill: false,
        label:'Fizik',
      },{
        data: [78,63,70,78],//biology
        borderColor: "brown",
        fill: false,
        label:'Biologi',
      },{
        data: [50,20,48,30],//addmaths
        borderColor: "gray",
        fill: false,
        label:'Matematik Tambahan',
      }
]
  },
  options: {
    legend: {display: true}
  }
});