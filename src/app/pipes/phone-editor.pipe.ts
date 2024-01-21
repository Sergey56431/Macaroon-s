import {Input, Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'phoneEditor'
})
export class PhoneEditorPipe implements PipeTransform {

  @Input()

  transform(number: string): string {
    if (!number) { return ''; }
    return ['+', number.slice(0, 3), ' (', number.slice(3, 5), ') ', number.slice(5,8), '-',
      number.slice(8, 10), '-', number.slice(10, 12) ].join('');
  }
}
