import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route, Router } from '@angular/router';
import { mergeMap } from 'rxjs/operators';
import {  Observable, timer } from 'rxjs';
// import 'rzjs/add/observable/of'
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomPreloadingStrategyService implements PreloadingStrategy{

  preload(route: Route, load: () => Observable<any>): Observable<any> {
    if(route.data && route.data['preload']){
      console.log("preload path "+ route.path)
      if(route.data['delay']){
        // return timer(5000).mergeMap(()=>load())
        return timer(5000).pipe(mergeMap(() => load()));
      }
      return load()

    }
    else{
      return of(null)
    }
      
  }

  constructor() { }
}
