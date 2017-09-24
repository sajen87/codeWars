function typeValidation(variable, type) {
    if (typeof variable === typeof type) {
        return true
    }
    else {
        return false
    }
}

typeValidation("42", "number")