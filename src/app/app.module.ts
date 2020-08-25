import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {RouterModule, Routes} from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { HomeComponent } from './components/home/home.component';
import { WinnerComponent } from './components/winner/winner.component';
import { LoserComponent } from './components/loser/loser.component';
import { TieComponent } from './components/tie/tie.component';


const appRouters: Routes = [
  { path: '', component: AppComponent },
  { path: 'home', component: HomeComponent},
  { path: 'winner', component: WinnerComponent},
  { path: 'loser', component: LoserComponent },
  { path: 'tie', component: TieComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoserComponent,
    WinnerComponent,
    TieComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRouters)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
