import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PrecautionsComponent } from './components/precautions/precautions.component';
import { NewsComponent } from './components/news/news.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [{
  path: '',
  component: DashboardComponent
},
{
  path: 'precautions',
  component: PrecautionsComponent
},
{
  path: 'news',
  component: NewsComponent
},
{
  path: 'login',
  component: LoginComponent
},
{
  path: '**',
  component: DashboardComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
