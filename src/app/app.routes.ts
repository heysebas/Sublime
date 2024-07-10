import { Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {path: '', redirectTo: '/Home', pathMatch: 'full' },
            {path: 'Home', component: HomeComponent},
            {path: 'Menu', component: MenuComponent}
        ]
    }
];
