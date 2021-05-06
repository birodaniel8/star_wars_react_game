import json
import requests
from bs4 import BeautifulSoup

with open("starships.json") as json_file:
    data = json.load(json_file)
    for item in data["items"]:
        try:
            # get item's name:
            name = item["name"]
            
            if name == "Star Destroyer":
                image_url = "https://static.wikia.nocookie.net/starwars/images/e/e4/ImperialClassStarDestroyer-TSWB.png/revision/latest/scale-to-width-down/250?cb=20201021053114"
            elif name == "Jedi starfighter":
                image_url = "https://static.wikia.nocookie.net/starwars/images/7/7a/Jsf_duo2.jpg/revision/latest/scale-to-width-down/150?cb=20060706121723"
            elif name == "Solar Sailer":
                image_url = "https://static.wikia.nocookie.net/starwars/images/1/10/CountDookusSolarSailer-WotF.png/revision/latest/scale-to-width-down/500?cb=20200518063614"
            elif name == "arc-170":
                image_url = "https://static.wikia.nocookie.net/starwars/images/b/ba/ARC170starfighter.jpg/revision/latest/scale-to-width-down/500?cb=20111112062600"
            elif name == "Calamari Cruiser":
                image_url = "https://img.wattpad.com/3a44d4a18111e68e0c882581a951f0d25eea19a5/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f51734f6f526e4f71534d4d7661673d3d2d3136362e313563643462313366646532653132663334363530333234313132352e6a7067?s=fit&w=720&h=720"
            elif name == "Imperial shuttle":
                image_url = "https://static.wikia.nocookie.net/starwars/images/d/d3/ImperialShuttle-DB.png/revision/latest?cb=20150920051331"
            elif name == "Rebel transport":
                image_url = "https://static.wikia.nocookie.net/starwars/images/6/67/GR-75_Medium_Transport_TAEtrivia.png/revision/latest/scale-to-width-down/500?cb=20170627030525"
            elif name == "Republic Cruiser":
                image_url = "https://static.wikia.nocookie.net/starwars/images/8/81/Radiant7_negvv.png/revision/latest/scale-to-width-down/499?cb=20170411231733"
            elif name == "Trade Federation cruiser":
                image_url = "https://static.wikia.nocookie.net/starwars/images/4/47/InvisibleHandStarboard-FF.png/revision/latest/scale-to-width-down/500?cb=20160906045609"
            elif name == "Y-wing":
                image_url = "https://static.wikia.nocookie.net/starwars/images/c/cd/Ywing.jpg/revision/latest/scale-to-width-down/180?cb=20070210175842"
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