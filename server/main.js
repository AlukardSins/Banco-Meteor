import { Meteor } from 'meteor/meteor';
import Users from '/imports/api/users';
import Accounts from '/imports/api/accounts';
import Transactions from '/imports/api/transactions';

function insertUsers(doc_type, doc_number, name, last_name, country, department, city, neighborhood, address, cellphone, role, email, status, name_user, password) {
  Users.insert({ doc_type, doc_number, name, last_name, country, department, city, neighborhood, address, cellphone, role, email, status, name_user, password, opening_date: new Date() });
}

function insertTransactions( transaction_type, status, sender_acc, reciever_acc, value) {
  Accounts.insert({ transaction_type, status, sender_acc, reciever_acc, value, transaction_type_date: new Date() });
}

function insertAccounts(owner_id, acc_type, acc_balance, benefit_rate, status) {
  Transactions.insert({ owner_id, acc_type, acc_balance, benefit_rate, status, opening_date: new Date() });
}

Meteor.startup(() => {
  if (Users.find().count() === 0) {
    insertUsers('cc','123456', 'orlando', 'correa', 'Colombia', 'Antioquia', 'Medellin', 'Sevilla', '3015896265', 'cliente', 'orlanditolindo@gmail.com', 'activo', 'orlando.correa', '123456');
    insertUsers('cc','654321', 'pedro', 'gomez', 'Colombia', 'Antioquia', 'Medellin', 'Sevilla', '3015896245', 'administrador', 'pedro@gmail.com', 'activo', 'pedro.gomez', '123456');
    insertUsers('cc','987654', 'claudia', 'gomez', 'Colombia', 'Antioquia', 'Medellin', 'Sevilla', '3015896246', 'secretaria', 'claudia@gmail.com', 'activo', 'claudia.gomez', '123456');
  }

  if (Accounts.find().count() === 0) {
    //insertAccounts();
  }

  if (Transactions.find().count() === 0) {
    //insertTransactions();
  }
});
