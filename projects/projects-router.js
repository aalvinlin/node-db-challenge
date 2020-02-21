const express = require("express");

const projects = require("./projects-model");

const router = express.Router();

// GET a list of projects
router.get("/", (req, res) => {
    projects.getProjects()
        .then(projects => {
            res.status(200).json(projects);
        })
        .catch(error => {
            res.status(500).json({message: "Could not get projects from server."})
        })
})

// GET a project by ID
router.get("/projects/:id", (req, res) => {
    projects.getProjectById(req.params.id)
        .first()
        .then(projects => {
            res.status(200).json(projects);
        })
        .catch(error => {
            res.status(500).json({message: "Could not get project #" + req.params.id + " from server."})
        })
})

// GET a list of resources
router.get("/resources", (req, res) => {
    projects.getResources()
        .then(resources => {
            res.status(200).json(resources);
        })
        .catch(error => {
            res.status(500).json({message: "Could not get resources from server."})
        })
})

// GET a list of tasks
router.get("/tasks", (req, res) => {
    projects.getTasks()
        .then(tasks => {
            res.status(200).json(tasks);
        })
        .catch(error => {
            res.status(500).json({message: "Could not get tasks from server."})
        })
})

// GET a list of contexts
router.get("/contexts", (req, res) => {
    projects.getContexts()
        .then(contexts => {
            res.status(200).json(contexts);
        })
        .catch(error => {
            res.status(500).json({message: "Could not get contexts from server."})
        })
})

// POST a project to the database
router.post("/projects", (req, res) => {

    if (!req.body || !req.body.name)
        { res.status(500).json({message: "Project name is required."}) }
    else
        {
            projects.addProject(req.body)
                .then(numberAdded => {
                    res.status(200).json(numberAdded);
                })
                .catch(error => {
                    res.status(500).json({message: "Could not add project to server."})
                })
        }
})

// POST a resource to the database
router.post("/resources", (req, res) => {

    if (!req.body || !req.body.name)
        { res.status(500).json({message: "Resource name is required."}) }
    else
        {
            projects.addResource(req.body)
                .then(numberAdded => {
                    res.status(200).json(numberAdded);
                })
                .catch(error => {
                    res.status(500).json({message: "Could not add resource to server."})
                })
        }
})

// POST a task to the database
router.post("/tasks", (req, res) => {

    if (!req.body || !req.body.description)
        { res.status(500).json({message: "Task description is required."}) }
    else
        {
            projects.addTask(req.body)
                .then(numberAdded => {
                    res.status(200).json(numberAdded);
                })
                .catch(error => {
                    res.status(500).json({message: "Could not add task to server."})
                })
        }
})

// POST a context to the database
router.post("/contexts", (req, res) => {
    projects.addContext(req.body)
        .then(numberAdded => {
            res.status(200).json(numberAdded);
        })
        .catch(error => {
            res.status(500).json({message: "Could not add context to server."})
        })
})

module.exports = router;