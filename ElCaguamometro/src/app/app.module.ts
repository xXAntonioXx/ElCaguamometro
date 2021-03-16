import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeerConverterFormComponent } from './beer-converter-form/beer-converter-form.component';
import { FormsModule } from '@angular/forms';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ValidationsDirective } from './directives/validations.directive';
import { BeerListModalComponent } from './beer-list-modal/beer-list-modal.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ResultOutputComponent } from './result-output/result-output.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AuthInterceptorInterceptor } from './interceptors/auth-interceptor.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    BeerConverterFormComponent,
    ValidationsDirective,
    BeerListModalComponent,
    ResultOutputComponent,
    LoginPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass : AuthInterceptorInterceptor,
      multi : true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
