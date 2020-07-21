import { getCustomRepository } from 'typeorm';
import AppError from '../errors/AppError';

import TransactionsRepository from '../repositories/TransactionsRepository';

interface Request {
  transactionId: string;
}

class DeleteTransactionService {
  public async execute({ transactionId }: Request): Promise<void> {
    const transactionsRepository = getCustomRepository(TransactionsRepository);

    const transaction = await transactionsRepository.findOne({
      where: { id: transactionId },
    });

    if (!transaction) {
      throw new AppError(`there's no transaction with the ID specified`);
    }

    await transactionsRepository.remove(transaction);
  }
}

export default DeleteTransactionService;
