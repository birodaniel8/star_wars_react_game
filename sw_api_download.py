import swapi
import ujson

# the package has been written to the old swapi pages so that has to be changed:
swapi.settings.BASE_URL = 'http://swapi.dev/api'

# define categories:
categories = ["films", "people", "planets", "species", "starships", "vehicles"]
data = {}

# get all data to quiery set:
for cat in categories:
    print(cat)
    data[cat] = swapi.get_all(cat)

# save to json files:
for cat in categories:
    print(cat)
    with open(f'{cat}.json', 'w') as outfile:
        ujson.dump(data[cat], outfile)