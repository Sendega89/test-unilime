import React from "react"
import type {MetricCardType} from "../../mock/cardsData.tsx";

const MetricCard: React.FC<MetricCardType> = ({title,value,description,icon}) => {
    return (
        <div className={`bg-white shadow rounded p-6 flex items-center space-x-4 `}>
            {icon && <div className="text-blue-500 text-3xl">{icon}</div>}
            <div>
                <h3 className="text-gray-500 text-sm font-semibold">{title}</h3>
                <p className="text-2xl font-bold text-gray-900">{value}</p>
                {description && <p className="text-gray-400 text-xs">{description}</p>}
            </div>
        </div>
    );
};

export default MetricCard;
