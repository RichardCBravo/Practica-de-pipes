import { Pipe, PipeTransform } from "@angular/core";



@Pipe({
    name: 'vuela'
})

export class VuelaPipe implements PipeTransform{
    transform(arg:boolean):string{
        return arg ? 'vuela' : 'no vuela';
    }
}