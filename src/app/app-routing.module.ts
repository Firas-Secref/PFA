import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AuthGuardService} from "./services/auth-guard.service";

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
    loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'add-patient',
    loadChildren: () => import('./pages/add-patient/add-patient.module').then( m => m.AddPatientPageModule),
    canActivate: [AuthGuardService]

  },
  {
    path: 'pations-pop-over',
    loadChildren: () => import('./popovers/pations-pop-over/pations-pop-over.module').then( m => m.PationsPopOverPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'show-patient',
    loadChildren: () => import('./pages/show-patient/show-patient.module').then( m => m.ShowPatientPageModule),
    canActivate: [AuthGuardService]
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
    loadChildren: () => import('./pages/add-location/add-location.module').then( m => m.AddLocationPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'tracking',
    loadChildren: () => import('./pages/tracking/tracking.module').then( m => m.TrackingPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'show-profile',
    loadChildren: () => import('./pages/show-profile/show-profile.module').then( m => m.ShowProfilePageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'patient-interface',
    loadChildren: () => import('./pages/patient-interface/patient-interface.module').then( m => m.PatientInterfacePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
