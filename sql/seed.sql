INSERT INTO card (id, name, description) VALUES
(1, 'Furnace', 'The furnace spawns two Fire Spirits at a time. It also makes great brick-oven pancakes'),
(2, 'Fireball','Annnnnd... Fireball. Incinerates a small area, dealing high damage. Reduced damage to Crown Towers.'),
(3, 'Guards', 'Three ruthless bone brothers with shields. Knock off their shields and all thats left are three ruthless bone brothers.'),
(4, 'Skeletons', 'Three fast, very weak melee fighters. Surround your enemies with this pile of bones!');


INSERT INTO type (id, name) VALUES
(1, 'Troop'),
(2, 'Building'),
(3, 'Spell');

INSERT INTO cards_types (card_id, type_id) VALUES
(1, 2), (2, 3), (3, 1), (4, 1);

