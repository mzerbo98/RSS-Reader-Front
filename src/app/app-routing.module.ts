import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { ArticleListComponent } from './articles/components/articles-list/articles-list.component'

const routes: Routes = [
	{
		path: '',
		component: ArticleListComponent,
	},
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
