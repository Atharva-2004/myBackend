require('dotenv').config()
const express = require('express')
const app = express()

const gitHubData = {
    "login": "Atharva-2004",
    "id": 118170540,
    "node_id": "U_kgDOBwsjrA",
    "avatar_url": "https://avatars.githubusercontent.com/u/118170540?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Atharva-2004",
    "html_url": "https://github.com/Atharva-2004",
    "followers_url": "https://api.github.com/users/Atharva-2004/followers",
    "following_url": "https://api.github.com/users/Atharva-2004/following{/other_user}",
    "gists_url": "https://api.github.com/users/Atharva-2004/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Atharva-2004/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Atharva-2004/subscriptions",
    "organizations_url": "https://api.github.com/users/Atharva-2004/orgs",
    "repos_url": "https://api.github.com/users/Atharva-2004/repos",
    "events_url": "https://api.github.com/users/Atharva-2004/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Atharva-2004/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 7,
    "public_gists": 0,
    "followers": 2,
    "following": 5,
    "created_at": "2022-11-14T09:28:45Z",
    "updated_at": "2024-09-18T03:25:19Z"
  }


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req,res) => {
    res.send('atharva.ajagekar');
})

app.get('/login', (req,res) => {
    res.send('<h1>My name is Slim Shady</h1>');
})

app.get('/github',(req,res) => {
    res.json(gitHubData);
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})