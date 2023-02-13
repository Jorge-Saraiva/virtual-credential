const linksSocialMedia = {
    github: 'Jorge-Saraiva',
    facebook: 'jorgeluis.saraiva',
    instagram: 'jorgeluisotelosaraiva',
    linkedin: 'in/jorge-luis-otelo-saraiva-a90295130'
}

function changeSocialMediaLinks() {
    for (let li of socialLinks.children) {
        const social = li.getAttribute('class')

        li.children[0].href = `https:${social}.com/${linksSocialMedia[social]}/`
    }
}

changeSocialMediaLinks()

function getGithubProfileInfos() {
    const url = `https://api.github.com/users/${linksSocialMedia.github}`

    promise = fetch(url)
        promise.then(response => response.json())
        .then(data => {
            userName.textContent = data.name
            userBio.textContent = data.bio
            githubUserLink.textContent = data.login
            githubUserLink.href = data.html_url
            userImage.src = data.avatar_url
        })

}

getGithubProfileInfos()



