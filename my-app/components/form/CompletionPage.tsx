import Link from 'next/link';
import React from 'react';

interface Item {
    href: string;
    name: string;
}

interface CompletionPageProps {
    heading: string;
    subHeading: string;
    items: Item[];
}

const CompletionPage: React.FC<CompletionPageProps> = ({ heading, subHeading, items }) => {
    return (
         <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 dark:bg-gray-800 dark:border-gray-700">
            <h5 className="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
                {heading}
            </h5>
            <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                {subHeading}
            </p>
            <ul className="my-4 space-y-3">
                {items.map((item, index) => (
                    <Link key={`${index}-${item.href}`} href={item.href} className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                        <span className="flex-1 ms-3 whitespace-nowrap">{item.name}</span>
                    </Link>
                ))    
                }
        </ul> 
        </div>
    );
};

export default CompletionPage;
