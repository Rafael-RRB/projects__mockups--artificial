import "./Account.css";
import AccountFavorites from "./AccountFavorites/AccountFavorites.jsx";
import "./AccountUploadIcon/AccountUploadIcon.jsx";
import AccountUploadIcon from "./AccountUploadIcon/AccountUploadIcon.jsx";

function Account(props) {
  const currentUser =  props.loginData.loginUser;//JSON.parse(localStorage.loginStatus).user;
  if(currentUser === 'anonymous') { window.location.href = '/';}
  const loginList = props.loginData.loginList;//JSON.parse(localStorage.loginList);
  const userIndex = props.loginData.loginUserIndex//loginList.findIndex(account => account.user === currentUser);

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
      <AccountFavorites object={currentFavorites} />
      <AccountUploadIcon userInfo={[loginList, userIndex]} refresh={props.refresh} />
    </main>
  );
}

export default Account;