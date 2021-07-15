import 'whatwg-fetch'

class HttpService {

    getCars = ()=> {


        var promise = new Promise((resolve,reject)=>{
            fetch('http://localhost:3001/car').
                    then(response => {

                        resolve(response.json());
                    
                    })

                   
        })
      return promise;  
        
    }
}

export default HttpService;