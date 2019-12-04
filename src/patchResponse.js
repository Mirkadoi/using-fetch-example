const PatchResponse = async (name, token) => {
    const user = {
        name,
    };

    const response = await fetch('https://api.github.com/user', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `token ${token}`,
        },
        body: JSON.stringify(user),
    });

    const result = await response.json();
    return result;
};

export default PatchResponse;
