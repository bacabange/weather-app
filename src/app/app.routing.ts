import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';

const appRoutes: Routes = [
	{ path: '', component: HomePageComponent},
	{ path: '**', component: HomePageComponent}
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);