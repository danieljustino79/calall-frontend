import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { FormGroupRequiredMinlengthComponent } from './shared/forms/inputs/form-group-required-minlength/form-group-required-minlength.component';
import { FormGroupRequiredPatternComponent } from './shared/forms/inputs/form-group-required-pattern/form-group-required-pattern.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FormGroupRequiredMinlengthComponent,
    FormGroupRequiredPatternComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
