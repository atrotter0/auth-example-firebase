import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicComponent } from './public/public.component';

const appRoutes: Routes = [
  {
    path: '',
    component: PublicComponent
  },
  {
    path: 'public',
    component: PublicComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
