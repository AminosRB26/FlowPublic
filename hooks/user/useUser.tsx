import { useEffect, useState } from 'react'
import firestore from '@react-native-firebase/firestore';

const useUser = (userId: string) => {

    const [user, setUser] = useState<User | undefined>(undefined);

    useEffect(() => {
        var listener: (() => void);

        const init = async () => {
            listener = firestore()
                .collection('habits')
                .doc(userId)
                .onSnapshot(snapshot => {
                    if (snapshot.exists) {
                        setUser(snapshot.data() as User);
                    }
                })
        }

        init();

        return () => {
            listener && listener();
        }
    }, [userId])

    return user;
}

export default useUser;