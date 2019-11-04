import request from './request'

/**
 * 根据小说名查询数据
 * @param {String} key 书籍名
 */
const IN_NAME_BOOK= (key,limit,page=0)=>{
    return request.get('api/bookname',{
        params:{
            key,limit,page
        }
    })
}
/**
 *根据小说ID查询小说详细信息
 * @param {String} ID 书籍ID
 */
const IN_ID_BOOK=(id)=>{
    return request.get('api/info',{
        params:{
            id
        }
    })
}
/**
 * 根据小说ID查询对应的章 节内容
 * @param {String} ID 书籍ID
 */
const IN_ID_CHAPTER=(id,limit,page=0)=>{
    return request.get('api/chapters',{
        params:{
            id,limit,page
        }
    })
}
/**
 * 根据章节link 查询对应的内容
 * @param {String} link 章节link
 * */ 
const IN_LINK_CONTENT=(link)=>{
    return request.get('api/details',{
        params:{
            link
        }
    })
}
/**
 * 热搜关键词
 * 
 * */ 
const HOT_ANTISTOP=(limit)=>{
    return request.get('api/hotkeys',{
        params:{
            limit:limit
        }
    })
}

/**
 * 排行榜
 * @param {String} type 类型 
 * @param {String} time 时间段 
 * */ 
const RANK=(type)=>{
    return request.get('api/ranklist',{
        params:{
           cycle:type
        }
    })
}
/**
 * 分类
 * @param {String} gender 性别
 * @param {String} type 类别
 * @param {String} major 主题
 *
 * */ 
const CLASSIFY=(gender,type,major)=>{
    return request.get('api/ranklist',{
        params:{
            gender,type,major
        }
    })
}
export default{
    CLASSIFY,RANK,HOT_ANTISTOP,IN_LINK_CONTENT,IN_ID_CHAPTER,IN_ID_BOOK,IN_NAME_BOOK 
}


