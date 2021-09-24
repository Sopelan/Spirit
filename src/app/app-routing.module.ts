import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorComponent } from './pagina/error/error.component';

const routes: Routes = [
 
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'registro', loadChildren: () => import('./registro/registro.module').then(m => m.RegistroModule) },
  { path: '', loadChildren: () => import('./pagina/pagina.module').then(m => m.PaginaModule) },
  {path: '**',component: ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
