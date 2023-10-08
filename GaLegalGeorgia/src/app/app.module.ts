import { APP_ID, LOCALE_ID, NgModule, PLATFORM_ID } from '@angular/core';
import { BrowserModule, TransferState } from '@angular/platform-browser';
import { provideClientHydration } from '@angular/platform-browser';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { translateServerLoaderFactory } from './shared/loaders/translate-browser.loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { CookieService } from 'ngx-cookie-service';
import { MainPageComponent } from './components/main-page/main-page.component';
import { CardComponent } from './shared/card/card.component';
import { InputComponent } from './shared/input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './shared/button/button.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactFormComponent } from './shared/contact-form/contact-form.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { PracticeAreasComponent } from './components/practice-areas/practice-areas.component';
import { InfoSentModalComponent } from './components/info-sent-modal/info-sent-modal.component';
import { ModalComponent } from './shared/modal/modal.component';
import { DetailsComponent } from './components/details/details.component';
import { FormSubmittedComponent } from './components/form-submitted/form-submitted.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    MainPageComponent,
    AboutUsComponent,
    ContactUsComponent,
    PracticeAreasComponent,
    InfoSentModalComponent,
    DetailsComponent,
    FormSubmittedComponent,
  ],
  imports: [
    CardComponent,
    FooterComponent,
    InputComponent,
    ButtonComponent,
    ContactFormComponent,
    ModalComponent,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        // useFactory: HttpLoaderFactory,
        useFactory: translateServerLoaderFactory,
        deps: [HttpClient, PLATFORM_ID],
      },
      defaultLanguage: 'ge',
    }),
    TransferHttpCacheModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
// export function HttpLoaderFactory(http: HttpClient) {
//   return new TranslateHttpLoader(http);
// }
