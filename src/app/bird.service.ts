import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class BirdService {
  public baseUrl = "https://api.gbif.org/v1/occurrence/search?limit=10&taxonKey=212&basisOfRecord=HUMAN_OBSERVATION&datasetKey=50c9509d-22c7-4a22-a47d-8c48425ef4a7&mediaType=Sound"
  constructor(private httpClient: HttpClient) { }

  public getBirds(): Observable<any> {
    return this.httpClient.get(this.baseUrl)
  }
}
