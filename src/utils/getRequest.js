const getRequest = async (url, basicAuth) => {
    const token = 'd49f98d7936e5b43c81adea47d03e90e31e890c1';
    const headers = {
        Authorization: basicAuth || `token ${token}`,
    };
    const data = {
        method: 'GET',
        headers,
    };

    try {
        const response = await fetch(url, data);
        return await response.json();
    } catch (e) {
        return console.log(`Упс, что-то пошло не так. А имено: ${e}`);
    }
};

export default getRequest;
