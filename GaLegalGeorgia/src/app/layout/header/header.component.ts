import {
  Component,
  OnDestroy,
  OnInit,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { SsrCookieService } from 'ngx-cookie-service-ssr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  lang: any;
  isEnglish = false;
  constructor(
    private cookieService: SsrCookieService,
    public translate: TranslateService
  ) {
    this.isEnglish = translate.currentLang == 'en';
  }
  ngOnInit(): void {
    this.lang = this.cookieService.get('lang');
  }
  public changeLanguage(e: any) {
    const lang = e.target.value;
    // if (isPlatformBrowser(this.platformId)) {
    //   sessionStorage.setItem('lang', lang);
    // }
    this.cookieService.set('lang', lang);
    this.translate.use(lang);
    // this.isEnglish = !this.isEnglish;
  }
}
