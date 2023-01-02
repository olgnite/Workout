interface IMenu {
    title: string;
    link: string
}

export const menu: IMenu[] = [
    {
        title: 'Workouts',
        link: '/workouts'
    },
    {
        title: 'Create new',
        link: '/new-workout'
    },
    {
        title: 'Profile',
        link: '/profile'
    },
]
