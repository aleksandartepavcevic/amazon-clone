import { useState, useEffect } from 'react';
import { auth } from '../firebase';

const useAuthListener = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const listener = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        localStorage.setItem('authUser', JSON.stringify(authUser));
        setUser(authUser);
      } else {
        localStorage.removeItem('authUser');
        setUser(null);
      }
    });
    return () => {
      listener();
    };
  }, []);

  return user;
};

export default useAuthListener;
