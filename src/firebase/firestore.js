import { 
  collection, 
  doc, 
  getDocs, 
  getDoc, 
  addDoc, 
  setDoc,
  updateDoc, 
  deleteDoc,
  query,
  orderBy,
  Timestamp
} from 'firebase/firestore';
import { db } from './config';

// Collections
export const COLLECTIONS = {
  MEMBERS: 'members',
  ACTIVITIES: 'activities',
  ACHIEVEMENTS: 'achievements',
  PROJECTS: 'projects',
  MISSION_VISION: 'missionVision',
  CONTACT_SUBMISSIONS: 'contactSubmissions',
  HIRE_REQUESTS: 'hireRequests',
};

// Members CRUD
export const getMembers = async () => {
  const q = query(collection(db, COLLECTIONS.MEMBERS), orderBy('createdAt', 'desc'));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const getMember = async (id) => {
  const docRef = doc(db, COLLECTIONS.MEMBERS, id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() };
  }
  return null;
};

export const addMember = async (memberData) => {
  return await addDoc(collection(db, COLLECTIONS.MEMBERS), {
    ...memberData,
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now(),
  });
};

export const updateMember = async (id, memberData) => {
  const docRef = doc(db, COLLECTIONS.MEMBERS, id);
  return await updateDoc(docRef, {
    ...memberData,
    updatedAt: Timestamp.now(),
  });
};

export const deleteMember = async (id) => {
  const docRef = doc(db, COLLECTIONS.MEMBERS, id);
  return await deleteDoc(docRef);
};

// Activities CRUD
export const getActivities = async () => {
  const q = query(collection(db, COLLECTIONS.ACTIVITIES), orderBy('createdAt', 'desc'));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const getActivity = async (id) => {
  const docRef = doc(db, COLLECTIONS.ACTIVITIES, id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() };
  }
  return null;
};

export const addActivity = async (activityData) => {
  return await addDoc(collection(db, COLLECTIONS.ACTIVITIES), {
    ...activityData,
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now(),
  });
};

export const updateActivity = async (id, activityData) => {
  const docRef = doc(db, COLLECTIONS.ACTIVITIES, id);
  return await updateDoc(docRef, {
    ...activityData,
    updatedAt: Timestamp.now(),
  });
};

export const deleteActivity = async (id) => {
  const docRef = doc(db, COLLECTIONS.ACTIVITIES, id);
  return await deleteDoc(docRef);
};

// Achievements CRUD
export const getAchievements = async () => {
  const q = query(collection(db, COLLECTIONS.ACHIEVEMENTS), orderBy('createdAt', 'desc'));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const getAchievement = async (id) => {
  const docRef = doc(db, COLLECTIONS.ACHIEVEMENTS, id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() };
  }
  return null;
};

export const addAchievement = async (achievementData) => {
  return await addDoc(collection(db, COLLECTIONS.ACHIEVEMENTS), {
    ...achievementData,
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now(),
  });
};

export const updateAchievement = async (id, achievementData) => {
  const docRef = doc(db, COLLECTIONS.ACHIEVEMENTS, id);
  return await updateDoc(docRef, {
    ...achievementData,
    updatedAt: Timestamp.now(),
  });
};

export const deleteAchievement = async (id) => {
  const docRef = doc(db, COLLECTIONS.ACHIEVEMENTS, id);
  return await deleteDoc(docRef);
};

// Projects CRUD
export const getProjects = async () => {
  const q = query(collection(db, COLLECTIONS.PROJECTS), orderBy('createdAt', 'desc'));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const getProject = async (id) => {
  const docRef = doc(db, COLLECTIONS.PROJECTS, id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() };
  }
  return null;
};

export const addProject = async (projectData) => {
  return await addDoc(collection(db, COLLECTIONS.PROJECTS), {
    ...projectData,
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now(),
  });
};

export const updateProject = async (id, projectData) => {
  const docRef = doc(db, COLLECTIONS.PROJECTS, id);
  return await updateDoc(docRef, {
    ...projectData,
    updatedAt: Timestamp.now(),
  });
};

export const deleteProject = async (id) => {
  const docRef = doc(db, COLLECTIONS.PROJECTS, id);
  return await deleteDoc(docRef);
};

// Mission & Vision
export const getMissionVision = async () => {
  const docRef = doc(db, COLLECTIONS.MISSION_VISION, 'content');
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data();
  }
  return { mission: '', vision: '' };
};

export const updateMissionVision = async (data) => {
  const docRef = doc(db, COLLECTIONS.MISSION_VISION, 'content');
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return await updateDoc(docRef, {
      ...data,
      updatedAt: Timestamp.now(),
    });
  } else {
    return await setDoc(docRef, {
      ...data,
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now(),
    });
  }
};

export const initializeMissionVision = async () => {
  const docRef = doc(db, COLLECTIONS.MISSION_VISION, 'content');
  const docSnap = await getDoc(docRef);
  if (!docSnap.exists()) {
    await setDoc(docRef, {
      mission: 'Empowering Tanzanian developers through community, learning, and collaboration.',
      vision: 'To become the leading tech community in Tanzania, fostering innovation and excellence in software development.',
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now(),
    });
  }
};

// Contact Submissions CRUD
export const addContactSubmission = async (submissionData) => {
  return await addDoc(collection(db, COLLECTIONS.CONTACT_SUBMISSIONS), {
    ...submissionData,
    read: false,
    createdAt: Timestamp.now(),
  });
};

export const getContactSubmissions = async () => {
  const q = query(collection(db, COLLECTIONS.CONTACT_SUBMISSIONS), orderBy('createdAt', 'desc'));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// Hire Requests CRUD
export const addHireRequest = async (requestData) => {
  return await addDoc(collection(db, COLLECTIONS.HIRE_REQUESTS), {
    ...requestData,
    read: false,
    status: 'pending',
    createdAt: Timestamp.now(),
  });
};

export const getHireRequests = async () => {
  const q = query(collection(db, COLLECTIONS.HIRE_REQUESTS), orderBy('createdAt', 'desc'));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

