import React, { createContext, useContext, useState, ReactNode } from 'react';
import { FilterState, defaultFilters } from '@/data/dashboardData';

interface FilterContextType {
    filters: FilterState;
    setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
    updateFilter: (key: keyof FilterState, value: any) => void;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [filters, setFilters] = useState<FilterState>(defaultFilters);

    const updateFilter = (key: keyof FilterState, value: any) => {
        setFilters((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    return (
        <FilterContext.Provider value={{ filters, setFilters, updateFilter }}>
            {children}
        </FilterContext.Provider>
    );
};

export const useFilters = () => {
    const context = useContext(FilterContext);
    if (context === undefined) {
        throw new Error('useFilters must be used within a FilterProvider');
    }
    return context;
};
