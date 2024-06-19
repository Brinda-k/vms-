import axios from 'axios';

const API_URL = 'http://localhost:5000/api/visitors';

export const createVisitor = async (visitorData) => {
    try {
        const response = await axios.post(API_URL, visitorData);
        return response.data;
    } catch (error) {
        console.error('Error creating visitor:', error);
        throw error;
    }
};

export const getVisitors = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching visitors:', error);
        throw error;
    }
};
