import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'landing',
    loadChildren: () => import('./pages/landing/landing.module').then( m => m.LandingPageModule)
  },
  {
    path: 'reset-password',
    loadChildren: () => import('./pages/reset-password/reset-password.module').then( m => m.ResetPasswordPageModule)
  },
  {
    path: 'event',
    loadChildren: () => import('./pages/event/event.module').then( m => m.EventPageModule)
  },
  {
    path: 'map',
    loadChildren: () => import('./pages/map/map.module').then( m => m.MapPageModule)
  },
  {
    path: 'team',
    loadChildren: () => import('./pages/team/team.module').then( m => m.TeamPageModule)
  },
  {
    path: 'profil',
    loadChildren: () => import('./pages/profil/profil.module').then( m => m.ProfilPageModule)
  },
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  },
  {
    path: 'event-form',
    loadChildren: () => import('./forms/event-form/event-form.module').then( m => m.EventFormPageModule)
  },
  {
    path: 'terrain-form',
    loadChildren: () => import('./forms/terrain-form/terrain-form.module').then( m => m.TerrainFormPageModule)
  },
  {
    path: 'magasin-form',
    loadChildren: () => import('./forms/magasin-form/magasin-form.module').then( m => m.MagasinFormPageModule)
  },
  {
    path: 'aide-form',
    loadChildren: () => import('./forms/aide-form/aide-form.module').then( m => m.AideFormPageModule)
  },
  {
    path: 'condition-utilisation',
    loadChildren: () => import('./pages/condition-utilisation/condition-utilisation.module').then( m => m.ConditionUtilisationPageModule)
  },
  {
    path: 'team-form',
    loadChildren: () => import('./forms/team-form/team-form.module').then( m => m.TeamFormPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
