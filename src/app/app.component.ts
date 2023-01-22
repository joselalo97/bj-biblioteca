import { Component, OnInit } from '@angular/core';
import { Preferences } from './preferences';

declare var gtag;
@Component({
  selector: 'app-root',
  template: `
    <section
      [style.fontSize.px]="preferences.pixelsBase"
      [className]="getClasses()"
    >
      <article class="wrapper">
        <router-outlet></router-outlet>
      </article>
      <article class="toggle-scroll">
        <toggle-scroll></toggle-scroll>
      </article>
    </section>
    <loader></loader>
  `,
  styles: [
    `
      .toggle-scroll {
        position: fixed;
        bottom: 2rem;
        right: 0.5rem;
        z-index: 5;
      }
    `,
  ],
})
export class AppComponent implements OnInit {
  constructor(
    public readonly preferences: Preferences,
  ) {

    // const navEndEvents$ = this.router.events.pipe(
    //   filter((event) => event instanceof NavigationEnd)
    // );

    // navEndEvents$.subscribe((event: NavigationEnd) => {
    //   gtag("config", "G-Y06W35388F", {
    //     page_path: event.urlAfterRedirects,
    //   });
    //   if (event) this.seoService.createURLCanonical();
    // });
  }



  public ngOnInit(): void {

  }

  public getClasses(): string {
    return `scjn-app ${this.preferences.skin} ${this.preferences.fontBase}`;
  }
}