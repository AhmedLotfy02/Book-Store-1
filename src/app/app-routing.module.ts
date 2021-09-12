import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainStoreComponent } from './main-store/main-store.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { SearchToolBarComponent } from './search-tool-bar/search-tool-bar.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthGuard } from './auth/auth.guard';
import { FavoriteListComponent } from './favorite-list/favorite-list.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { LoadingScreenComponent } from './loading-screen/loading-screen.component';

const routes: Routes = [
  { path: '', component: LoginPageComponent },
  {
    path: 'mainstore',
    component: MainStoreComponent,
  },
  { path: 'fav', component: FavoriteListComponent, canActivate: [AuthGuard] },
  { path: 'checkout', component: CheckOutComponent, canActivate: [AuthGuard] },
  { path: 'signup', component: SignUpComponent },
  { path: 'redirecting', component: LoadingScreenComponent },
  {
    path: 'searchresult',
    component: SearchResultComponent,
    canActivate: [AuthGuard],
  },

  { path: 'admin', component: AdminPanelComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule {}
