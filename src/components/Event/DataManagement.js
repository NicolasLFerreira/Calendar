const months = {
    "jan":[],
    "feb":[],
    "mar":[],
    "apr":[],
    "may":[],
    "jun":[],
    "jul":[],
    "aug":[],
    "sep":[],
    "oct":[],
    "nov":[],
    "dec":[]
}

class DataManagement{
    constructor(){
        if (localStorage.getItem("events") == null) localStorage.setItem("events", JSON.stringify(months))
    }

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
        this.dayLog(id, true)
    }

    // Deletes the event of the specific index
    deleteEvent(id, index){
        var object = this.getEvent(id)
        if (object != null){
            object.events.splice(index, 1)
            localStorage.setItem(id, JSON.stringify(object))
        }
        if (this.getEvent(id).events.length == 0) {
            localStorage.removeItem(id)
            this.dayLog(id, false)
        }
    }

    // Adds or remove a day from the days with events
    dayLog(id, isAdd){
        var idMonth = id.slice(0, 3)
        var idDay = id.slice(3, 5)
        var object = JSON.parse(localStorage.getItem("events"))
        if (isAdd) {
            if (!object[idMonth].includes(idDay)) object[idMonth].push(idDay)
        }
        else{
            object[idMonth].splice(object[idMonth].indexOf(idDay), 1)
        }
        object[idMonth].sort()
        localStorage.setItem("events", JSON.stringify(object))
    } 

    // Retrieves the data related to the month/day properties
    getProperties(prop, index){
        return JSON.parse(sessionStorage.getItem("properties"))[prop][index]
    }

    // Retrives the index of an a property element
    getPropertyIndex(prop, item){
        return JSON.parse(sessionStorage.getItem("properties"))[prop].indexOf(item)
    }
}

export default DataManagement