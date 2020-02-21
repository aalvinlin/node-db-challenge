const database = require("../data/db-config");

module.exports = {
    getResources,
    getProjects,
    getTasks,
    getContexts,

    addResource,
    addProject,
    addTask,
    addContext,

    getProjectByID
}

// retrieve a list of all resources
function getResources() {
    return database("resources");
}

// retrieve a list of all projects
function getProjects() {
    return database("projects");
}

// retrieve a list of all tasks
function getTasks() {
    return database("tasks");
}

// retrieve a list of all contexts
function getContexts() {
    return database("contexts");
}

// add a resource to the database
function addResource(resource) {
    return database("resource")
        .insert(resource)
        // .then(ids => { return getResourceByID(ids[0]) })
}

// add a project to the database
function addProject(project) {
    return database("project")
        .insert(project)
        // .then(ids => { return getProjectByID(ids[0]) })
}

// add a task to the database
function addTask(task) {
    return database("task")
        .insert(task)
        // .then(ids => { return getTaskByID(ids[0]) })
}

// add a context to the database
function addContext(context) {
    return database("context")
        .insert(context)
        // .then(ids => { return getContextByID(ids[0]) })
}

// get a project by ID
function getProjectByID() {
    
}
