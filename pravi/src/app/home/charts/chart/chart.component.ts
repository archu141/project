import { Component, OnInit } from '@angular/core';
import { chart } from 'highcharts';
import * as Highcharts from 'highcharts';
// import * as am4core from "@amcharts/amcharts4/core";
// import * as am4charts from "@amcharts/amcharts4/charts";
// import am4themes_animated from "@amcharts/amcharts4/themes/animated";

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  constructor() { }

  highcharts = Highcharts;

  // c1
  cart11 = {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'Technology Wise Billable Engineers',
        x:+20
      },
      tooltip: {
        pointFormat: '<b>{point.y}</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: false
          },
          showInLegend: true
        }
      },
      series: [{
       
        colorByPoint: true,
        height:'200px',
        width:'300px',
        innerSize: '20%',
        data: [{
          name: 'Java FullStack',
          y: 25,
          events: {
            click: function () {
                window.location.href = "./table_tech_billable.html"
  
            }
        }
        }, {
          name: 'MEAN Stack',
          y: 15,
          events: {
            click: function () {
                window.location.href = "./table_tech_billable.html"
  
            }
        }
        }, {
          name: 'Dot Net',
          y: 20,
          events: {
            click: function () {
                window.location.href = "./table_tech_billable.html"
  
            }
        }
        }, {
          name: 'Data Science',
          y: 30,
          events: {
            click: function () {
                window.location.href = "./table_tech_billable.html"
  
            }
        }
        }]
      }]
};

//chart2
cart1 = {
  chart: {
    type: 'pie'
},
title: {
    text: 'Technology Wise Non Billable Engineers',
    x:+20
},
tooltip: {
    headerFormat: '',
    pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
        ' <b>{point.y}</b><br/>' 
     
},
series: [{
    minPointSize: 10,
    height:'200px',
    width:'300px',
    innerSize: '20%',
    name: 'countries',
    data: [{
        name: 'Java FullStack',
        y: 500,
        events: {
            click: function () {
                window.location.href = "./table_tech_Nonbillable.html"
  
            }
        }
    }, {
        name: 'MEAN Stack',
        y: 420,
        events: {
            click: function () {
                window.location.href = "./table_tech_Nonbillable.html"
  
            }
        }
    }, {
        name: 'Dot net',
        y: 300,
        events: {
            click: function () {
                window.location.href = "./table_tech_Nonbillable.html"
  
            }
        }
    }, {
        name: 'Data Science',
        y: 250,
        events: {
            click: function () {
                window.location.href = "./table_tech_Nonbillable.html"
  
            }
        }
    }]
}]
};

//chart3
cart3 = {
chart: {
  plotBackgroundColor: null,
  plotBorderWidth: 0,
  plotShadow: false
},
title: {
  text: 'Experience Wise  Billable Engineers',
  x:+15
},
tooltip: {
      pointFormat: '{series.data.year} {point.year}: {series.name}: <b>{point.y:.0f}</b>'
    },
plotOptions: {
  pie: {
    dataLabels: {
      enabled: true,
      format: '<b>{point.year}</b> ({point.y:,.0f}) ',
      style: {
        fontWeight: 'bold',
        color: 'black'
      }
    },
    startAngle: -90,
    endAngle: 90,
    center: ['50%', '75%'],
    size: '150%'
  }
},
series: [{
  type: 'pie',
  name: 'Number of Employees',
  innerSize: '50%',
  data: [
    
    {
      year:'0 Years', y : 20,
      events : { click:function(){
        window.location.href = "./table_experience.html"
      }
    }
    },
    {
      year:'0-1 Years', y : 20,
      events : { click:function(){
        window.location.href = "./table_experience.html"
      }
    }
    },
    {
      year:'1-2 Years', y : 20,
      events : { click:function(){
        window.location.href = "./table_experience.html"
      }
    }
    },
    {
      year:'2-3 Years', y : 20,
      events : { click:function(){
        window.location.href = "./table_experience.html"
      }
    }
    },
    {
      year:'>3 Years', y : 20,
      events : { click:function(){
        window.location.href = "./table_experience.html"
      }
    }
    }
    // ['0 Years', 35 ],
    // ['0-1 Years', 35],
    // ['1-2 Years', 40],
    // ['2-3 Years', 55],
    // ['>3 Years', 60],
    
  ]
}]
};

