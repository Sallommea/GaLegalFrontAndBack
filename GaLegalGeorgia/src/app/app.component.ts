import { isPlatformBrowser } from '@angular/common';
import {
  Component,
  Inject,
  Injectable,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';
import { SsrCookieService } from 'ngx-cookie-service-ssr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  lang: any;
  platformId: Object;
  constructor(
    @Inject(PLATFORM_ID) platformId: Object,
    private cookieService: SsrCookieService,
    private translate: TranslateService
  ) {
    // const lang = this.cookieService.get('cookieName');
    this.platformId = platformId;
    // this.translate.setDefaultLang('ge');
    // this.lang = this.cookieService.get('lang');
    // if (this.lang === 'ge' || this.lang === 'en') {
    //   this.translate.use(this.lang);
    // }
    // if (this.lang === '' && isPlatformBrowser(this.platformId)) {
    //   this.lang = 'ge';
    //   this.translate.setDefaultLang('ge');
    // }
  }
  ngOnInit(): void {
    this.lang = this.cookieService.get('lang');
    this.translate.use(this.lang);
  }
}
