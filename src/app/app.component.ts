import { Component, OnInit, signal } from '@angular/core';
import { words } from './data/data';

const TIMER_INTERVAL = 5000;

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  words = words;

  currentWord = signal(words[0]);
  remainingTime = signal<string>('00:05');
  timeout?: number;
  interval?: number;
  state = signal<'game' | 'result'>('game');

  score = 0;

  ngOnInit() {
    this.startTimer();
  }

  startTimer() {
    this.updateRemainingTime();
    clearTimeout(this.timeout);
    this.timeout = window.setTimeout(() => {
      this.completeCurrentWord();
    }, TIMER_INTERVAL);
  }

  updateRemainingTime() {
    const now = Date.now();
    clearInterval(this.interval);
    this.remainingTime.set('00:05');
    this.interval = window.setInterval(() => {
      const time = Date.now();
      const diff = time - now;
      const timeLeft = Math.max(0, Math.round((TIMER_INTERVAL - diff) / 1000));
      this.remainingTime.set(`00:0${timeLeft}`);
    }, 1000);
  }

  submit(type: 'past' | 'future') {
    if (this.currentWord().type === type) {
      this.score++;
    } else {
      this.score = Math.max(0, this.score - 1);
    }
    this.completeCurrentWord();
  }

  completeCurrentWord() {
    if (!this.words.length) {
      this.state.set('result');
      return;
    }

    const index = Math.floor(Math.random() * this.words.length);
    this.currentWord.set(this.words[index]);
    this.words.splice(index, 1);

    this.startTimer();
  }
}
