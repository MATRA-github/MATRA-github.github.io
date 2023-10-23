var ctx = document.getElementById("myChart").getContext("2d");
const xValues = ["UF1","UF2","SEM1","UF3"];

const chart = new Chart(ctx, {
  type: "pie",
  data: {
    labels:[ 
'PERKHEMAHAN PENGAKAP DAN RENJER PUTERI PERINGKAT KEBANGSAAN',
'TEMPAT KETIGA PERKHEMAHAN PERKHEMAHAN PENGAKAP DAN RENJER PUTERI PERINGKAT KEBANGSAAN',
'PERTANDINGAN ROBO CHALLENGE PERINGKAT MRSM SE-MALAYSIA',
'PERTANDINGAN INTERNATIONAL EDUCATION INNOVATION EXPO PERINGKAT ANTARABANGSA',
'PERTANDINGAN PERINGKAT MRSM SE MALAYSIA',
],
    datasets: [{
    label:'Merit',
     data:[150,170,150,200,150],
     backgroundColor:['yellow','red','blue','purple','green','pink','cyan','indigo','brown']
    
    
    }
]
  },
  options: {
    legend: {display: true}
  }
});