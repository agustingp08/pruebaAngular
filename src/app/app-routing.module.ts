import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './componets/inicio/bienvenida/bienvenida.component';
import { LoginComponent } from './componets/inicio/login/login.component';
import { RegisterComponent } from './componets/inicio/register/register.component';

const routes: Routes = [
  {path: '', redirectTo: '/bienvenidos', pathMatch: 'full'},
  {path: 'bienvenidos', component: BienvenidaComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component:LoginComponent},
  {path: '**', redirectTo: '/bienvenidos', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
