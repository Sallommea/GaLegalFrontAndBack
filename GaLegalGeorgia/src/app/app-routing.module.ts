import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { AppComponent } from './app.component';
import { faHotTubPerson } from '@fortawesome/free-solid-svg-icons';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { PracticeAreasComponent } from './components/practice-areas/practice-areas.component';
import { FormSubmittedComponent } from './components/form-submitted/form-submitted.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', component: MainPageComponent },
      { path: 'about', component: AboutUsComponent },
      { path: 'contactus', component: ContactUsComponent },
      { path: 'practiceareas', component: PracticeAreasComponent },
    ],
  },
  {
    path: 'formsubmitted',
    component: FormSubmittedComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
      scrollPositionRestoration: 'top',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
