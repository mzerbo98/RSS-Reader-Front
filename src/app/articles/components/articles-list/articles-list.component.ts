import { Component, OnInit } from '@angular/core'
import { ArticleService } from '../../service/articles.service'
import { Article } from '../../models/article'

@Component({
	selector: 'article-list',
	templateUrl: './articles-list.component.html',
	styleUrls: ['./articles-list.component.scss'],
})
export class ArticleListComponent {
	articles: Article[] = []

	constructor(private article: ArticleService) {}


}
