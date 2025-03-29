import { Component } from '@angular/core';
import { FaqResult } from '../../models/faq/faq-result';
import { LocationComponent } from "../../components/location/location.component";

@Component({
  selector: 'app-default',
  imports: [LocationComponent],
  templateUrl: './default.component.html',
  styleUrl: './default.component.scss'
})
export class DefaultComponent {
  faqResults: FaqResult[] = [{
    answer: 'We welcome children ages 18 months (walking) to 10with programs tailored to different skill levels and developmental stages.',
    id: 1,
    question: 'What age groups do you cater to?'
  }, {
    answer: 'Absolutely! Our classes are designed to be fun and safe for all skill levels, with trained coaches guiding each session.',
    id: 2,
    question: 'Are classes safe for beginners?'
  }, {
    answer: 'You can sign up online or visit our gym for a tour and registration.',
    id: 3,
    question: 'How do I sign up my child?'
  }, {
    answer: 'Comfortable athletic clothing is recommended. Bare feet or grip socks are preferred for safety.',
    id: 4,
    question: 'What should my child wear?'
  }];
}
