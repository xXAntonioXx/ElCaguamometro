import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { BeerConverterFormComponent } from './beer-converter-form/beer-converter-form.component';
import { AppComponent } from './app.component';
import { AuthGuardGuard } from './guards/auth-guard.guard';

const routes: Routes = [
  {path:'login', component:LoginPageComponent},
  {path:'', component:BeerConverterFormComponent,canActivate:[AuthGuardGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
