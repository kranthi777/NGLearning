export class DataService {
  getData() {
    let promise = new Promise((resolve,reject)=>{
      setTimeout(()=>{resolve("success")},1500)
    })
    return promise;
  }

}