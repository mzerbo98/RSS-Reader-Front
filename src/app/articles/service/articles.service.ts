import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Article } from '../models/article'
@Injectable({
	providedIn: 'root',
})
export class ArticleService {
	constructor(private http: HttpClient) {}

}
