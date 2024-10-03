import { Injectable } from '@angular/core';
import PouchDB from 'pouchdb'; // Use default import if needed


interface Keyword {
  _id: string;  // unique identifier for the keyword
  keyword: string;
  }


@Injectable({
  providedIn: 'root'
})
export class PouchdbKeywordsService {
  private db: PouchDB.Database;
 
  constructor() {
    this.db = new PouchDB('keywordsDB');
  }

  // Add a new keyword to the database
  async addKeyword(keyword: string): Promise<void> {
    const keywordRecord: Keyword = {
      _id: keyword,  // use keyword as the unique identifier
      keyword: keyword,
    };

    try {
      await this.db.put(keywordRecord);
    } catch (error) {
      console.error('Error saving keyword:', error);
      throw error;
    }
  }

  // Retrieve a keyword by its id
  async getKeyword(keywordId: string): Promise<any> {
    try {
      const keyword = await this.db.get(keywordId);
      return keyword;
    } catch (error) {
      console.error('Error retrieving keyword:', error);
      throw error;
    }
  }

  // Retrieve all keywords
  async getAllKeywords(): Promise<Keyword[]> {
    try {
      const response = await this.db.allDocs({ include_docs: true });
      const keywords = response.rows.map((row: any) => row.doc as Keyword);
      return keywords;
    } catch (error) {
      console.error('Error retrieving all keywords:', error);
      throw error;
    }
  }

  // Update an existing keyword
  async updateKeyword(keywordId: string, newKeyword: string): Promise<void> {
    try {
      const existingKeyword = await this.getKeyword(keywordId);
      
      // Update the keyword
      const updatedKeyword: Keyword = {
        ...existingKeyword,
        keyword: newKeyword,
      };

      await this.db.put(updatedKeyword);
    } catch (error) {
      console.error('Error updating keyword:', error);
      throw error;
    }
  }

  // Delete a keyword by its id
  async deleteKeyword(keywordId: string): Promise<void> {
    try {
      const keyword = await this.getKeyword(keywordId);
      await this.db.remove(keyword);
    } catch (error) {
      console.error('Error deleting keyword:', error);
      throw error;
    }
  }

}
