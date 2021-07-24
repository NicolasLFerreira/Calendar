var monthProperties = {
    "name": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    "id":  ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"],
    "size": [1, -2, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1]
}

var weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]

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
        return monthProperties[prop][index]
    }

    // Retrives the index of an a property element
    getPropertyIndex(prop, item){
        return monthProperties[prop].indexOf(item)
    }
    
    // Returns a number string with prefix in the end st/nd/rd/th
    numberWithPrefix(num){
        if (isNaN(num)) return undefined
        var last = num.charAt(num.length - 1)
        switch (last) {
            case "1":
                return num + "st"
            case "2":
                return num + "nd"
            case "3":
                return num + "rd"
            default:
                return num + "th"
        }
    }

    // Returns the week day string
    weekDayName(month, day){
        var date = new Date()
        date.setFullYear(new Date().getUTCFullYear(), month, day)
        return weekDays[date.getUTCDay()]
    }
}

export default DataManagement