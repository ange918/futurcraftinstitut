'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'

interface BrochureContextType {
    showBrochure: boolean
    setShowBrochure: (show: boolean) => void
    toggleBrochure: () => void
}

const BrochureContext = createContext<BrochureContextType | undefined>(undefined)

export function BrochureProvider({ children }: { children: ReactNode }) {
    const [showBrochure, setShowBrochure] = useState(false)

    const toggleBrochure = () => {
        setShowBrochure(!showBrochure)
    }

    return (
        <BrochureContext.Provider value={{ showBrochure, setShowBrochure, toggleBrochure }}>
            {children}
        </BrochureContext.Provider>
    )
}

export function useBrochure() {
    const context = useContext(BrochureContext)
    if (context === undefined) {
        throw new Error('useBrochure must be used within a BrochureProvider')
    }
    return context
}

