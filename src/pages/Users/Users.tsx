import React, {useState} from "react"
import {type UserCardType, usersData} from "../../mock/cardsData.tsx";

const Users: React.FC = () => {

    const [users, setUsers] = useState<UserCardType[]>(usersData);
    const [sortAsc, setSortAsc] = useState(true);

    const sortByName = () => {
        const sorted = [...users].sort((a, b) => {
            if (a.name < b.name) return sortAsc ? -1 : 1;
            if (a.name > b.name) return sortAsc ? 1 : -1;
            return 0;
        });
        setUsers(sorted);
        setSortAsc(!sortAsc);
    };

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 shadow-md rounded-lg overflow-hidden">
                <thead className="bg-gray-50">
                <tr>
                    <th
                        onClick={sortByName}
                        className="cursor-pointer px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider select-none flex items-center gap-1"
                        scope="col"
                    >
                        Name
                        <span className="text-gray-400 text-sm">
                {sortAsc ? '▲' : '▼'}
              </span>
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" scope="col">
                        Email
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" scope="col">
                        Role
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" scope="col">
                        Last Seen
                    </th>
                </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                {users.map(({ id, name, email, role, lastSeen, imageUrl }) => (
                    <tr key={id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap flex items-center gap-4">
                            <img
                                className="h-10 w-10 rounded-full object-cover"
                                src={imageUrl}
                                alt={name}
                                loading="lazy"
                            />
                            <span className="text-gray-900 font-medium">{name}</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-700">{email}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-700">{role}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-500">{lastSeen}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default Users;
