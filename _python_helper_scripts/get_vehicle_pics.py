import json
import requests
from bs4 import BeautifulSoup

with open("vehicles.json") as json_file:
    data = json.load(json_file)
    for item in data["items"]:
        try:
            # get item's name:
            name = item["name"]
            
            if name == "TIE/LN starfighter":
                image_url = "https://static.wikia.nocookie.net/starwars/images/9/92/TIEfighter2-Fathead.png/revision/latest/scale-to-width-down/500?cb=20161109040841"
            elif name == "TIE bomber":
                image_url = "https://static.wikia.nocookie.net/starwars/images/1/17/TIE_Bomber_BF2.png/revision/latest/scale-to-width-down/500?cb=20170825000703"
            elif name == "Sail barge":
                image_url = "https://static.wikia.nocookie.net/starwars/images/4/43/Sailbarge-chron1.jpg/revision/latest/scale-to-width-down/250?cb=20070401231950"
            elif name == "TIE/IN interceptor":
                image_url = "https://static.wikia.nocookie.net/starwars/images/f/f5/TIE_Interceptor_BF.png/revision/latest/scale-to-width-down/499?cb=20170501054325"
            elif name == "Zephyr-G swoop bike":
                image_url = "https://static.wikia.nocookie.net/starwars/images/9/98/Zephyr-G.jpg/revision/latest/scale-to-width-down/350?cb=20051217192222"
            elif name == "Koro-2 Exodrive airspeeder":
                image_url = "https://static.wikia.nocookie.net/starwars/images/2/22/Koro2_uvg.jpg/revision/latest/scale-to-width-down/500?cb=20130519005132"
            elif name == "LAAT/i":
                image_url = "https://static.wikia.nocookie.net/starwars/images/c/c5/Low_Altitude_Assault_Transport.png/revision/latest/scale-to-width-down/500?cb=20130719130715"
            elif name == "LAAT/c":
                image_url = "https://static.wikia.nocookie.net/starwars/images/6/63/LAATc_USW.png/revision/latest/scale-to-width-down/499?cb=20190116012930"
            elif name == "SPHA":
                image_url = "https://static.wikia.nocookie.net/starwars/images/2/2a/SPHA-T.JPG/revision/latest/scale-to-width-down/500?cb=20060515020703"
            elif name == "AT-RT":
                image_url = "https://static.wikia.nocookie.net/starwars/images/e/ee/AT-RT_Unmanned.jpg/revision/latest/scale-to-width-down/350?cb=20110204150748"
            elif name == "AT-TE":
                image_url = "https://static.wikia.nocookie.net/starwars/images/5/5e/AT-TE_TCW.jpg/revision/latest/scale-to-width-down/500?cb=20090425021909"
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
            name = name.replace("/", "-")
            response = requests.get(image_url)
            file = open(f"{name}.png", "wb")
            file.write(response.content)
            file.close()
        except:
            print(f"download for {name} was not successful.")