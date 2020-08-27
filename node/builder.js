const path = require(`path`)
const fetch = require("node-fetch")
const home = path.resolve(`src/templates/home.js`)
const requestCache = {}
const endpointOrigin =
  process.env.NODE_ENV === "development"
    ? "http://localhost:1337"
    : "http://pavaris.com"

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const getData = url => {
    if (requestCache[url]) {
      return Promise.resolve(requestCache[url])
    }

    return fetch(url)
      .then(res => {
        if (!res.ok) {
          throw new Error(`Request failed: ${url} with code ${res.status}`)
        }
        return res.json()
      })
      .then(json => {
        requestCache[url] = json
        return requestCache[url]
      })
  }

  const menu = await getData(`${endpointOrigin}/navigation`)

  console.log(menu)

  await createPage({
    path: "/",
    component: home,
    context: {
      nav: menu.pages,
      description: "I'm a web developer and photographer from New York",
      title: "Pavaris",
    },
  })
}
