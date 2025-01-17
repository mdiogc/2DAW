import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs, getDoc, addDoc, doc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD6C2z671JApwqmJGFG9u3hJ7VQ9uq21No",
  authDomain: "login-proyecto-2b1ab.firebaseapp.com",
  projectId: "login-proyecto-2b1ab",
  storageBucket: "login-proyecto-2b1ab.firebasestorage.app",
  messagingSenderId: "646547998903",
  appId: "1:646547998903:web:140c6ebc523cc7ccb62532",
  measurementId: "G-F8V1DG4LP1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default class DatabaseConnection {
  constructor() {
    this.usersCollection = collection(db, 'users')
  }

  async createAccount(data) {
    try {
      const docRef = await addDoc(this.usersCollection, data)
      console.log('Documento escrito con ID: ', docRef.id)
      return docRef.id
    } catch (e) {
      console.error('Error añadiendo registro: ', e)
    }
  }

  async getAllUsers() {
    try {
      const querySnapshot = await getDocs(this.usersCollection)
      const dataList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      console.log('Documentos:', dataList)
      return dataList
    } catch (error) {
      console.error('Error obteniendo documentos: ', error)
    }
  }

  async userExists(email) {
    const allUsers = await this.getAllUsers()
    let userExists = false
    if (allUsers) {
      allUsers.forEach((user) => {
        if (user.email == email) {
          console.log('Usuario encontrado!')
          userExists = true
        }
      })
    }
    return userExists
  }

  async authenticate(email, password) {
    const allUsers = await this.getAllUsers()
    let isAuthenticated = false
    if (allUsers) {
      allUsers.forEach((user) => {
        if (user.email == email && user.password == password) {
          console.log('Usuario loggeado!')
          isAuthenticated = true
        }
      })
    }
    return isAuthenticated
  }
}

