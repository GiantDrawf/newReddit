import { Component, Input } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-reddit';

  articles: Article[];

  constructor() {
    this.articles = [
      new Article('Angular 2','http://angular.io',10),
      new Article('Fullstack','http://fullstack.io',11),
      new Article('Angular HomePage','http://angular.io',5)
    ];
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    if ( title.value == '' || link.value == '') {
      alert('请输入正确的title或者link')
    } else {
      console.log(`Adding article title: ${title.value} and link: ${link.value}`);
      this.articles.push(new Article(title.value, link.value, 0));
      title.value = '';
      link.value = '';
      return false;
    }
  }

  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }
}
