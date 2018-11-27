import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'name'
})

export class CapitalizadoPipe implements PipeTransform {
    transform( value: string, ...args: any[] ): string {
        console.log(value);
        console.log(args);
        
        return 'Hola tu!!';
    }
}
