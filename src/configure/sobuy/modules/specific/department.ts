import * as utils from "@/components/util/utils";

const myModule:{ [key: string]: any} = {
    type:'normal',
    name:'sys_department',
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
                        {modelName:'content',name:"company_id",label:"公司名称",label_show:true,label_width:"140px",type: 'ComponentsInputSelect',jurisdictionJson: [{user: [{company_id: 0}]}],ajax_url:"getCompany",props_label:"name",props_value:"id"},
                        {modelName:'content',name:"name",label:"部门名称",label_show:true,label_width:"140px",type: 'ComponentsInput'},
                        {modelName:'content',type: 'ComponentsInputReQuery'},
                    ]}
            ]
        },
        {
            modelName:'content',title:"部门管理",type: 'AssemblyContent', components:[
                {modelName:'content',name:"company_name",label:"公司名称",type: 'ComponentsInput'},
                {modelName:'content',name:"p_name",label:"上级部门",type: 'ComponentsInput'},
                {modelName:'content',name:"name",label:"部门名称",type: 'ComponentsInput'},
            ],
        },
        {modelName:'dialog',name:"edit",type: 'DialogEdit',components:[
                {modelName:'from',type: 'AssemblyFrom',components:[
                        {modelName:'content',name:"company_id",label:"公司名称",type: 'ComponentsInputSelect',rules:[{validator: utils.my_required, message: "请选择公司名称"}],ajax_url:"getCompany",props_label:"name",props_value:"id",system_id:"system_company_id",associated_notice:["system_p_id"]},
                        {modelName:'content',name:"p_id",label:"上级部门",type: 'ComponentsInputSelect',ajax_url:"queryByFirst",props_label:"name",props_value:"id",system_id:"system_p_id",ajax_params:[{type:"control",name:"company_id",system_id:"system_company_id"}]},
                        {modelName:'content',name:"name",label:"部门名称",type: 'ComponentsInput',rules:[{validator: utils.my_required, message: "请输入部门名称"}]},
                        {modelName:'content',name: 'id', label: 'id',type:'ComponentsInputHidden'},
                    ]},
            ]},
    ]
}
export default myModule