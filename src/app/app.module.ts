import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyFormComponent } from './my-form/my-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule} from '@angular/material/form-field'
import { HomeworkFormComponent } from './homework-form/homework-form.component';
import { ExchangeRateComponent } from './exchange-rate/exchange-rate.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFormComponent,
    HomeworkFormComponent,
    ExchangeRateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