//chart4
cart7 = {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: 0,
    plotShadow: false
  },
  title: {
    text: 'Experience Wise Non Billable Engineers',
    x:+15
  },
  tooltip: {
    pointFormat: '{series.data.year} {point.year}: {series.name}: <b>{point.y:.0f}</b>'
  },
  plotOptions: {
    pie: {
      dataLabels: {
        enabled: true,
        format: '<b>{point.year}</b> ({point.y:,.0f}) ',
        // distance: -50,
        style: {
          fontWeight: 'bold',
          color: 'black'
        }
      },
      startAngle: -90,
      endAngle: 90,
      center: ['50%', '75%'],
      size: '150%'
    }
  },
  series: [{
    type: 'pie',
    name: 'Number of Employees',
    innerSize: '50%',
    data: [
      
      {
        year:'0 Years', y : 20,
        events : { click:function(){
          window.location.href = "./table_experience.html"
        }
      }
      },
      {
        year:'0-1 Years', y : 20,
        events : { click:function(){
          window.location.href = "./table_experience.html"
        }
      }
      },
      {
        year:'1-2 Years', y : 20,
        events : { click:function(){
          window.location.href = "./table_experience.html"
        }
      }
      },
      {
        year:'2-3 Years', y : 20,
        events : { click:function(){
          window.location.href = "./table_experience.html"
        }
      }
      },
      {
        year:'>3 Years', y : 20,
        events : { click:function(){
          window.location.href = "./table_experience.html"
        }
      }
      }
      // ['0 Years', 20],
      // ['0-1 Years', 35],
      // ['1-2 Years', 40],
      // ['2-3 Years', 55],
      // ['>3 Years', 60],
      
    ]
  }]
};

  ngOnInit() {
    
  }
}















 // am4core.useTheme(am4themes_animated);

// create chart
// var chart = am4core.create("chartdiv", am4charts.GaugeChart);
// chart.innerRadius = am4core.percent(82);

/**
 * Normal axis
 */


// var axis = chart.xAxes.push(new am4charts.ValueAxis() as any);
// axis.min = 0;
// axis.max = 100;
// axis.strictMinMax = true;
// axis.renderer.radius = am4core.percent(80);
// axis.renderer.inside = true;
// axis.renderer.line.strokeOpacity = 1;
// axis.renderer.ticks.template.strokeOpacity = 1;
// axis.renderer.ticks.template.length = 10;
// axis.renderer.grid.template.disabled = true;
// axis.renderer.labels.template.radius = 40;
// axis.renderer.labels.template.adapter.add("text", function(text) {
//   return text + "%";
// })

/**
 * Axis for ranges
 */

// var colorSet = new am4core.ColorSet();

// var axis2 = chart.xAxes.push(new am4charts.ValueAxis() as any);
// axis2.min = 0;
// axis2.max = 100;
// axis2.renderer.innerRadius = 10
// axis2.strictMinMax = true;
// axis2.renderer.labels.template.disabled = true;
// axis2.renderer.ticks.template.disabled = true;
// axis2.renderer.grid.template.disabled = true;

// var range0 = axis2.axisRanges.create();
// range0.value = 0;
// range0.endValue = 50;
// range0.axisFill.fillOpacity = 1;
// range0.axisFill.fill = colorSet.getIndex(0);

// var range1 = axis2.axisRanges.create();
// range1.value = 50;
// range1.endValue = 100;
// range1.axisFill.fillOpacity = 1;
// range1.axisFill.fill = colorSet.getIndex(2);

/**
 * Label
 */

// var label = chart.radarContainer.createChild(am4core.Label);
// label.isMeasured = false;
// label.fontSize = 45;
// label.x = am4core.percent(50);
// label.y = am4core.percent(100);
// label.horizontalCenter = "middle";
// label.verticalCenter = "bottom";
// label.text = "50%";


/**
 * Hand
 */

// var hand = chart.hands.push(new am4charts.ClockHand());
// hand.axis = axis2;
// hand.innerRadius = am4core.percent(20);
// hand.startWidth = 10;
// hand.pin.disabled = true;
// hand.value = 50;

// hand.events.on("propertychanged", function(ev) {
//   range0.endValue = ev.target.value;
//   range1.value = ev.target.value;
//   axis2.invalidate();
// });

// setInterval(() => {
//   var value = Math.round(Math.random() * 100);
//   label.text = value + "%";
//   var animation = new am4core.Animation(hand, {
//     property: "value",
//     to: value
//   }, 1000, am4core.ease.cubicOut).start();
// }, 2000);
//   }