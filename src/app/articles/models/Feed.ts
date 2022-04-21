import { Article } from "./article";

export class Feed {
	title: string = '';
	description: string = '';
	link: string = '';
	items: Article[] = [];

	constructor(data = null) {
		if (data) {
      this.title = data.title;
      this.description = data.description;
      this.link = data.link;
      this.items = data.items;
    }
	}
}
