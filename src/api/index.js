// //API 接口集合
// import axios from "axios";
// //根据书名查询书籍
// const BookName = function(key,page=0,limit=6){
//     axios.get("/api/bookname",{
//         params:{
//             key,
//             limit,
//             page
//         }
//     }).then(res=>{
//         return res
//     })
// }
// //根据书的ID查询章节内容
// const Chapters = function(id,page=0,limit=6){
//     axios.get("/api/chapters",{
//         params:{
//             id,
//             limit,
//             page
//         }
//     })
// }
// //根据章节link 查询内容
// const Details = function(link){
//     axios.get("/api/chapters",{
//         params:{
//             link
//         }
//     })
// }


// export default{
//     BookName,Chapters,Details
// }