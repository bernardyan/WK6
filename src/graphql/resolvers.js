import {
    updateName, getCardTypeByName
} from '../services/card.js';

const resolvers = {
    getCardType: async (content) => {
        console.log(content);
        return getCardTypeByName(content['name']);
    },

    updateCard: async (content) => {
        const id = content['update']['id'];
        const newName = content['update']['name'];
        return updateName(id, newName);
    },

};

export default resolvers;
