import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/add-patient/add-patient.module').then( m => m.AddPatientPageModule),

    // redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/test-map',
    loadChildren: () => import('./test-map/test-map.module').then( m => m.TestMapPageModule)
  },
  {
    path: 'authentification',
    loadChildren: () => import('./authentification/authentification.module').then( m => m.AuthentificationPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'add-patient',
    loadChildren: () => import('./pages/add-patient/add-patient.module').then( m => m.AddPatientPageModule)
  },
  {
    path: 'pations-pop-over',
    loadChildren: () => import('./popovers/pations-pop-over/pations-pop-over.module').then( m => m.PationsPopOverPageModule)
  },
  {
    path: 'show-patient',
    loadChildren: () => import('./pages/show-patient/show-patient.module').then( m => m.ShowPatientPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'add-location',
    loadChildren: () => import('./pages/add-location/add-location.module').then( m => m.AddLocationPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
