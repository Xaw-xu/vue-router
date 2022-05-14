import createRoutMap from './create-routMap.js'
import {createRoute} from './history/base'

export default function createMatcher(routers) {

    let {pathList,pathMap} = createRoutMap(routers)
    function match(location) {
        let record = pathMap[location]
        return createRoute(record,{path:location})
    }
    function addRoutes(routers) {
        createRoutMap(routers,pathList,pathMap)
    }
    return {
        match,
        addRoutes
    }
}