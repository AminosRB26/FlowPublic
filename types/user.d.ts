interface Streak {
    longest: number;
    current: number;
    lastActiveDate: string;
    startDate: string;
}

interface User {
    username: string;
    profileImage: string | null;
    streak: Streak;
    readonly userId: string;
}

interface UserReduxObj extends User {
    accent: string;
    accentVariant: string;
    hasConnection: boolean;
}