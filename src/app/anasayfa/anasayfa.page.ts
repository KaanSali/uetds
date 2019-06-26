import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{NavController,ModalController,PopoverController} from '@ionic/angular';
import { PopoverComponent } from '../popover/popover.component';
import * as $ from 'jquery';

@Component({
  selector: 'app-anasayfa',
  templateUrl: './anasayfa.page.html',
  styleUrls: ['./anasayfa.page.scss'],
})
export class AnasayfaPage implements OnInit {


  constructor(public router:Router,
              private nav:NavController, 
              private modalController:ModalController, 
              private popoverController:PopoverController) { }

       

  googleChartLibrary;

  //----------------------------------------------------------------------------

  // Callback that creates and populates a data table,
  // instantiates the pie chart, passes in the data and
  // draws it.
  drawChart () {
    // Create the data table.
    var data = new this.googleChartLibrary.visualization.DataTable();
    data.addColumn('string', 'Activity Name');
    data.addColumn('number', 'Hours');
    data.addRows([
      ['Sleeping', 8],
      ['Working', 8],
      ['Sports', 2],
      ['Eating', 2],
      ['Social', 2]
    ]);

    // Instantiate and draw our chart, passing in some options.
    var chart = new this.googleChartLibrary.visualization
      .PieChart(document.getElementById('pie-chart-div'));

    chart.draw(data, {
      'title': '',
      'legend':'none',
      'width': '100%',
      'height':'100%',
      pieHole:0.3,
      pieSliceText: 'label',
      slices: {  4: {offset: 0.2}},
      chartArea:{top:10,width:'85%',height:'85%'},
      //colors:['red','#004411'],
    });
  }

  //----------------------------------------------------------------------------

  useVanillaJSLibrary() {
    this.googleChartLibrary = (<any>window).google;
    // Load the Visualization API and the corechart package.
    this.googleChartLibrary.charts.load('current', { 'packages': ['corechart'] });

    // Set a callback to run when the Google Visualization API is loaded.
    this.googleChartLibrary.charts.setOnLoadCallback(this.drawChart.bind(this));
  }

  //----------------------------------------------------------------------------
  addPage(){
    this.router.navigate(['/yolculuklarim']);
 }

 closePopover(){
   this.popoverController.dismiss();
 }

  ngOnInit() {
    this.useVanillaJSLibrary();
    //$("#pie-chart-div").hide();
  }

  async popSeferEkle(ev : any){
    const popSefer = await this.popoverController.create({
      component : PopoverComponent,
      event:ev,
      translucent: true
    });
    popSefer.present();
  }

}
