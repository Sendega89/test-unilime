import React from "react";
import {DollarSign, TrendingUp, User} from "lucide-react";


export type MetricCardType = {
    id:number,
    title: string;
    value: string | number;
    description?: string;
    icon:React.ReactNode;
};
export type UserCardType = {
    id:number,
    name: string;
    email: string | number;
    imageUrl:string,
    role:string,
    lastSeen:string,
    lastSeenDateTime:string,

};
export const cardsData: MetricCardType[] = [
    {
        id: 1,
        title: 'Users',
        value: 1245,
        description: 'Active users this month',
        icon: <User />,
    },
    {
        id: 2,
        title: 'Revenue',
        value: '$52,340',
        description: 'Total revenue this month',
        icon: <DollarSign />,
    },
    {
        id: 3,
        title: 'Growth',
        value: '12.4%',
        description: 'Monthly growth',
        icon: <TrendingUp />,
    },
]

export const usersData: UserCardType[] = [
    {
        id: 1,
        name: 'Leslie Alexander',
        email: 'leslie.alexander@example.com',
        role: 'Co-Founder / CEO',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
        id: 2,
        name: 'Michael Foster',
        email: 'michael.foster@example.com',
        role: 'Lead Developer',
        imageUrl:
            'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '1h ago',
        lastSeenDateTime: '2023-01-23T15:45Z',
    },
    {
        id: 3,
        name: 'Sofia Reyes',
        email: 'sofia.reyes@example.com',
        role: 'Product Manager',
        imageUrl:
            'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '2d ago',
        lastSeenDateTime: '2023-01-21T10:12Z',
    },
    {
        id: 4,
        name: 'Ethan Campbell',
        email: 'ethan.campbell@example.com',
        role: 'UX Designer',
        imageUrl:
            'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '30m ago',
        lastSeenDateTime: '2023-01-23T17:00Z',
    },
    {
        id: 5,
        name: 'Amelia Johnson',
        email: 'amelia.johnson@example.com',
        role: 'Marketing Specialist',
        imageUrl:
            'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '5h ago',
        lastSeenDateTime: '2023-01-23T11:20Z',
    },
    {
        id: 6,
        name: 'James Lee',
        email: 'james.lee@example.com',
        role: 'QA Engineer',
        imageUrl:
            'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '4d ago',
        lastSeenDateTime: '2023-01-19T09:15Z',
    },
    {
        id: 7,
        name: 'Isabella Martinez',
        email: 'isabella.martinez@example.com',
        role: 'Customer Success Manager',
        imageUrl:
            'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '20m ago',
        lastSeenDateTime: '2023-01-23T17:10Z',
    },
    {
        id: 8,
        name: 'William Davis',
        email: 'william.davis@example.com',
        role: 'DevOps Engineer',
        imageUrl:
            'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '1d ago',
        lastSeenDateTime: '2023-01-22T13:00Z',
    },
    {
        id: 9,
        name: 'Olivia Brown',
        email: 'olivia.brown@example.com',
        role: 'HR Specialist',
        imageUrl:
            'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T14:30Z',
    },
    {
        id: 10,
        name: 'Benjamin Wilson',
        email: 'benjamin.wilson@example.com',
        role: 'Business Analyst',
        imageUrl:
            'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '6h ago',
        lastSeenDateTime: '2023-01-23T08:30Z',
    },
]