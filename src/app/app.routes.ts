import { Routes } from '@angular/router';
import path from 'path';
import { HomeComponent } from './home/home.component';
import { GaleryComponent } from './galery/galery.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'galery', component: GaleryComponent },
    { path: 'loginVladi', component: LoginComponent }
];
