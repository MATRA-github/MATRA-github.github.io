var ctx = document.getElementById("myChart").getContext("2d");
const xValues = ["UF1","UF2","SEM1","UF3"];

const chart = new Chart(ctx, {
  type: "pie",
  data: {
    labels:[ 
	'	NAIB JOHAN KEJOHANAN BOLA TAMPAR MSSD BERA',
    '	KARNIVAL MRSM PLATOON PERINGKAT KEBANGSAAN',
    'TEMPAT KELIMA KARNIVAL MRSM PLATOON SUMMIT PERINGKAT KEBANGSAAN',
    '	KEJOHANAN BOLA TAMPAR MSSD BERA',
],
    datasets: [{
    label:'Merit',
     data:[120,150,130,90],
     backgroundColor:['yellow','red','blue','purple','green','pink','cyan','indigo','brown']
    
    
    }
]
  },
  options: {
    legend: {display: true}
  }
});