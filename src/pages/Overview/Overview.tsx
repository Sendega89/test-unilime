import React from "react"
import MetricCard from "../../components/Cards/MetricCard.tsx";
import {cardsData, type MetricCardType} from "../../mock/cardsData.tsx";

const Overview: React.FC = () => {
    return (
        <>
            <div className="text-2xl text-gray-900">
                Overview
            </div>
            <div className='flex flex-col gap-2 '>
                {cardsData?.map((metricCard: MetricCardType) => (
                    <MetricCard key={metricCard.id} title={metricCard.title} value={metricCard.value}
                                description={metricCard.description} id={metricCard.id} icon={metricCard.icon} />
                ))}
            </div>
        </>

    );
};

export default Overview;
