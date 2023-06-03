import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchProComponent } from './pages/Home/home-pro/home-pro.component';
import { MatCardModule } from '@angular/material/card';
import { CardComponent } from './pages/Home/card/card.component';
import { Card2Component } from './pages/card2/card2.component';
import { Card3Component } from './pages/card3/card3.component';
import { Card4Component } from './pages/card4/card4.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SearchProComponent,
    CardComponent,
    Card2Component,
    Card3Component,
    Card4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
