import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name:'mayusculas'
})
export class MayusculasPipe implements PipeTransform {
    
    transform(arg:string, enMayuscular:boolean=true):string{
        return (enMayuscular) ? arg.toUpperCase() : arg.toLowerCase()
    }
}