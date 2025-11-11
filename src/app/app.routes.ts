import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Favorite } from './components/favorite/favorite';

export const routes: Routes = [
    {path: '', component: Home  },
    {path: 'favorite', component: Favorite},
    {path: 'home', component: Home},
];
