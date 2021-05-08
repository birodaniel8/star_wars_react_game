import json
import requests
from bs4 import BeautifulSoup

with open("people.json") as json_file:
    data = json.load(json_file)
    for character in data["items"]:
        try:
            # get character's name:
            name = character["name"]
            
            if name == "Ackbar":
                image_url = "https://static.wikia.nocookie.net/starwars/images/2/29/Admiral_Ackbar_RH.png/revision/latest/scale-to-width-down/500?cb=20170907053204"
            elif name == "Darth Vader":
                image_url = "https://i.pinimg.com/736x/f5/f4/fa/f5f4fab0534aa5c1469bee1facc20f52.jpg"
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