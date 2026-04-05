import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FadeInDirective } from '../../directives/fade-in.directive';
import { Question, QuestionDepthLevel } from '../../models/question.interface';
import {
  QUESTION_DEPTH_LEVELS,
  QUESTIONS_PER_DEPTH_LEVEL,
  DEPTH_LEVEL_COLORS,
} from '../../constants/app.constants';

@Component({
  selector: 'app-questions',
  standalone: true,
  imports: [CommonModule, TranslateModule, FadeInDirective],
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionsComponent {
  readonly levels = QUESTION_DEPTH_LEVELS;
  readonly activeLevel = signal<QuestionDepthLevel>('light');
  readonly depthColors = DEPTH_LEVEL_COLORS;

  readonly levelIcons: Record<QuestionDepthLevel, string> = {
    light: '🌤️',
    medium: '💭',
    deep: '🌊',
  };

  readonly questions: Record<QuestionDepthLevel, Question[]> = {
    light: this.buildQuestions('light'),
    medium: this.buildQuestions('medium'),
    deep: this.buildQuestions('deep'),
  };

  setLevel(level: QuestionDepthLevel): void {
    this.activeLevel.set(level);
  }

  onTabKeydown(event: KeyboardEvent, index: number): void {
    let newIndex = index;
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      event.preventDefault();
      newIndex = (index + 1) % this.levels.length;
    } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      event.preventDefault();
      newIndex = (index - 1 + this.levels.length) % this.levels.length;
    } else if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.setLevel(this.levels[index]);
      return;
    } else {
      return;
    }
    this.setLevel(this.levels[newIndex]);
    const tabs = document.querySelectorAll('.questions__tab');
    (tabs[newIndex] as HTMLElement)?.focus();
  }

  getLevelLabelKey(level: QuestionDepthLevel): string {
    return `QUESTIONS.LEVEL_${level.toUpperCase()}`;
  }

  getLevelDescKey(level: QuestionDepthLevel): string {
    return `QUESTIONS.LEVEL_${level.toUpperCase()}_DESC`;
  }

  private buildQuestions(depth: QuestionDepthLevel): Question[] {
    const prefix = depth.toUpperCase();
    return Array.from({ length: QUESTIONS_PER_DEPTH_LEVEL }, (_, i) => ({
      textKey: `QUESTIONS.${prefix}_${i + 1}`,
      depth,
    }));
  }
}
