const data = [
  {mes: "Enero", total: 10},
  {mes: "Febrero", total: 20},
  {mes: "Marzo", total: 14},
  {mes: "Abril", total: 21},
  ];

function crearChart(){

   const canvas = document.getElementById('myChart');
   new Chart(canvas,
  
   {
     type: 'pie',
     data: {
       labels: data.map(row => row.mes),
       datasets: [
         {
           label: 'Acquisitions by month',
           data: data.map(row => row.total)
         }
       ]
     }
   });

}
crearChart();