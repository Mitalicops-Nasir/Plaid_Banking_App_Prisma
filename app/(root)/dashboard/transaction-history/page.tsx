
import { getAccount, getAccounts } from '@/actions/banking-functionality/bank.actions';
import HeaderBox from '@/components/banking_dashboard/HeaderBox';
import { Pagination } from '@/components/banking_dashboard/Pagination';
import TransactionsTable from '@/components/banking_dashboard/TransactionsTable';
import { SearchParamProps } from '@/index';
import { currentUser } from '@/lib/auth';
import { formatAmount } from '@/lib/utils';
import React from 'react'

const TransactionHistory = async ({ searchParams: { id, page }}:SearchParamProps) => {
  const currentPage = Number(page as string) || 1;
  const loggedIn = await currentUser();
  const accounts = await getAccounts({ 
    userId: loggedIn?.id,
  })

  if(!accounts) return;
  
  const accountsData = accounts?.data;

  const account = await getAccount(id as string || accountsData[1].id);


const rowsPerPage = 10;
const totalPages = Math.ceil(account?.transactions.length / rowsPerPage);

const indexOfLastTransaction = currentPage * rowsPerPage;
const indexOfFirstTransaction = indexOfLastTransaction - rowsPerPage;

const currentTransactions = account?.transactions.slice(
  indexOfFirstTransaction, indexOfLastTransaction
)
  return (
    <div className="transactions">
      <div className="transactions-header">
        <HeaderBox 
          title="Transaction History"
          subtext="See your bank details and transactions."
        />
      </div>

      <div className="space-y-6">
        <div className="transactions-account">
          <div className="flex flex-col gap-2">
            <h2 className="text-18 font-bold text-white">{account?.data.name}</h2>
            <p className="text-14 text-blue-25">
              {account?.data.officialName}
            </p>
            <p className="text-14 font-semibold tracking-[1.1px] text-white">
              ●●●● ●●●● ●●●● {account?.data.mask}
            </p>
          </div>
          
          <div className='transactions-account-balance'>
            <p className="text-14">Current balance</p>
            <p className="text-24 text-center font-bold">{formatAmount(account?.data.currentBalance)}</p>
          </div>
        </div>

        <section className="flex w-full flex-col gap-6">
          <TransactionsTable 
            transactions={currentTransactions}
          />
            {totalPages > 1 && (
              <div className="my-4 w-full">
                <Pagination totalPages={totalPages} page={currentPage} />
              </div>
            )}
        </section>
      </div>
    </div>
  )
}

export default TransactionHistory