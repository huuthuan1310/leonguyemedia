import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ImageModel } from './models/image.model';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AppService {
    constructor(public http: Http) { }
    private url = "https://www.googleapis.com/drive/v2/files?q='0B1p9BpazNQwDaVJqY2lPbkRsemM'+in+parents&key=AIzaSyC25h300nIJItKAiFObWdwrRLvWMV4pewA";  // URL to web API
    getListImage(): Observable<ImageModel[]> {
        return this.http.get(this.url)
            .map(this.extractData)
            .catch(this.handleError);
    }
    private extractData(res: Response) {
        let body = res.json();
        let arrayImage = [];
        body.items.forEach(images => {
            if (images.webContentLink) {
                let obj = {
                    link: images.webContentLink.replace('&export=download', ''),
                    thumb: images.thumbnailLink
                };
                arrayImage.push(obj);
            }
        });
        console.log('array', arrayImage);
        return arrayImage;
    }
    private handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}
