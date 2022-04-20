import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { HttpClientModule } from '@angular/common/http'
import { ArticleListComponent } from './articles/components/articles-list/articles-list.component'
import { MatGridListModule } from '@angular/material/grid-list'
@NgModule({
	declarations: [AppComponent, ArticleListComponent],
	imports: [BrowserModule, HttpClientModule, AppRoutingModule, BrowserAnimationsModule, MatGridListModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
