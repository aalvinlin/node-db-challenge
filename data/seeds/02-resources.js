exports.seed = function(knex) {

    return knex("resources").insert([

        { name: "bed"},
        { name: "sink"},
        { name: "stove", description: "The kitchen includes a stove, sink, and microwave."},
        { name: "table", description: "dining room furniture" },
        { name: "chair", description: "dining room furniture" },
        { name: "desk"}

    ]);
};