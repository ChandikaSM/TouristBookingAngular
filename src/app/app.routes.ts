import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HeroSectionComponent } from './pages/home-page/hero-section/hero-section.component';
import { BookNowComponent } from './pages/book-now/book-now.component';
import { AuthComponent } from './pages/authentication/auth/auth.component';
import { SliderComponent } from './pages/slider/slider.component';
import { PlacesComponent } from './pages/places/places.component';
import { StatusUserComponent } from './pages/status-user/status-user.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { UserAdminComponent } from './admin/user-admin/user-admin.component';
import { OrderAdminComponent } from './admin/order-admin/order-admin.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { PlaceListComponent } from './pages/places/place-list/place-list.component';
import { ForgetPasswordComponent } from './pages/authentication/auth/forget-password/forget-password.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'places/:value', component: PlacesComponent },
  { path: 'places', component: PlacesComponent },
  { path: 'herodetails/:id', component: HeroSectionComponent },
  { path: 'placelist', component: PlaceListComponent },
  { path: 'booknow/:heroId', component: BookNowComponent },
  { path: 'forget', component: ForgetPasswordComponent },

  { path: 'profile', component: ProfileComponent },
  { path: 'status', component: StatusUserComponent },
  { path: 'slider', component: SliderComponent },
  { path: 'auth', component: AuthComponent },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'user', component: UserAdminComponent },
      { path: 'order', component: OrderAdminComponent }
    ],
  },
];
