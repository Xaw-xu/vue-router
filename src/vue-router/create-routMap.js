const addRouteRecord = (route,pathList,pathMap,parentRecord)=>{
    let path = parentRecord? `${parentRecord.path}/${route.path}`: route.path
    let record = {
        path,
        component:route.component,
        parent:parentRecord
    }
    if(!pathMap[path]) {

        pathMap[path] = record
        pathList.push(path)
    }
    if(route.children) {
        route.children.forEach(c=>{
            addRouteRecord(c,pathList,pathMap,record)
        })
    }
}

function createRoutMap(routers,oldList,oldMap) {
    let pathList = oldList ||[]
    let pathMap = oldMap || {}

    routers.forEach(route => {
        addRouteRecord(route,pathList,pathMap)
    });

    return {
        pathList,
        pathMap
    }
}

export default createRoutMap