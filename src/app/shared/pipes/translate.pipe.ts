import { Pipe, PipeTransform } from "@angular/core";

import lang from "../../../assets/i18n/de_DE.json";

@Pipe({name: 'translate'})
export class TranslatePipe implements PipeTransform {
    transform(value: string, def?: string): string {
        if ((<any>lang)[value] === undefined) {
            return def === undefined ? "Not Found" : def;
        }
        return (<any>lang)[value];
    }
}
