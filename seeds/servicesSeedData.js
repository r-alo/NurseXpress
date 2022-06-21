const Service = require('../models/Services');

const serviceData = [
    {
        "name": "Basic Rehydration",
        "description": "IV fluids and electrolytes formulated for quick hydration.",
        "price": 50,
        "active_status": true,
        "employee_id": 1
    },
    {
        "name": "Full Recovery",
        "description": "IV fluids, electrolytes and vitamins formulated to overcome basic symptoms.",
        "price": 75,
        "active_status": true,
        "employee_id": 1
    },
    {
        "name": "Detox",
        "description": "Mix of IV fluids, vitamins and medications formulated to detoxify your body and overcome hangover symptoms.",
        "price": 100,
        "active_status": true,
        "employee_id": 2
    },
    {
        "name": "Resurrection",
        "description": "Mix of every other plan",
        "price": 125,
        "active_status": true,
        "employee_id": 3
    }
];

const seedServices = () => Service.bulkCreate(serviceData, {
        validate: true,
});

module.exports = seedServices;