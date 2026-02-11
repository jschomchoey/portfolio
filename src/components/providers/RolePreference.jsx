'use client';

import { useEffect } from 'react';

export default function RolePreference({ role }) {
    useEffect(() => {
        if (role) {
            // Set cookie with 30 day expiry
            const expiryDate = new Date();
            expiryDate.setDate(expiryDate.getDate() + 30);

            document.cookie = `preferredRole=${role}; path=/; expires=${expiryDate.toUTCString()}; SameSite=Lax`;
        }
    }, [role]);

    return null;
}
