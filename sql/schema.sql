-- Clash Royale

CREATE TABLE card (
  id integer PRIMARY KEY,
  name varchar(100) NOT NULL,
  description text NOT NULL,
  created_on timestamp NOT NULL
             DEFAULT CURRENT_TIMESTAMP
);

-- The type of card (troop, building, spell)
CREATE TABLE type (
  id integer PRIMARY KEY,
  name varchar(100) NOT NULL
);

-- Which movie is available on which platform
CREATE TABLE cards_types (
  card_id integer NOT NULL,
  type_id integer NOT NULL
);

