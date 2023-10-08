import { Observable, of } from 'rxjs';
import { TranslateLoader } from '@ngx-translate/core';

import { Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { en } from '../../../assets/i18n/en';
import { ge } from '../../../assets/i18n/ge';
export class TranslateServerLoader implements TranslateLoader {
  constructor(
    private prefix: string = 'i18n',
    private suffix: string = '.json'
  ) {}

  private platformId = Inject(PLATFORM_ID);

  public getTranslation(lang: string): Observable<any> {
    return lang === 'en' ? of(en) : of(ge);
  }
}

export function translateServerLoaderFactory(): TranslateLoader {
  return new TranslateServerLoader();
}
