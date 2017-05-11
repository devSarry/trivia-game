import {Pipe, PipeTransform} from '@angular/core';

export function getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}


@Pipe({
    name: 'chunks'
})
export class ChunksPipe implements PipeTransform {
    transform(arr: any, chunkSize: number) {
        return arr.reduce((prev, cur, index) => (index % chunkSize) ? prev : prev.concat([arr.slice(index, index + chunkSize)]), []);
    }
}
