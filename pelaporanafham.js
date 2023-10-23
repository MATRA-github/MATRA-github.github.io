var ctx = document.getElementById("myChart").getContext("2d");
const xValues = ["UF1","UF2","SEM1"];

const chart = new Chart(ctx, {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      data: [55,90,75], //pai
      borderColor: "red",
      fill: false,
      label:'Pendidikan Islam',
    },{
      data: [88,73,87], //math
      borderColor: "green",
      fill: false,
      label:'Matematik',
    },{
      data: [84,61,73],//bi
      borderColor: "blue",
      fill: false,
      label:'Bahasa Inggeris',
    },{
        data: [55,61,67],//bm
        borderColor: "yellow",
        fill: false,
        label:'Bahasa Melayu',
      },{
        data: [89,70,75],//chemistry
        borderColor: "purple",
        fill: false,
        label:'Kimia',
        
      },{
        data: [76,93,82],//physics
        borderColor: "pink",
        fill: false,
        label:'Fizik',
      },{
        data: [72,56,73],//biology
        borderColor: "brown",
        fill: false,
        label:'Biologi',
      },{
        data: [84,90,92],//addmaths
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