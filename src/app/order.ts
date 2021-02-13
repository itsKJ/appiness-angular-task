export interface Order {

    "id": String,
    "status": number,
    "customer": {
        "name": String,
        "address": String,
        "phone": number
    },
    "pizzas": Array<{
        "product": String,
        "size": "Regular" | "Medium" | "Large",
        "cost": number
    }>

    ,
    "beverages": Array<{
        "product": String,
        "size": "Regular" | "Medium" | "Large",
        "cost": number
    }>,
    "burgers": Array<{
        "product": String,
        "size": "Regular" | "Medium" | "Large",
        "cost": number
    }>

}

