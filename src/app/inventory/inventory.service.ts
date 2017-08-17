import {Injectable} from "@angular/core";
import { Http, Response} from '@angular/http';
import "rxjs/add/operator/map";

@Injectable() 

export class InventoryService{
    private _url: string = 'apidata/inventory.json' //if have working server, point this url to working server
    constructor(private _http: Http){}
    getInventory(){
        return this._http.get(this._url)
            .map((response:Response) => response.json());  //received observable (response object), and convert to JSON format, left hand side is input and right side is output, json formatted file
    }
}