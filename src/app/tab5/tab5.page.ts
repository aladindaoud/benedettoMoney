import { Component, OnInit } from '@angular/core';
import { PouchdbKeywordsService } from '../pouchdb-keywords.service';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {

  keyword: string = '';
 
  keywords: any[] = []; // Array to hold the keywords
  constructor(private pouchdbKeywordService: PouchdbKeywordsService) {}


  ngOnInit(): void {
    this.loadKeywords();
  }

  // Load all keywords from PouchDB
  async loadKeywords(): Promise<void> {
    try {
      this.keywords = await this.pouchdbKeywordService.getAllKeywords();
    } catch (error) {
      console.error('Error loading keywords:', error);
    }
  }

  async onSubmit(): Promise<void> {
    try {
      await this.pouchdbKeywordService.addKeyword(this.keyword);
     
      this.keyword = ''; // Reset the input field
      await this.loadKeywords(); // Refresh the keyword list
    } catch (error) {
     
      console.error(error);
    }
  }

  async deleteKeyword(keywordId: string): Promise<void> {
    try {
      await this.pouchdbKeywordService.deleteKeyword(keywordId);
      await this.loadKeywords(); // Refresh the keyword list after deletion
    } catch (error) {
      console.error('Error deleting keyword:', error);
    }
  }

}
