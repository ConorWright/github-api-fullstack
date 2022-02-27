import requests

request = requests.get("https://api.github.com/users/webpack/repos")

repos = []

if(request.headers.get('Link') == None):
    repos += requests.get("https://api.github.com/users/webpack/repos").json()
else:
    links = request.headers.get('Link').split(',')
    for i, link in enumerate(links):
        i += 1
        response = requests.get(
            f"https://api.github.com/users/webpack/repos?page={i}"
        ).json()

        repos += response

print(len(repos))
