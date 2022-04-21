import { Component, OnInit } from '@angular/core'
import { ArticleService } from '../../service/articles.service'
import { Feed } from '../../models/feed'
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';


@Component({
	selector: 'article-list',
	templateUrl: './articles-list.component.html',
	styleUrls: ['./articles-list.component.scss'],
})
export class ArticleListComponent implements OnInit {
	feed: Feed = null;
  p = 1;

	constructor(private article: ArticleService) {}

	ngOnInit() {
    registerLocaleData(localeFr, 'fr');
    this.read();
	}

  read(url: string = null) {
		this.article.getFeed(url).subscribe(
      res => {
        this.feed = res;
      },
      err => {
        console.log('error getting rss', err);
      }
    );
  }
}
