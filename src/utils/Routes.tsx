import { Contact } from "../pages/Contact/Contact";
import { Home } from "../pages/Home/Home";
import { Lounge } from "../pages/Lounge/Lounge";
import { Resources } from "../pages/Resources/Resources";
import { Sponsors } from "../pages/Sponsors/Sponsors";
import { Team } from "../pages/Team/Team";

interface IRoute {
    path: string;
    component: React.ReactNode;
    title: string;
}

export const Routes: IRoute[] = [
    {
        title: 'Home',
        path: '/',
        component: (<Home/>)        
    },
    {
        title: 'Team',
        path: '/team',
        component: (<Team/>)
    },
    {
        title: 'Resources',
        path: '/resources',
        component: (<Resources/>)
    },
    {
        title: 'Lounge',
        path: '/lounge',
        component: (<Lounge/>)
    },
    {
        title: 'Sponsor Us',
        path: '/sponsor',
        component: (<Sponsors/>)
    },
    {
        title: 'Contact',
        path: '/contact',
        component: (<Contact/>)
    }
]