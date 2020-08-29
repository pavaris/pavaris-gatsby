const path = require(`path`)
const fetch = require("node-fetch")
const home = path.resolve(`src/templates/home.js`)
const page = path.resolve(`src/templates/page.js`)
const requestCache = {}
const endpointOrigin =
  process.env.NODE_ENV === "development"
    ? "http://localhost:1337"
    : "http://pavaris.com"

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

const buildPages = async (createPage, menu, menuItem) => {
  console.log(menuItem.slug)
  const pageData = await getData(endpointOrigin + "/" + menuItem.slug)

  return createPage({
    path: "/" + menuItem.slug,
    component: page,
    context: {
      nav: menu.pages,
      description: pageData.meta.info,
      title: pageData.meta.title,
      rawData: pageData,
    },
  })
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const menu = await getData(`${endpointOrigin}/navigation`)

  await createPage({
    path: "/",
    component: home,
    context: {
      nav: menu.pages,
      description: "I'm a web developer and photographer from New York",
      title: "Pavaris",
    },
  })

  await Promise.all(
    menu.pages.map((menuItem, i) => buildPages(createPage, menu, menuItem))
  )
}
