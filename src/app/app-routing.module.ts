import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainStoreComponent } from './main-store/main-store.component';
import { PopUpFormComponent } from './pop-up-form/pop-up-form.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { SearchToolBarComponent } from './search-tool-bar/search-tool-bar.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SuccessSignUpComponent } from './success-sign-up/success-sign-up.component';

const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'mainstore', component: MainStoreComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'searchresult', component: SearchResultComponent },
  { path: 'pop', component: PopUpFormComponent },
  { path: 'admin', component: AdminPanelComponent },
  { path: 'signupSuc', component: SuccessSignUpComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
