$('.counter-up').counterUp({
    delay: 10,
    time: 1000
});

let dateArr = ['Agu 21','Agu 20','Agu 19','Agu 18','Agu 17','Agu 16','Agu 15','Agu 14','Agu 13','Agu 12','Agu 11',]
let orderCountArr =[7,17,6,10,6,12,18,6,8,20,6]
let viewerCountArr =[13,30,15,14,20,29,23,16,23,33,16]

var ctx = document.getElementById('ov').getContext('2d');
const gradientColor = ctx.createLinearGradient(0, 0, 500, 0);
let secondGradientColor = ctx.createLinearGradient(0, 0, 500, 0,)
let thirdGradientColor = ctx.createLinearGradient(0, 0, 500, 0,)
// x0 = starting point horizontal
// y0 =staring point vartiacl
// x1 =ending point horizontal
// y1 =ending point vaarital
gradientColor.addColorStop(0,'#FF0099')
gradientColor.addColorStop(1,'#FFE600' )
secondGradientColor.addColorStop(0,'#4568DC')
secondGradientColor.addColorStop(1,'#B06AB3')
thirdGradientColor.addColorStop(0,'#FF0099')
thirdGradientColor.addColorStop(1,'#928dab')
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: dateArr,
        datasets: [
            {
           
            label: 'Order Count',
            data: orderCountArr,
            backgroundColor:secondGradientColor,
            borderColor: secondGradientColor,
            borderWidth: 1,
                tension:0,
        },
            {
                label: 'Viewer Count',
                data: viewerCountArr,
                 backgroundColor: gradientColor,
                borderColor:gradientColor,
                borderWidth: 1,
                tension: 0
            }
        ]
    },
    options: {
        scales: {
            yAxes: [{
                gridLines: {
                    display: false
                },
                ticks: {


                },

            }],
            xAxes:[
                {
                    gridLines:{
                        display:false
                    },
                    ticks: {

                    },

                }
            ],



        },
        legend:{

            display: true,
            position: 'top',
            labels: {
                fontColor: '#909090',
                usePointStyle: true
            }
        }
    }
});
let oderFormPlace =[5,15,8,9,7];
let place =["YGN","MDY","NPY","SHAN","MGW"];

var op = document.getElementById('op').getContext('2d');
var op = new Chart(op, {
    type: 'doughnut',
    data: {
        labels: place,
        datasets: [{
            label: '# of Votes',
            data: oderFormPlace,
            backgroundColor: [

                '#FF3D67',

                '#36A2EB',

                '#22CECE',  '#FFC533',
                '#8142FF',
            ],
            borderColor: [

                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',

                'rgba(75, 192, 192, 1)','rgba(255, 206, 86, 1)',
                'rgba(153, 102, 255, 1)',

            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    display:false,
                }
                ,gridLines:{
                    display:false,
                }
            }]
        },
        legend:{

            display: true,
            position: 'bottom',
            labels: {
                fontColor: '#909090',
                usePointStyle: true
            }
        }
    }
});