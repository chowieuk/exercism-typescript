def is_isogram(string: str) -> bool:   
    clean_string = string.replace("-","").replace(" ","").casefold()
    print(clean_string)
    for char in clean_string:
        if clean_string.count(char) > 1:
            return False            
    return True