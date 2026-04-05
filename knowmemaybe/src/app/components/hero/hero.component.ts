import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ScrollService } from '../../services/scroll.service';
import { OWNER_ALIAS } from '../../constants/app.constants';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {
  readonly ownerAlias = OWNER_ALIAS;

  constructor(private scrollService: ScrollService) {}

  scrollToAbout(): void {
    this.scrollService.scrollTo('about');
  }
}
