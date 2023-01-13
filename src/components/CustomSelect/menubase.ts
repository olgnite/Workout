interface IMenu {
    title: string;
    link: string
}

export const menu: IMenu[] = [
    {
        title: 'Home',
        link: '/'
    },
    {
        title: 'Workouts',
        link: '/workouts'
    },
    {
        title: 'Create new',
        link: '/new-exercise'
    },
    {
        title: 'Profile',
        link: '/profile'
    },
]
