import { EntityRepository, Repository } from 'typeorm';

import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

@EntityRepository(Transaction)
class TransactionsRepository extends Repository<Transaction> {
  public async getBalance(): Promise<Balance> {
    const transactions = await this.find();

    const balance = transactions.reduce(
      (accumulator, current) => {
        const { type, value } = current;
        let { income, outcome } = accumulator;

        switch (type) {
          case 'income':
            income += Number(value);
            break;
          case 'outcome':
            outcome += Number(value);
            break;
          default:
            break;
        }

        return {
          income,
          outcome,
          total: income - outcome,
        };
      },
      { income: 0, outcome: 0, total: 0 },
    );

    return balance;
  }
}

export default TransactionsRepository;
