var ctx = document.getElementById("myChart").getContext("2d");
const xValues = ["UF1","UF2","SEM1","UF3"];

const chart = new Chart(ctx, {
  type: "pie",
  data: {
    labels:[ 
'	GLOBAL LEADERSHIP SUMMIT MRSM SE-MALAYSIA',
'PENGLIBATAN KOKURIKULUM PERINGKAT DAERAH',
'	KEJOHANAN CATUR DAERAH BERA',
'KHIDMAT MASYARAKAT BADAN BERUNIFORM PERINGKAT MAKTAB',
'	KELIMA: SUKAN TAHUNAN MAKTAB HARI SUKAN TAHUNAN MAKTAB',
'KEJOHANAN CATUR PERINGKAT NEGERI PAHANG',
],
    datasets: [{
    label:'Merit',
     data:[150,90,90,150,20,110],
     backgroundColor:['yellow','red','blue','purple','green','pink','cyan','indigo','brown']
    
    
    }
]
  },
  options: {
    legend: {display: false}
  }
});