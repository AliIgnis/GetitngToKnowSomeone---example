import { Component, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { WhyYouComponent } from './components/why-you/why-you.component';
import { GettingToKnowComponent } from './components/getting-to-know/getting-to-know.component';
import { DateIdeasComponent } from './components/date-ideas/date-ideas.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { FunFactsComponent } from './components/fun-facts/fun-facts.component';
import { TheInviteComponent } from './components/the-invite/the-invite.component';
import { FooterComponent } from './components/footer/footer.component';
import { ScrollService } from './services/scroll.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    AboutMeComponent,
    WhyYouComponent,
    GettingToKnowComponent,
    DateIdeasComponent,
    QuestionsComponent,
    FunFactsComponent,
    TheInviteComponent,
    FooterComponent,
  ],
  template: `
    <app-navbar />
    <main>
      <app-hero />
      <app-about-me />
      <app-why-you />
      <app-getting-to-know />
      <app-date-ideas />
      <app-questions />
      <app-fun-facts />
      <app-the-invite />
    </main>
    <app-footer />
  `,
  styles: [`
    :host {
      display: block;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit, OnDestroy {
  private readonly sectionIds = [
    'hero', 'about', 'why-you', 'getting-to-know',
    'date-ideas', 'questions', 'fun-facts', 'the-invite',
  ];

  constructor(private scrollService: ScrollService) {}

  ngOnInit(): void {
    this.scrollService.observeSections(this.sectionIds);
  }

  ngOnDestroy(): void {
    this.scrollService.destroy();
  }
}
