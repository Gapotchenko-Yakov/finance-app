export interface ExpensesByCategory {
  salaries: number;
  supplies: number;
  services: number;
}

export interface MonthData {
  month: string;
  revenue: number;
  expenses: number;
  operationalExpenses: number;
  nonOperationalExpenses: number;
  _id: string;
  id: string;
}

export interface DayData {
  date: string;
  revenue: number;
  expenses: number;
  _id: string;
  id: string;
}

export interface GetKpisResponse {
  id: string;
  _id: string;
  __v: number;
  totalProfit: number;
  totalRevenue: number;
  totalExpenses: number;
  expensesByCategory: ExpensesByCategory;
  monthlyData: MonthData[];
  dailyData: DayData[];
  createdAt: string;
  updatedAt: string;
}
