export default {
    name:'router-link',
    functional:true,
    props:{
        to:{
            type:String,
            required:true
        },
        tag:{
            type:String
        }
    },
    render(h,context){
        // debugger
        let tag = context.tag || 'a'
        const click = ()=>{
            context.parent.$router.push(context.props.to)
        }

        return h(tag,{
            on:{
                click
            }
        },context.slots().default)
    }
}