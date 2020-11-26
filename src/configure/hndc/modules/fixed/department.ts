import * as utils from "../../../../components/util/utils";

const myModule:{ [key: string]: any} = {
    type:'normal',
    name:'fixed_department',
    version:'PageNormal',
    api:{
        query: "/department/query",
        queryByAll: "/department/queryByAll",
        queryById:  "/department/queryById",
        save:  "/department/save",
        delete:  "/department/delete",
        getCompany:  "/company/queryByAll",
        queryByFirst:  "/department/queryByFirst",
        getRole:  "/role/queryByAll",
    },
    components:[
        {
            modelName:'content', type: 'AssemblyQuery', components:[
                {modelName:'query',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"name",label:"部门名称",type: 'ComponentsInput'},
                        {modelName:'content',type: 'ComponentsInputReQuery'},
                    ]}
            ]
        },
        {
            modelName:'content',type: 'AssemblyContent', components:[
                {modelName:'content',name:"p_name",label:"上级部门",type: 'ComponentsInput'},
                {modelName:'content',name:"name",label:"部门名称",type: 'ComponentsInput'},
                {modelName:'content',name:"type",label:"类型",type: 'ComponentsInput'},
            ],
        },
        {modelName:'dialog',name:"edit",type: 'DialogEdit',components:[
                {modelName:'from',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"p_id",label:"上级部门",type: 'ComponentsInputSelect',ajax_url:"queryByFirst",props_label:"name",props_value:"id",system_id:"system_p_id"},
                        {modelName:'content',name:"name",label:"部门名称",type: 'ComponentsInput',rules:[{validator: utils.my_required, message: "请输入部门名称"}]},
                        {modelName:'content',name:"type",label:"类型",type: 'ComponentsInputSelectMultiple',rules:[{ validator: utils.my_required, message: '请选择类型' }],options:[{value:'四位一体',label:'四位一体'},{value:'市容管理',label:'市容管理'},{value:'三改一拆',label:'三改一拆'},{value:'垃圾分类',label:'垃圾分类'},{value:'水环境管理',label:'水环境管理'}]},
                        {modelName:'content',name: 'id', label: 'id',type:'ComponentsInputHidden'},
                    ]},
            ]},
    ]
}
export default myModule