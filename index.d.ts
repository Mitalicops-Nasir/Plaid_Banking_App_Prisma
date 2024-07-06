import { ExtendedUser } from "./next-auth";

declare interface PlaidLinkProps {
  user: ExtendedUser;
  variant?: "primary" | "ghost";
  dwollaCustomerId?: string;
}

declare type AddFundingSourceParams = {
  dwollaCustomerId: string;
  processorToken: string;
  bankName: string;
};

declare type NewDwollaCustomerParams = {
  firstName: string;
  lastName: string;
  email: string;
  type: string;
  address1: string;
  city: string;
  state: string;
  postalCode: string;
  dateOfBirth: string;
  ssn: string;
};

declare interface getInstitutionProps {
  institutionId: string;
}

declare interface getTransactionsProps {
  accessToken: string;
}

declare type TransferParams = {
  sourceFundingSourceUrl: string;
  destinationFundingSourceUrl: string;
  amount: string;
};

declare interface CreateFundingSourceOptions {
  customerId: string; // Dwolla Customer ID
  fundingSourceName: string; // Dwolla Funding Source Name
  plaidToken: string; // Plaid Account Processor Token
  _links: object; // Dwolla On Demand Authorization Link
}

declare interface getBankByAccountIdProps {
  accountId: string;
}

//change to senderBankid
declare interface getBankProps {
  accountId: string;
}

declare interface getUserProps {
  userId: string;
}

declare interface getBanksProps {
  userId: string;
}

declare interface exchangePublicTokenProps {
  publicToken: string;
  user: ExtendedUser;
}

declare interface createBankAccountProps {
  accessToken: string;
  userId: string;
  accountId: string;
  bankId: string;
  fundingSourceUrl: string;
  shareableId: string;
}

declare interface CreateTransactionProps {
  name: string;
  amount: string;
  senderId: string;
  senderBankId: string;
  receiverId: string;
  receiverBankId: string;
  date: string;
  email: string;
}

declare interface getTransactionsByBankIdProps {
  bankId: string;
}




declare interface BankInfoProps {
  account: Account;
  userId?: string;
  type: "full" | "card";
}


declare type SearchParamProps = {
  params: { [key: string]: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

// ========================================

declare type Transaction = {
  id: string;
  name: string;
  paymentChannel: string;
  type: string;
  accountId: string;
  amount: number;
  pending: boolean;
  category: string;
  date: string;
  image: string;
  type: string;
  createdAt: string;
  channel: string;
  senderBankId: string;
  receiverBankId: string;
};

declare interface CreditCardProps {
  account: Account;
  userName: string | undefined;
  showBalance?: boolean;
}

declare type Account = {
  id: string;
  availableBalance: number;
  currentBalance: number;
  officialName: string;
  mask: string;
  institutionId: string;
  name: string;
  type: string;
  userId: string
  subtype: string;
  sharableId: string;
};

declare interface BankDropdownProps {
  accounts: Account[];
  setValue?: UseFormSetValue<any>;
  otherStyles?: string;
}

declare interface FooterProps {
  user: ExtendedUser;
  type?: 'mobile' | 'desktop'
}

declare type Bank = {
  id: string;
  accountId: string;
  bankId: string;
  accessToken: string;
  fundingSourceUrl: string;
  userId: string;
  shareableId: string;
};

declare interface RightSidebarProps {
  user: ExtendedUser;
  transactions: Transaction[];
  banks: Bank[] & Account[];
}

declare interface SiderbarProps {
  user: ExtendedUser;
}


declare interface RecentTransactionsProps {
  accounts: Account[];
  transactions: Transaction[];
  userId: string;
  page: number;
}

declare interface TransactionHistoryTableProps {
  transactions: Transaction[];
  page: number;
}

declare interface CategoryBadgeProps {
  category: string;
}

declare interface TransactionTableProps {
  transactions: Transaction[];
}

declare interface CategoryProps {
  category: CategoryCount;
}








declare interface getAccountsProps {
  userId: string | undefined;
}

declare interface getAccountProps {
  appwriteItemId: string;
}

declare interface getInstitutionProps {
  institutionId: string;
}

declare interface getTransactionsProps {
  accessToken: string;
}


declare interface MobileNavProps {
  user: ExtendedUser;
}


declare interface TotalBalanceBoxProps {
  accounts: Account[];
  totalBanks: number;
  totalCurrentBalance: number;
}

declare interface BankTabItemProps {
  account: Account;
  id: string;
}

declare interface DoughnutChartProps {
  accounts: Account[];
}

declare interface HeaderBoxProps {
  type?: "title" | "greeting";
  title: string;
  subtext: string;
  user?: string;
}


declare interface PaginationProps {
  page: number;
  totalPages: number;
}


declare interface PaymentTransferFormProps {
  accounts: Account[];
}

declare type CategoryCount = {
  name: string;
  count: number;
  totalCount: number;
};



declare type Transaction = {
  id: string;
  name: string;
  paymentChannel: string;
  type: string;
  accountId: string;
  amount: number;
  pending: boolean;
  category: string;
  date: string;
  image: string;
  type: string;
  $createdAt: string;
  channel: string;
  senderBankId: string;
  receiverBankId: string;
};

declare type CategoryCount = {
  name: string;
  count: number;
  totalCount: number;
};



declare type AccountTypes =
  | "depository"
  | "credit"
  | "loan "
  | "investment"
  | "other";
