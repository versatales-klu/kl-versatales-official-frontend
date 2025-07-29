// connections.jsx

import URL from './urls';

// Function to check if backend server is running
export async function checkServerStatus() {
    try {
        const response = await fetch(URL.SERVER_STATUS);
        if (!response.ok) throw new Error('Server not reachable');
        return await response.json();
    } catch (error) {
        console.error('Error checking server status:', error);
        return { status: false, message: 'Server unreachable' };
    }
}

// Function to submit initial role form
export async function submitInitialRoleForm({ college_id, name, mail }) {
    try {
        const response = await fetch(URL.INITIAL_ROLE_FORM_SUBMIT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ college_id, name, mail }),
        });

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error submitting initial role form:', error);
        return { status: false, message: 'Request failed' };
    }
}

// Function to submit full role form
export async function submitFullRoleForm(formData) {
    try {
        const response = await fetch(URL.FULL_ROLE_FORM_SUBMIT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error submitting full role form:', error);
        return { status: false, message: 'Request failed' };
    }
}
