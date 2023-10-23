var ctx = document.getElementById("myChart").getContext("2d");
const xValues = ["UF1","UF2","SEM1","UF3"];

const chart = new Chart(ctx, {
  type: "pie",
  data: {
    labels:[ 
'PERKHEMAHAN PANDU PUTERI PERINGKAT KEBANGSAAN',
'PENGLIBATAN KOKURIKULUM PERINGKAT DAERAH',
'PROGRAM BUDI HOLISTIC DEVELOPMENT PROGRAM',
'KHIDMAT MASYARAKAT BADAN BERUNIFORM PERINGKAT MAKTAB',
],
    datasets: [{
    label:'Merit',
     data:[150,90,90,90],
     backgroundColor:['yellow','red','blue','purple','green','pink','cyan','indigo','brown']
    
    
    }
]
  },
  options: {
    legend: {display: true}
  }
});