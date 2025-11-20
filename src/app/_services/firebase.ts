// Importe outros serviços conforme necessário

import { Injectable } from "@angular/core";
import { key } from "./key";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


@Injectable({
  providedIn: 'root',
})
export class Firebase {
  private app;
  public auth;
  public firestore;
  public storage;

  constructor() {
    const firebaseConfig = {
      apiKey: key,
authDomain: "ebook-vivian.firebaseapp.com",
  projectId: "ebook-vivian",
  storageBucket: "ebook-vivian.firebasestorage.app",
  messagingSenderId: "598414703662",
  appId: "1:598414703662:web:d49d4b68fb3cb60bea33bf"
};
    // Initialize Firebase
    this.app = initializeApp(firebaseConfig);
    this.auth = getAuth(this.app);
    this.firestore = getFirestore(this.app);
    this.storage = getStorage(this.app);
  }
}
