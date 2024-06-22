import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AppComponent } from './app.component';
import { PlacesComponent } from './pages/places/places.component';
import { SignUpComponent } from './pages/authentication/sign-up/sign-up.component';
import { LoginComponent } from './pages/authentication/login/login.component';
import { HeroSectionComponent } from './pages/home-page/hero-section/hero-section.component';
import { BookNowComponent } from './pages/book-now/book-now.component';
import { StatusUserComponent } from './pages/status-user/status-user.component';
// import { HeroSectionComponent } from './pages/home-page/hero-section/hero-section.component';
// import { HeroSectionComponent } from './pages/home-page/hero-section/hero-section.component';

export const routes: Routes = [
    // { path: '', component: AppComponent },
    { path: '', component: HomePageComponent },
    { path: 'places', component: PlacesComponent },
    // { path: 'herodetails', component: HeroSectionComponent },
    { path: 'herodetails/:id', component: HeroSectionComponent},
    { path: 'booknow', component: BookNowComponent},
    { path: 'status', component: StatusUserComponent},
    { path: 'signup', component: SignUpComponent },
    { path: 'login', component: LoginComponent }
];
