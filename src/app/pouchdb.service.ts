import { Injectable } from '@angular/core';
import PouchDB from 'pouchdb';

@Injectable({
  providedIn: 'root'
})

export class PouchdbService {
  private db: PouchDB.Database;

  constructor() {
    this.db = new PouchDB('dailyFinance');
  }

  async addRecord(date: string, income: number, expenses: { key: string; value: number }[]): Promise<void> {
    const expenseTotal = expenses.reduce((sum, expense) => sum + expense.value, 0);
    const total = income - expenseTotal;

    const record = {
      _id: date,
      date: date,
      income: income,
      expenses: expenses,
      total: total
    };

    try {
      await this.db.put(record);
   
    } catch (error) {
      console.error('Error saving record:', error);
      throw error;
    }
  }

  async getRecord(date: string): Promise<any> {
    try {
      const record = await this.db.get(date);
      return record;
    } catch (error) {
      console.error('Error retrieving record:', error);
      throw error;
    }
  }


  async updateRecord(date: string, income: number, expenses: { key: string; value: number }[]): Promise<void> {
    try {
      // Retrieve the existing record
      const existingRecord = await this.getRecord(date);
      if (existingRecord) {
        // Delete the old record
        await this.db.remove(existingRecord);
       
      }
      
      // Add the new record
      await this.addRecord(date, income, expenses);
 
    } catch (error) {
      console.error('Error updating record:', error);
      throw error;
    }
  }



  async getRecordsByMonth(month: string): Promise<any[]> {
    try {
      const response = await this.db.allDocs({
        include_docs: true,
        startkey: `${month}-01`,
        endkey: `${month}-31`
      });

      const records = response.rows.map(row => row.doc);
      return records;
    } catch (error) {
       
      throw error;
    }
  }
}
