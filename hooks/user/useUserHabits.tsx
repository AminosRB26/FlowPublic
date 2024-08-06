import { useEffect, useState } from 'react'
import firestore from '@react-native-firebase/firestore';

const useUserHabits = (userId: string) => {

    const [habits, setHabits] = useState<Habit[]>([])

    useEffect(() => {
        var listener: (() => void);

        const init = async () => {
            listener = firestore()
                .collection('habits')
                .where('userId', '==', userId)
                .onSnapshot(snapshot => {
                    setHabits(snapshot.docs.map(doc => doc.data() as Habit));
                })
        }

        init();

        return () => {
            listener && listener();
        }
    }, [userId])

    return habits;
}

export default useUserHabits;