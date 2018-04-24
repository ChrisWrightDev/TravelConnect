import { TabsPage } from './pages/tabs/tabs';

export namespace Settings {

  export const firebaseConfig = {
    apiKey: "AIzaSyD6PFjA6z_CRjt5_DeagfGI3D3loGJ13-c",
    authDomain: "travel-connect-44e10.firebaseapp.com",
    databaseURL: "https://travel-connect-44e10.firebaseio.com",
    projectId: "travel-connect-44e10",
    storageBucket: "travel-connect-44e10.appspot.com",
    messagingSenderId: "1015671103050"
  };
  
  export const facebookLoginEnabled = true;
  export const googleLoginEnabled = true;
  export const phoneLoginEnabled = true;

  export const facebookAppId: string = "141253193388574";
  export const googleClientId: string = "845839389008-s0scp3mghdi67t5ga9t56j6265ibonp5.apps.googleusercontent.com"; 
  export const customTokenUrl: string = "https://us-central1-chatapp-3f829.cloudfunctions.net/getCustomToken";
  
  export const homePage = TabsPage;
}