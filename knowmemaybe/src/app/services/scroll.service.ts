import { Injectable, signal } from '@angular/core';
import { NAVBAR_HEIGHT_PX } from '../constants/app.constants';

@Injectable({ providedIn: 'root' })
export class ScrollService {
  readonly activeSection = signal<string>('');
  private observer: IntersectionObserver | null = null;

  scrollTo(sectionId: string): void {
    const el = document.getElementById(sectionId);
    if (!el) return;

    const top = el.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT_PX;
    window.scrollTo({ top, behavior: 'smooth' });
  }

  observeSections(sectionIds: string[]): void {
    this.observer?.disconnect();

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.activeSection.set(entry.target.id);
          }
        }
      },
      {
        rootMargin: `-${NAVBAR_HEIGHT_PX}px 0px -50% 0px`,
        threshold: 0,
      }
    );

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) this.observer.observe(el);
    }
  }

  destroy(): void {
    this.observer?.disconnect();
  }
}
