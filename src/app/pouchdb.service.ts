import { Injectable } from '@angular/core';
import PouchDB from 'pouchdb'; // Use default import if needed

interface Expense {
  key: string;
  value: number;
}

interface Record {
  _id: string;
  date: string;
  income: number;
  expenses: Expense[];
  total: number;
}

@Injectable({
  providedIn: 'root'
})
export class PouchdbService {
  private db: PouchDB.Database;

  constructor() {
    this.db = new PouchDB('dailyFinance');
  }

  async addRecord(date: string, income: number, expenses: Expense[]): Promise<void> {
    const expenseTotal = expenses.reduce((sum, expense) => sum + expense.value, 0);
    const total = income - expenseTotal;

    const record: Record = {
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

  async updateRecord(date: string, income: number, expenses: Expense[]): Promise<void> {
    try {
      const existingRecord = await this.getRecord(date);

      // Update only the necessary fields
      const updatedRecord = {
        ...existingRecord,
        income: income,
        expenses: expenses,
        total: income - expenses.reduce((sum, expense) => sum + expense.value, 0),
      };

      // Save the updated record
      await this.db.put(updatedRecord);

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

      const records = response.rows.map((row: any) => row.doc);
      return records;
    } catch (error) {
      throw error;
    }
  }



  async calculateTotalIncomeAndExpenses(): Promise<number> {
    let totalIncome = 0;
    let totalExpenses = 0;

    try {
      const response = await this.db.allDocs({ include_docs: true });
      
      // Iterate through each record to calculate total income and expenses
      response.rows.forEach((row: any) => {
        const record = row.doc as Record;
        totalIncome += record.income; // Sum up the income
        totalExpenses += record.expenses.reduce((sum, expense) => sum + expense.value, 0); // Sum up the expenses
      });

      const netAmount:number = totalIncome - totalExpenses; // Calculate net amount

      return netAmount 
    } catch (error) {
      console.error('Error calculating total income and expenses:', error);
      throw error;
    }
  }
}
