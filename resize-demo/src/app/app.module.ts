import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularElementsResizerModule } from 'angular-elements-resizer';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularElementsResizerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
