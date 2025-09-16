import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';
import { LoginComponent } from './pages/login/login.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { RecoveryPasswordComponent } from './pages/recovery-password/recovery-password.component';

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: 'ingresar', component: LoginComponent},
            { path: 'salir', component: LogoutComponent},
            { path: 'recuperar-clave', component: RecoveryPasswordComponent},
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
