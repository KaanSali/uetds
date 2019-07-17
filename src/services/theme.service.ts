import { Injectable,Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { LocalStoreService } from 'src/services/localstore.service';
import { BehaviorSubject } from 'rxjs';
//-------------------------------------

const defaults = {
  c1: '#b61877',
  c2: '#885e88',
  c3: '#c8c8c8',
  c4: '#7c2d6f',
  c5: '#505050',
  gradient: 'linear-gradient(0.40turn, rgb(170, 7, 107), rgb(97, 4, 95))'
};

//--------------------------------------
function CSSColorGenerator(colors) {
  colors = { ...defaults, ...colors };

  const { c1,c2,c3,c4,c5,gradient } = colors;

  return `
    --color-primary       : ${c1};
    --fab-button-color    : ${gradient};
    --save-label-color    : ${c1};
    --button-color        : ${gradient};
    --arac-list-subtitle  : ${c2};
    --arac-list-subtitle-P: ${c3};
    --pers-list-subtitle  : ${c4};
    --pers-list-subtitle-P: ${c5};
`;
}
//--------------------------------------
const defaultType={
t1:'22.5px',
t2:'none',
t3:'',
t4:'#f1f1f1',
t5:'10px',
t6:'',
t7:'12px'
};

function CSSThemeGenerator(types) {
  types = { ...defaultType, ...types };

  const { t1,t2,t3,t4,t5,t6,t7 } = types;

  return `
    --input-border-radius: ${t1};
    --input-border       : ${t2};
    --input-label-align  : ${t3};
    --input-background   : ${t4};
    --input-label-border-radius: ${t5};
    --input-label-left   : ${t6};
    --image-border-radius: ${t7};
`;
}

//--------------------------------------

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor( @Inject(DOCUMENT) private document: Document, private lss: LocalStoreService ) { 

    lss.loginsession.getItem('theme').then((cssText:string) => {  // <--- GET SAVED THEME
      this.setGlobalCSS(cssText);
      });
   
    lss.loginsession.getItem('ThemeType').then((cssText2:string) => {  // <--- GET SAVED THEME
      this.setGlobalCSSTheme(cssText2);
      });  
    }
    
   setTheme(theme) {
    const cssText = CSSColorGenerator(theme);
    this.setGlobalCSS(cssText);
    this.lss.loginsession.setItem('theme', cssText);
  }

  private setGlobalCSS(css: string) {
    this.document.documentElement.style.cssText +=';'+ css;
  }

  //--------------------------------------------------------------

  setThemeType(ThemeType) {
    const cssText = CSSThemeGenerator(ThemeType);
    this.setGlobalCSSTheme(cssText);
    this.lss.loginsession.setItem('ThemeType', cssText);
  }

  private setGlobalCSSTheme(css: string) {
    this.document.documentElement.style.cssText +=';'+ css;
  } 
}
