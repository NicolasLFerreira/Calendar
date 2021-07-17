class DataManagement{
    
    // Retrieves the data from localStorage as JSON
    getEvent = (id) => JSON.parse(localStorage.getItem(id))

    // Adds to the localStorage or creates a new one if there's none
    addEvent(id, content){
        var object = this.getEvent(id)
        if (object == null){
            object = {
                "events":[]
            }
        }
        object.events.push(content)
        localStorage.setItem(id, JSON.stringify(object))
    }

    // Deletes the event of the specific index
    deleteEvent(id, index){
        var object = this.getEvent(id)
        if (object != null){
            object.events.splice(index, 1)
            localStorage.setItem(id, JSON.stringify(object))
        }
    }
}

export default DataManagement