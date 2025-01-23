import { Pipe, PipeTransform } from '@angular/core';
import dayjs from 'dayjs';

@Pipe({
  name: 'dayjsFormat',
})
export class DayjsFormatPipe implements PipeTransform {
  transform(value: string | Date, format: string = 'YYYY-MM-DD'): string {
    return dayjs(value).format(format);
  }
}
