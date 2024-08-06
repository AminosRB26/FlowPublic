import { createSlice, configureStore, combineReducers } from '@reduxjs/toolkit'
import colors from '../style/colors';

const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        dark: false,
        primaryColor: colors.BLACK.primary,
        secondaryColor: colors.BLACK.secondary,
        primaryBackgroundColor: '#FFF',
        secondaryBackgroundColor: '#FFF'
    },
    reducers: {
        updateDarkState: (state, action) => {
            state.dark = action.payload;
            if (action.payload) {
                state.primaryColor = '#FFF';
                state.secondaryColor = 'rgba(255, 255, 255, 0.75)';
                state.primaryBackgroundColor = colors.BLACK.secondary;
                state.secondaryBackgroundColor = '#101340'
            }
        },
    }
});

const userSlice = createSlice({
    name: 'user',
    initialState: {
        username: '',
        profileImage: '',
        streak: {
            longest: 0,
            current: 0,
            startDate: new Date().toISOString(),
            lastActiveDate: new Date().toISOString()
        },
        userId: ''
    } as User,
    reducers: {
        updateUser: (state, action) => {
            return {
                ...action.payload
            }
        },
    }
})

export const { updateUser } = userSlice.actions

const Store = configureStore({
    reducer: combineReducers({
        user: userSlice.reducer,
        theme: themeSlice.reducer
    }),
});

export default Store;