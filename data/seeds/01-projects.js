exports.seed = function(knex) {

    return knex("projects").insert([

        { name: "morning routine", description: "starting the day" },
        { name: "afternoon routine", description: "going through the day" },
        { name: "evening routine", description: "ending the day" }

    ]);
};