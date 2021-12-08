import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ClientComponent } from './client/client.component';
import { HomeComponent } from './client/home/home.component';

const routes: Routes = [
    { path: '', redirectTo: '/site/home', pathMatch: 'full' },
    {path:'site',component:ClientComponent},
    {path:'home',component:HomeComponent},
    {path:'admin',component:AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
