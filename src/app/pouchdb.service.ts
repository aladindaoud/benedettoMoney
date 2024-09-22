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
      console.log('Record saved successfully!');
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
        console.log('Old record deleted successfully.');
      }
      
      // Add the new record
      await this.addRecord(date, income, expenses);
      console.log('New record added successfully!');
    } catch (error) {
      console.error('Error updating record:', error);
      throw error;
    }
  }
}
