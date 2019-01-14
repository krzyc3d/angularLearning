import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatListComponent } from 'src/app/chat-list/chat-list.component';
import { LoginComponent } from 'src/app/login/login.component';
import { StatisticComponent } from 'src/app/statistic/statistic.component';

// const routes: Routes = [ 
//   {  path:'', redirectTo: '/login',  pathMatch: 'full'},
// {
//   path: 'login',
//   component: LoginComponent
// },
// {
//   path: 'statistic',
//   component: StatisticComponent
// },
// {  path:'home', 
//   component: ChatListComponent
// },
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
