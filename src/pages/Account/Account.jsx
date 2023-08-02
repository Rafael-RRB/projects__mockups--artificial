import "./Account.css";
import ContentSection from "../../components/ContentSection/ContentSection.jsx";
import AccountFavorites from "./AccountFavorites/AccountFavorites.jsx";
import { useState, useEffect } from 'react';


// ContentSection Object
const accountIntro = {
  headingLevel: '1',
  identifier: 'intro',
  title: 'Seus Favoritos',
  text: '',
}


function Account(props) {
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
    </main>
  );
}

export default Account;