// var ctx = document.getElementById("myChart").getContext('2d');
// var myChart = new Chart(ctx, {
//   type: 'pie',
//   data: {
//     labels: ["Selected Student 8 in top 20", " Selected Student 20 in top 30", "Selected Student 30 in top 50"],
//     datasets: [{
//       backgroundColor: [
//         "#2ecc71",
//         "#e74c3c",
//         "#34495e"
//       ],
//       data: [20, 30,  50]
//     }]
//   }
// });
window.onload=function(){/*from   w w w  .  j  a va2 s .c om*/
    /** Watch carefully,
    If you set one 'undefined' values on any of the dataset, it will result in the labels being crossed (or strikethrough). This means that if you only use one dataset, and you don't want the labels being shown in the chart and getting the labels crossed you want to set the values to 'undefined'.
    Null values will get you same result *without* the labels being crossed.
    So you want to use 'undefined' values if you would like to cross the label and hide the data, and you want to use 'null' values if you would like to just hide the data without getting the labels crossed.
    Try to play around with it and use it as you like.
    */
    var ctx = document.getElementById("myDoughnut").getContext("2d");
    var myChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ["8 in Top 20", "20 in Top 50", "30 in Top 100"],
        datasets: [{
          label: '# of Votes',
          data: [8, 20, 30],
          // Play around with null and undefined values and see the difference on how the Chart reacts.
          backgroundColor: [
            '#f87979',
            '#79f879',
            '#7979f8'
          ],
          borderWidth: 1
        }, ]
      },
      options: {
        tooltips: {
          mode: null
        },
        plugins: {
          datalabels: {

            borderWidth: 5,
            borderColor: "white",
            borderRadius: 4,
            // color: 0,
            font: {
              weight: "bold"
            },
            backgroundColor: "white"
          }
        }
      }
    });
        }