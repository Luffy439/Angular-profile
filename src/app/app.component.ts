import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="flex  container bg-bgColors flex-row  ">
    <app-nav-bar></app-nav-bar>
  <div class="bg-bgColors flex flex-col  container  "> 
  <app-search-pro class="px-[20px]"></app-search-pro>
 
 <div class="flex px-4 pt-4 justify-center gap-[6px] ">
  <app-card2 class="lg:hidden  md:hidden sm:hidden"></app-card2>
  <app-card class=" sm:w-[200px]"></app-card>
  <div class="flex flex-col px-6 lg:hidden md:hidden ms:hidden ">
  <app-card3 class=" sm:hidden " ></app-card3>
  
  <app-card4 class="flex justify-end items-end pt-[23px] sm:hidden "></app-card4>
  </div>
  
 
 </div>
  </div>
  </div>
  
  
  `,

})
export class AppComponent {
  title = 'anguler-tile';

}
