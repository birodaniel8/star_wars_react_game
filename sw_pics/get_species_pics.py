import json
import requests
from bs4 import BeautifulSoup

with open("species.json") as json_file:
    data = json.load(json_file)
    for item in data["items"]:
        try:
            # get item's name:
            name = item["name"]
            
            if name == "Droid":
                image_url = "https://static.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png/revision/latest/scale-to-width-down/500?cb=20161108040914"
            else:
                # scraping the search page:
                URL = f"https://starwars.fandom.com/wiki/Special:Search?query={name}&scope=internal&navigationSearch=true"
                page = requests.get(URL)
                soup = BeautifulSoup(page.content, 'lxml')

                # first search item:
                first_found_url = soup.find_all("article")[0].h1.a["href"]

                # scraping the first search item:
                page2 = requests.get(first_found_url)
                soup2 = BeautifulSoup(page2.content, 'lxml')

                # image url:
                image_url = soup2.aside.figure.a.img["src"]

            # write image to a png file:
            response = requests.get(image_url)
            file = open(f"{name}.png", "wb")
            file.write(response.content)
            file.close()
        except:
            print(f"download for {name} was not successful.")