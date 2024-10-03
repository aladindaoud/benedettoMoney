import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PouchdbKeywordsService } from '../pouchdb-keywords.service';
 

@Component({
  selector: 'app-keyword-list',
  templateUrl: './keyword-list.component.html',
})
export class KeywordListComponent implements OnInit {
  keywords: any[] = [];

  constructor(private modalCtrl: ModalController, private pouchdbKeywordService: PouchdbKeywordsService) {}

  ngOnInit() {
    this.loadKeywords();
  }

  async loadKeywords() {
    try {
      this.keywords = await this.pouchdbKeywordService.getAllKeywords();
    } catch (error) {
      console.error('Error loading keywords:', error);
    }
  }

  selectKeyword(keyword: string) {
    this.modalCtrl.dismiss({ keyword });
  }

  dismissModal() {
    this.modalCtrl.dismiss();
  }
}
