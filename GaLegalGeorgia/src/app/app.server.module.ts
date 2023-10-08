import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { TransferState } from '@angular/platform-browser';
// import { translateServerLoaderFactory } from './shared/loaders/translate-server.loader';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  imports: [AppModule, ServerModule],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
