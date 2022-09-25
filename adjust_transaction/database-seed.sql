CREATE TABLE adjust_transaction
(
    id SERIAL,
    sku text,
    quantity numeric(10)
    amount numeric(10)
    CONSTRAINT products_pkey PRIMARY KEY (id)
);