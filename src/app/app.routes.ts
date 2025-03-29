import { Routes } from '@angular/router';
import { DefaultComponent } from './pages/default/default.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { PartiesComponent } from './pages/parties/parties.component';
import { LocationsComponent } from './pages/locations/locations.component';
import { CampComponent } from './pages/camp/camp.component';

export const routes: Routes = [
    {
        path: 'main',
        loadComponent: () => import('./pages/main/main.component').then(m => m.MainComponent),
        children: [
            { path: 'camp', component: CampComponent },
            { path: 'default', component: DefaultComponent },
            { path: 'parties', component: PartiesComponent },
            { path: 'about-us', component: AboutUsComponent },
            { path: 'locations', component: LocationsComponent },
            { path: '', redirectTo: 'default', pathMatch: 'full' }
        ]
    },
    { path: '', redirectTo: '/main', pathMatch: 'full' },
];
