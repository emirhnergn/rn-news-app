import { initializeApp } from "firebase/app";
import * as config from "../../ENVIRONMENT"

const firebaseConfig = {
    apiKey: config.apiKey,
    authDomain: config.authDomain,
    projectId: config.projectId,
    storageBucket: config.storageBucket,
    messagingSenderId: config.messagingSenderId,
    appId: config.appId,
  };

const app = initializeApp(firebaseConfig);
export default app;