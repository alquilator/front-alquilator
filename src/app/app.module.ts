import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';

// Services section
import { AuthService } from './shared/services/auth.service';
import { UserRegistrationService } from './shared/services/user-registration.service';
import { ProductService } from './shared/services/product.service';

// Components section
import { AppComponent } from './app.component';
import { ProductBookingComponent } from './pages/product-booking/product-booking.component';
import { CategoryComponent } from './pages/category/category.component';
import { GeneralComponent } from './pages/general/general.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { NewProductComponent } from './pages/new-product/new-product.component';
import { UserRegistrationComponent } from './pages/user-registration/user-registration.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { UserAreaComponent } from './pages/user-area/user-area.component';
import { UserLoginComponent } from './pages/user-login/user-login.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { EachProductComponent } from './pages/each-product/each-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductBookingComponent,
    UserRegistrationComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    UserAreaComponent,
    UserLoginComponent,
    CategoryComponent,
    GeneralComponent,
    ProfileComponent,
    NewProductComponent,
    AboutUsComponent,
    EachProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    GoogleMapsModule
  ],
  providers: [
    AuthService, 
    UserRegistrationService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
