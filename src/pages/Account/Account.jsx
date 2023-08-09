import "./Account.css";
import ContentSection from "../../components/ContentSection/ContentSection.jsx";
import AccountFavorites from "./AccountFavorites/AccountFavorites.jsx";
import "./AccountUploadIcon/AccountUploadIcon.jsx";
import { useState, useEffect } from 'react';
import AccountUploadIcon from "./AccountUploadIcon/AccountUploadIcon.jsx";


// ContentSection Object
const accountIntro = {
  headingLevel: '1',
  identifier: 'intro',
  title: 'Seus Favoritos',
  text: '',
}

function Account(props) {
  const currentUser = JSON.parse(localStorage.loginStatus).user;
  const loginList = JSON.parse(localStorage.loginList);
  const userIndex = loginList.findIndex(account => account.user === currentUser);

  let currentAccount;
  // checks only if loginStatus exists, prevents crash/errors
  if(localStorage.loginStatus !== undefined) {
    if(JSON.parse(localStorage.loginStatus).status === 'logged') {
      let jsonAccounts = JSON.parse(localStorage.loginList);
      currentAccount = jsonAccounts[jsonAccounts.findIndex(login => login.user === 'admin')];
    }
  }
  const currentFavorites = currentAccount.favorites;

  return(
    <main className="main">
      <ContentSection object={accountIntro} />
      <AccountFavorites object={currentFavorites} />
      <AccountUploadIcon userInfo={[loginList, userIndex]} />
    </main>
  );
}

export default Account;