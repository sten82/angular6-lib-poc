import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'example', loadChildren: '../../node_modules/example-lib-a#ExampleLibA'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
