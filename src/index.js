import ReactDOM from 'react-dom'
import App from './App'
import './index.css'

ReactDOM.render(<App/>, document.querySelector("#root"))

// add "./node_modules/gh-pages/bin/gh-pages-clean.js && " 
// to the beginning of the build line in package.json if 
// there are cache issues