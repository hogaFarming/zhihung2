import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'zhihuImage'
})
export class ZhihuImagePipe implements PipeTransform {
  transform(value: string): string {
    let result = value.replace(/(http:\/\/)(.*zhimg.com.*\.jpg)/g, '$1localhost:9001/$2');
    return result;
  }
}
