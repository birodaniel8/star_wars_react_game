import json
import requests
from bs4 import BeautifulSoup

with open("films.json") as json_file:
    data = json.load(json_file)
    for item in data["items"]:
        # get item's title:
        name = item["title"]
        
        if name == "A New Hope":
            image_url = "https://static.wikia.nocookie.net/starwars/images/0/06/Star_Wars_Style_A_poster_1977.jpg/revision/latest/scale-to-width-down/500?cb=20100708051712"
        elif name == "The Empire Strikes Back":
            image_url = "https://static.wikia.nocookie.net/starwars/images/e/e4/Empire_strikes_back_old.jpg/revision/latest/scale-to-width-down/499?cb=20161114072554"
        elif name == "Return of the Jedi":
            image_url = "https://static.wikia.nocookie.net/starwars/images/b/b2/ReturnOfTheJediPoster1983.jpg/revision/latest/scale-to-width-down/500?cb=20170926193831"
        elif name == "The Phantom Menace":
            image_url = "https://static.wikia.nocookie.net/starwars/images/7/75/EPI_TPM_poster.png/revision/latest/scale-to-width-down/500?cb=20130822171446"
        elif name == "Attack of the Clones":
            image_url = "https://static.wikia.nocookie.net/starwars/images/d/dd/Attack-Clones-Poster.jpg/revision/latest/scale-to-width-down/500?cb=20180318125654"
        elif name == "Revenge of the Sith":
            image_url = "https://static.wikia.nocookie.net/starwars/images/e/e7/EPIII_RotS_poster.png/revision/latest/scale-to-width-down/500?cb=20130822174232"
            
        # write image to a png file:
        response = requests.get(image_url)
        file = open(f"{name}.png", "wb")
        file.write(response.content)
        file.close()