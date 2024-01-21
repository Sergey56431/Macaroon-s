import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textLenghtEditor'
})
export class TextLenghtEditorPipe implements PipeTransform {

  transform(value: string, maxLength: number = 95): string {
    if (value && value.length > maxLength) {
      value = value.substring(0, maxLength) + '...';
    }
    return value;
  }

}
