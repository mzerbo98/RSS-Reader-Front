export class Article {
	title: string = '';
	content: string = '';
	link: string = '';
	contentSnippet: string = '';
	isoDate: Date = null;

	constructor(data = null) {
		if (data) {
      this.title = data.title;
      this.content = data.content;
      this.link = data.link;
      this.contentSnippet = data.contentSnippet;
      this.isoDate = new Date(data.isoDate);
    }
	}
}
