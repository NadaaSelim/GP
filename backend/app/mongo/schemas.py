
def individual_serial(review) -> dict:
    return{
        "id": str(review["_id"]),
        "text": review["text"],
        "platform": review["platform"],
        "time": review["time"]
        
    }
    
def list_serial(reviews) -> list:
    return[individual_serial(review) for review in reviews ]