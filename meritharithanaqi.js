var ctx = document.getElementById("myChart").getContext("2d");
const xValues = ["UF1","UF2","SEM1","UF3"];

const chart = new Chart(ctx, {
  type: "pie",
  data: {
    labels:[ 
        'PERKHEMAHAN PENGAKAP DAN RENJER PUTERI PERINGKAT KEBANGSAAN',
        'TEMPAT KETIGA PERKHEMAHAN PERKHEMAHAN PENGAKAP DAN RENJER PUTERI PERINGKAT KEBANGSAAN',
        'MENYERTAI PROGRAM GLOBAL LEADERSHIP SUMMIT MRSM SE-MALAYSIA(ZON BARAT)',],
    datasets: [{
    label:'Merit',
     data:[150,170,150],
     backgroundColor:['yellow','red','blue']
    
    
    }
]
  },
  options: {
    legend: {display: true}
  }
});