const RequestToApi = async (params) => {
    const {
        method,
        body,
        urlParam,
        token,
    } = params;

    const response = await fetch(`https://api.github.com${urlParam}`, {
        method: `${method}`,
        headers: {
            'Content-Type': 'application/json',
            Authorization: `token ${token}`,
        },
        body: JSON.stringify(body),
    });

    const result = await response.json();
    return result;
};

export default RequestToApi;
