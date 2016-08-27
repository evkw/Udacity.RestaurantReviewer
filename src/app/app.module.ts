import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MdCoreModule } from '@angular2-material/core';
import { MdProgressBarModule } from '@angular2-material/progress-bar';
import { MdRadioModule } from '@angular2-material/radio';
import { MdCardModule } from '@angular2-material/card';
import { MdMenuModule } from '@angular2-material/menu';
import { MdToolbarModule } from '@angular2-material/toolbar';
import { MdIconModule } from '@angular2-material/icon';

import { AppComponent }  from './app.component';

@NgModule({
  imports: [ 
    BrowserModule,

    // Material Design
    MdCoreModule,
    MdProgressBarModule,
    MdRadioModule,
    MdCardModule,
    MdMenuModule,
    MdToolbarModule,
    MdIconModule
    
    ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }