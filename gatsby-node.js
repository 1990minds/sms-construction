
const path = require('path');

const projectTemplate = path.resolve(`./src/components/ProjectSec/projectTemplate.js`)
const oprojectTemplate = path.resolve(`./src/components/ProjectSec/ongoingPTemplate.js`)

exports.createPages = async ({actions, graphql})=>{

const { createPage } = actions

let projects

try {

   projects = await graphql(`
{
     allPdataJson {
        edges {
          node {
            id
             
          }
        }
      }
  }
`)
  
} catch (error) {
  console.log(`Error Running Querying Posts`, error)

}
projects = projects.data.allPdataJson.edges

projects.forEach(({node})=>{

createPage({

path:`/projects/${node.id}`,
component:projectTemplate,
context:{

    slug:node.id,
    // data:node

}


})


})


let oprojects

try {
  oprojects = await graphql(`
{
    allOdataJson {
        edges {
          node {
            id
             
          }
        }
      }
  }
`)
} catch (error) {

  console.log(`Error Running Querying Pages`, error)

  
}


oprojects = oprojects.data.allOdataJson.edges


oprojects.forEach(({node})=>{

  createPage({
  
  path:`/ongoingprojects/${node.id}`,
  component:oprojectTemplate,
  context:{
  
      slug:node.id,
      // data:node
  
  }
  
  
  })
  
  
  })

}


