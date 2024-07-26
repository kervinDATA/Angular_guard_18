import { provideRouter, Router } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { IsAdminGuard } from './core/is-admin.guard';
import { IsConnectedGuard } from './core/is-connected.guard';

export const routes = [
  { path: '', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [IsConnectedGuard] },
  { path: 'admin', component: AdminComponent, canActivate: [IsAdminGuard] },
  { path: '**', redirectTo: '' }
];

export const appRoutingProviders = [
  provideRouter(routes)
];
