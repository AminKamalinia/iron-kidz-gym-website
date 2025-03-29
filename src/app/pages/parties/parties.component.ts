import { Component } from '@angular/core';
import { FaqResult } from '../../models/faq/faq-result';

@Component({
  selector: 'app-parties',
  imports: [],
  templateUrl: './parties.component.html',
  styleUrl: './parties.component.scss'
})
export class PartiesComponent {
  faqResults: FaqResult[] = [{
    answer: 'Our standard party packages include 90 minutes of fun-filled activities and celebration time.',
    id: 0,
    question: 'How long are the parties?'
  }, {
    answer: 'Our parties include basic martial art skills , obstacle courses, group games, and plenty of active playtime led by our trained coaches.',
    id: 1,
    question: 'What activities are included in an IRONKIDZ party?'
  }, {
    answer: 'Yes! You\'re welcome to bring decorations, but we also offer themed party packages for added convenience.',
    id: 2,
    question: 'Can we bring our own decorations?'
  }, {
    answer: 'You\'re welcome to bring your own food and cake.',
    id: 3,
    question: 'Is food included?'
  }, {
    answer: 'You can book online, call us, or visit our gym to check availability and party package options.',
    id: 4,
    question: 'How do I book a party?'
  }];
}
