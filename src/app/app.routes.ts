import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AppComponent } from './app.component';
import { HeroSectionComponent } from './pages/home-page/hero-section/hero-section.component';
import { BookNowComponent } from './pages/book-now/book-now.component';
import { AuthComponent } from './pages/authentication/auth/auth.component';
import { NavBarComponent } from './pages/home-page/nav-bar/nav-bar.component';
import { SliderComponent } from './pages/slider/slider.component';
import { PlacesComponent } from './pages/places/places.component';
import { StatusUserComponent } from './pages/status-user/status-user.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { UserAdminComponent } from './admin/user-admin/user-admin.component';
import { OrderAdminComponent } from './admin/order-admin/order-admin.component';
import { ManageComponent } from './admin/manage/manage.component';
import { SettingComponent } from './admin/setting/setting.component';
import { ProfileComponent } from './pages/profile/profile.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'places/:value', component: PlacesComponent },
  { path: 'places', component: PlacesComponent },
  { path: 'herodetails/:id', component: HeroSectionComponent },
  { path: 'herodetails/:name', component: HeroSectionComponent },
  { path: 'booknow/:heroId', component: BookNowComponent },

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
      { path: 'order', component: OrderAdminComponent },
      { path: 'manage', component: ManageComponent },
      { path: 'setting', component: SettingComponent }
    ]
  },
];
