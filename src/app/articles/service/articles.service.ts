import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Article } from '../models/article'
import { Observable } from 'rxjs'
import { Feed } from '../models/Feed';
@Injectable({
	providedIn: 'root',
})
export class ArticleService {
	constructor(private http: HttpClient) {}

	getFeed(url: string = null, skip: number = 0, limit: number = 0): Observable<Feed> {
    let endpoint = environment.api + '/rss?';
    if (url) {
      endpoint += 'url=' + url;
    }
    if (skip) {
      endpoint += '&skip=' + skip;
    }
    if (limit) {
      endpoint += '&limit=' + limit;
    }
		return this.http.get<Feed>(endpoint);
	}
}
