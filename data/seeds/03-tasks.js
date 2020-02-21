exports.seed = function(knex) {

    return knex("tasks").insert([

        { description: "wake up",
            notes: "turn off alarm",
            completed: 1, project_id: 1},
        { description: "brush teeth",
            notes: "use toothpaste",
            completed: 1, project_id: 1},
        { description: "eat breakfast",
            notes: "eat cereal",
            completed: 0, project_id: 1},
        
        { description: "make lunch",
            notes: "cook food",
            completed: 0, project_id: 2},
        { description: "eat lunch",
            notes: "finish eating",
            completed: 0, project_id: 2},
        
        { description: "go back to bed",
            notes: "tun off lights",
            completed: 0, project_id: 3},
        { description: "fall asleep",
            notes: "day complete",
            completed: 0, project_id: 3},
        

    ]);
};