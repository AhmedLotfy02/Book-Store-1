import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';

import { MatStepperModule } from '@angular/material/stepper';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSliderModule } from '@angular/material/slider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainStoreComponent } from './main-store/main-store.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SearchToolBarComponent } from './search-tool-bar/search-tool-bar.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { PopUpFormComponent } from './pop-up-form/pop-up-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { SuccessSignUpComponent } from './success-sign-up/success-sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginPageComponent,
    MainStoreComponent,
    SignUpComponent,
    SearchToolBarComponent,
    SearchResultComponent,
    PopUpFormComponent,
    AdminPanelComponent,
    SuccessSignUpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatSidenavModule,
    MatIconModule,
    MatGridListModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
