import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: 'sobre',
    component: AboutComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'lidos',
        component: HomeComponent,
      },
      {
        path: 'nao-lidos',
        component: HomeComponent,
      },
      {
        path: 'todos',
        component: HomeComponent,
      },
    ],
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
