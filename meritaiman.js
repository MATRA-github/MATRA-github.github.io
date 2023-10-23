var ctx = document.getElementById("myChart").getContext("2d");
const xValues = ["UF1","UF2","SEM1","UF3"];

const chart = new Chart(ctx, {
  type: "pie",
  data: {
    labels:[ 
        'KEJOHANAN RAGBI PERINGKAT MRSM ZON BARAT',
        'NAIB JOHAN RAGBI MSSP',
        'PROGRAM GLOBAL LEADERSHIP SUMMIT PERINGKAT KEBANGSAAN',
        'JOHAN KARNIVAL MRSM PLATOON SUMMIT PERINGKAT KEBANGSAAN',
        'KARNIVAL MRSM PLATOON SUMMIT PERINGKAT KEBANGSAAN',
    'PROGRAM KHIDMAT MASYARAKAT AKTIVITI ALAM SEKITAR PERINGKAT MAKTAB',
'PERTANDINGAN PERINGKAT NEGERI PAHANG','PERTANDINGAN PERINGKAT NEGERI PAHANG','NAIB JOHAN KEJOHANAN RAGBI MRSM ZON BARAT'],
    datasets: [{
    label:'Merit',
     data:[90,140,150,220,150,150,110,110,120],
     backgroundColor:['yellow','red','blue','purple','green','pink','cyan','indigo','brown']
    
    
    }
]
  },
  options: {
    legend: {display: false}
  }
});