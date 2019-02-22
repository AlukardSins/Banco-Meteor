import { Meteor } from 'meteor/meteor';
import Users from '/imports/api/users';
import Accounts from '/imports/api/accounts';
import Transactions from '/imports/api/transactions';

function insertUsers(document_type, document, names, last_name, country, department, city, neighborhood, residence_number, cell_phone_number, role, email, status, name_user, password) {
  Users.insert({ document_type, document, names, last_name, country, department, city, neighborhood, residence_number, cell_phone_number, role, email, status, name_user, password, opening_date: new Date() });
}

function insertTransactions( transaction_type, status, sender, account_sender, addressee, cost) {
  Accounts.insert({ transaction_type, status, sender, account_sender, addressee, cost, transaction_type_date: new Date() });
}

function insertAccounts(accounts_type, accounts_balance, benefit_rate, status) {
  Transactions.insert({ accounts_type, accounts_balance, benefit_rate, status, opening_date: new Date() });
}

Meteor.startup(() => {
  if (Users.find().count() === 0) {
    insertUsers('cc','123456', 'orlando', 'correa', 'antioquia', 'medellin', 'sevilla', 'calle 80', '3015896265', 'cliente', 'orlanditolindo@gmail.com', 'activo', 'orlando.correa', '123456');
    insertUsers('cc','654321', 'pedro', 'gomez', 'antioquia', 'medellin', 'sevilla', 'calle 79', '3015896245', 'administrador', 'pedro@gmail.com', 'activo', 'pedro.gomez', '123456');
    insertUsers('cc','987654', 'claudia', 'gomez', 'antioquia', 'medellin', 'sevilla', 'calle 55', '3015896246', 'secretaria', 'claudia@gmail.com', 'activo', 'claudia.gomez', '123456');
  }

  if (Accounts.find().count() === 0) {
    //insertAccounts();
  }

  if (Transactions.find().count() === 0) {
    //insertTransactions();
  }
});
