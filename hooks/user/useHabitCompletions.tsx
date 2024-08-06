import { useEffect, useState } from 'react'
import firestore from '@react-native-firebase/firestore';

const useHabitCompletions = (habitId: string) => {

    const [completions, setCompletions] = useState<HabitCompletion[]>([])

    useEffect(() => {
        var listener: (() => void);

        const init = async () => {
            listener = firestore()
                .collection('habits')
                .doc(habitId)
                .collection('completions')
                .onSnapshot(snapshot => {
                    setCompletions(snapshot.docs.map(doc => doc.data() as HabitCompletion));
                })
        }

        init();

        return () => {
            listener && listener();
        }
    }, [habitId])

    return completions;
}

export default useHabitCompletions;