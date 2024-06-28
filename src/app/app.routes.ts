import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AppComponent } from './app.component';
import { PlacesComponent } from './pages/places/places.component';
import { HeroSectionComponent } from './pages/home-page/hero-section/hero-section.component';
import { BookNowComponent } from './pages/book-now/book-now.component';
import { StatusUserComponent } from './pages/status-user/status-user.component';
import { PlacesListComponent } from './pages/home-page/search/places-list/places-list.component';
import { SliderComponent } from './pages/slider/slider.component';
import { AuthComponent } from './pages/authentication/auth/auth.component';
import { NavBarComponent } from './pages/nav-bar/nav-bar.component';
import { AuthGuard } from './pages/authentication/auth/auth.guard';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'places/:value', component: PlacesComponent },
  { path: 'places', component: PlacesComponent },
  { path: 'herodetails/:id', component: HeroSectionComponent },
  { path: 'booknow', component: BookNowComponent },
  { path: 'status', component: StatusUserComponent, canActivate: [AuthGuard]},
  { path: 'placelist', component: PlacesListComponent },
  { path: 'slider', component: SliderComponent },
  { path: 'auth', component: AuthComponent}
];
