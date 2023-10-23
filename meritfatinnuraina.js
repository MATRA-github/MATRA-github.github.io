var ctx = document.getElementById("myChart").getContext("2d");
const xValues = ["UF1","UF2","SEM1","UF3"];

const chart = new Chart(ctx, {
  type: "pie",
  data: {
    labels:[ 
'PERTANDINGAN TAMRIN AMALI SAINS SOSIAL PERINGKAT MRSM SEMALAYSIA',
'KUIZ GOLDEN MATHEMATICS CHALLENGE',
'YOUNG APPRENTICE LEADERSHIP CAMP (YALE) MRSM ZON BARAT',
'PERTANDINGAN DIGITAL TECHNOVA ARENA MRSM SE-MALAYSIA',
'KEJOHANAN MERENTAS DESA MSSD BERA',
'TIER 2 PFOGRAM MALAYSIA FUTURE LEADERS SCHOOL (MFLS) PERINGKAT KEBANGSAAN',
'SUKARELAWAN KHIDMAT MASYARAKAT GOLDEN MATHEMATICS CHALLENGE',
'MENYERTAI PROGRAM GLOBAL LEADERSHIP SUMMIT MRSM SE-MALAYSIA(ZON BARAT)'],
    datasets: [{
    label:'Merit',
     data:[150,150,90,150,90,190,190,150],
     backgroundColor:['yellow','red','blue','purple','green','pink','cyan','indigo','brown']
    
    
    }
]
  },
  options: {
    legend: {display: false}
  }
});