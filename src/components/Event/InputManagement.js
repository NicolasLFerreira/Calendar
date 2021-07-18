class InputManagement{
    dateProcessor(dom){
        var input = document.getElementById(dom).value
        if (input == null) return { 
            "raw": "0000-01-01", 
            "day": "01", 
            "month": "01", 
            "id": "jan01"
        }

        var size = input.length
        var day = "" + input[size - 2] + input[size - 1]
        var month = "" + input[size - 5] + input[size - 4]
        
        return {
            "raw": input,
            "day": day,
            "month": month,
            "id":  JSON.parse(localStorage.getItem("properties")).id[month - 1] + day
        }
    }
}

export default InputManagement