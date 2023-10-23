var ctx = document.getElementById("myChart").getContext("2d");
const xValues = ["UF1","UF2","SEM1","UF3"];

const chart = new Chart(ctx, {
  type: "pie",
  data: {
    labels:[ 
'	KHIDMAT MASYARAKAT AKTIVITI KEJIRANAN PERINGKAT MAKTAB',
'	KHIDMAT MASYARAKAT AKTIVITI KEJIRANAN PERINGKAT MAKTAB',
'	KHIDMAT MASYARAKAT AKTIVITI KEJIRANAN PERINGKAT MAKTAB',
'	KHIDMAT MASYARAKAT AKTIVITI KEJIRANAN PERINGKAT MAKTAB',
'	KHIDMAT MASYARAKAT AKTIVITI KEJIRANAN PERINGKAT MAKTAB',
'	KHIDMAT MASYARAKAT AKTIVITI KEJIRANAN PERINGKAT MAKTAB',
],
    datasets: [{
    label:'Merit',
     data:[150,150,150,150,150,150],
     backgroundColor:['yellow','red','blue','purple','green','pink','cyan','indigo','brown']
    
    
    }
]
  },
  options: {
    legend: {display: false}
  }
});