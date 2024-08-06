import firestore from '@react-native-firebase/firestore';

export const createHabitDoc = async (userId: string, habit: Partial<Habit>) => {
    try {
        var habitObj: Omit<Habit, 'id' | 'completions'> = {
            title: habit?.title || '',
            description: habit?.description || '',
            weeklyFrequency: habit?.weeklyFrequency || 1,
            type: habit?.type || 'sleep',
            reminderTimestamp: null,
            createdTimestamp: new Date().toISOString(),
            userId,
        };

        const docRef = await firestore()
            .collection('habits')
            .add(habitObj);

        await docRef.update({
            id: docRef.id,
        });

        return docRef.id;
    } catch (error) {
        console.error(error);
        return;
    }
};

export const deleteHabitDoc = async (habitId: string) => {
    try {
        await firestore()
            .collection('habits')
            .doc(habitId)
            .delete();

        return;
    } catch (error) {
        console.error(error);
        return;
    }
};
