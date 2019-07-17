import { Component, OnInit, ClassProvider, InjectableProvider, ValueProvider } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { Provider } from '@angular/compiler/src/core';

const color_themes = {
  Theme_D:{
    c1: '#b61877',
    c2: '#885e88',
    c3: '#c8c8c8',
    c4: '#7c2d6f',
    c5: '#505050',
    gradient: 'linear-gradient(0.40turn, #aa076b, #61045f)'
  },

  Theme_1: {
    c1: '#aa0707',
    c2: '#c56060',
    c3: '#c8c8c8',
    c4: '#aa4d4d',
    c5: '#505050',
    gradient: 'linear-gradient(0.40turn, #aa0707, #610404)'
  },
  Theme_2: {
    c1: '#696dd4',
    c2: '#696dd4',
    c3: '#c8c8c8',
    c4: '#696dd4',
    c5: '#505050',
    gradient: 'linear-gradient(0.40turn, #696dd4, #1217aa)'
  },
  Theme_3: {
    c1: '#0c5ae8',
    c2: '#53bebe',
    c3: '#c8c8c8',
    c4: '#53bebe',
    c5: '#505050',
    gradient: 'linear-gradient(0.40turn,#53bebe, #0c5ae8)'
  },
};

//--------------------------------------------------------

const theme_types={
  Theme_Default:{
    t1:'22.5px',
    t2:'none',
    t3:'center',
    t4:'#f1f1f1',
    t5:'10px',
    t6:'',
    t7:'12px'
  },
  Theme_Type_2:{
    t1:'0px',
    t2:'1px solid lightgray',
    t3:'normal',
    t4:'#ffffff',
    t5:'0px',
    t6:'10px',
    t7:'0px'
    },
  Theme_Type_3:{
    t1:'12px',
    t2:'2px solid lightgray',
    t3:'normal',
    t4:'#ffffff',
    t5:'0px',
    t6:'10px',
    t7:'12px'
    }    
};


@Component({
  selector: 'app-ayarlar',
  templateUrl: './ayarlar.page.html',
  styleUrls: ['./ayarlar.page.scss'],
})
export class AyarlarPage implements OnInit {

  constructor(private theme: ThemeService,private ThemeTypes: ThemeService) { }

  ngOnInit() {}

  changeTheme(name) {
    this.theme.setTheme(color_themes[name]);
  }

   changeThemeType(name) {
    this.ThemeTypes.setThemeType(theme_types[name]);
  } 

 /*  changeThemeType(name){
    this.settings.setActiveTheme(name);
  } */


}
