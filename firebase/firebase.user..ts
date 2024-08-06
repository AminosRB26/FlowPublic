import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import validator from 'validator';

export const createAuthAccount = async (email?: string, password?: string) => {
    try {
        var userId: string | undefined;

        if (email && password) {
            if (!validator.isEmail(email)) {
                throw new Error('Invalid email address format');
            }

            if (!validator.isStrongPassword(password, { minSymbols: 0 })) {
                throw new Error('Password not strong enough');
            }

            const response = await auth().createUserWithEmailAndPassword(email, password);
            userId = response.user.uid;
        } else {
            const response = await auth().signInAnonymously();
            userId = response.user.uid;
        }

        if (userId) {
            await createUserDoc(userId);
        } else {
            throw new Error('Failed to obtain user ID after authentication');
        }

        return userId;
    } catch (error) {
        console.error(error);
        return;
    }
};

export const createUserDoc = async (userId: string, user?: Partial<User>) => {
    try {
        var userObj: User = {
            username: user?.username || '',
            profileImage: user?.profileImage || '',
            streak: {
                longest: 0,
                current: 0,
                lastActiveDate: new Date().toISOString(),
                startDate: new Date().toISOString(),
            },
            userId,
        };

        await firestore()
            .collection('users')
            .doc(userId)
            .set(userObj);

        return;
    } catch (error) {
        console.error(error);
        return;
    }
};

export const createAuthLoginAttempt = async (email?: string, password?: string) => {
    try {
        if (email && password) {
            // Login with email and password
            if (!validator.isEmail(email)) {
                throw new Error('Invalid email address format');
            }

            if (!validator.isStrongPassword(password, { minSymbols: 0 })) {
                throw new Error('Password not strong enough');
            }

            const response = await auth()
                .signInWithEmailAndPassword(email, password)
                .catch(reason => { throw reason; });

            return response.user.uid;
        } else {
            console.debug('Email & password not provided. Attempting to login without');
        }
    } catch (error) {
        console.error(error);
        return;
    }
};

export const getUser = async (userId: string) => {
    try {
        const response = await firestore()
            .collection('user')
            .doc(userId)
            .get();

        if (response.exists) {
            return response.data() as User;
        } else {
            throw new Error('Failed to find user with that ID');
        }
    } catch (error) {
        console.error(error);
        return;
    }
};

export const isUserAuthenticated = () => {
    try {
        const uid = auth().currentUser?.uid;

        return uid !== undefined;
    } catch (error) {
        console.error(error);
        return false;
    }
};
