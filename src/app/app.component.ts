import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { ArticleService } from './articles/service/articles.service'

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
	title = 'Flux RSS'

	constructor(private http: HttpClient) {}

	ngOnInit() {}
}
