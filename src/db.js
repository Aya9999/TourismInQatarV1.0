import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { collection, onSnapshot, query, doc, addDoc , updateDoc, deleteDoc} from 'firebase/firestore';
import { comment } from 'stylis';

const firebaseConfig1 = {
  apiKey: 'AIzaSyDI8fCDmQfTwJsmq9FdnvKs12AIjtm8Gz4',
  authDomain: 'tourisminqatar-59dff.firebaseapp.com',
  projectId: 'tourisminqatar-59dff',
  storageBucket: 'tourisminqatar-59dff.appspot.com',
  messagingSenderId: '673096009255',
  appId: '1:673096009255:web:3ff863c5edc27c23ad7002',
  measurementId: 'G-PCC2TNX9LD',
};

const app = initializeApp(firebaseConfig1);
const db = getFirestore(app);

class Feedbacks {
  reformat(doc) {
    return { id: doc.id, ...doc.data() };
  }

  listenToFeedbacks = (set) => {
    const q = query(collection(db, 'feedbacks'));

    return onSnapshot(q, (querySnapshot) => {
      const feedbacks = [];
      querySnapshot.forEach((doc) => {
        feedbacks.push(this.reformat(doc));
      });
      set(feedbacks);
    });
  };

  addFeedback=async(docData)=>
    await addDoc(collection(db, "feedbacks"), docData);
  updateFeedback=async(docData)=>{
    const feed = doc(db, "feedbacks", docData.id);
    await updateDoc(feed, {
      name: docData.name,
      comment:docData.comment
    });
  }
  deleteFeedback=async(id)=>
  await deleteDoc(doc(db, "feedbacks", id));

}
class Events {
    reformat(doc) {
      return { id: doc.id, ...doc.data() };
    }
  
    listenToEvents = (set) => {
      const q = query(collection(db, 'events'));
  
      return onSnapshot(q, (querySnapshot) => {
        const events = [];
        querySnapshot.forEach((doc) => {
            events.push(this.reformat(doc));
        });
        set(events);
      });
    };
  
    addEvent=async(docData)=>
      await addDoc(collection(db, "events"), docData);
    updateEvent=async(docData)=>{
      const event = doc(db, "events", docData.id);
        await updateDoc(feed, {
        title: docData.title,
        date:docData.date
      });
    }
    deleteEvent=async(id)=>
    await deleteDoc(doc(db, "events", id));
  
  }
export default {
  Feedbacks: new Feedbacks(),
  Events: new Events()
};
