
export default (param) => {
   
   if(param.type == 'Movie Data'){
       return {
         type: 'Movie Data',
         payload: param.payload
       }
   }
}
