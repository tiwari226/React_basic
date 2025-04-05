
function customRender(reactElement, maincontainer){
    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.Children
    // domElement.setAttribute('href', reactElement.props.href)
    // domElement.setAttribute('target', reactElement.props.target)
    //  maincontainer.appendChild(domElement)



    //<---------------------------------------second method------------------------------->

// const domElement = document.createElement(reactElement.type)
// domElement.innerHTML = reactElement.Children
// for (const prop in reactElement.props) {
//     if(prop === 'Children') continue
//     domElement.setAttribute(prop, reactElement.props[prop])

   
// }
//      maincontainer.appendChild(domElement)

}


const reactElement = {
    type: 'a', 
    props:{
        href :'http://goolge.com',
        target: 'blank',
    },
    Children:'clickme to visit google'
}
const maincontainer  = document.querySelector('#root')
customRender(reactElement, maincontainer)
