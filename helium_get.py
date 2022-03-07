import requests
import json
import time


file = open("helium_data.csv", "w")
file.write("timestamp,price\n")

for i in range(868880, 1251250, 1200):
     
    response = requests.get('https://api.helium.io/v1/oracle/prices/{}'.format(i))
    
    while response.status_code == 429:
        time.sleep(4)
        response = requests.get('https://api.helium.io/v1/oracle/prices/{}'.format(i))
    
    res = json.loads(response.text)
    timestamp = res['data']['timestamp'] 
    price = res['data']['price']
    
    file.write(f"{timestamp},{price}\n")
    print(i)
file.close()