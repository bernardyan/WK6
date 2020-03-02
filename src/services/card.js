import knex from '../database'

export const getCardTypeByName = async name => {

    const result = await knex('card')
        .select('type.name', 'type.id')
        .from('card')
        .join('cards_types', 'card.id', 'cards_types.card_id')
        .join('type', 'type.id', 'cards_types.type_id')
        .where('card.name', name);

    console.log(result[0]);
    return result[0];

};

export const updateName = async (id, newName) => {

    await knex('card')
        .update({ name:newName})
        .where({id:id});

    return  { "success": true, id: id, name: newName};

};


