const fs = require("fs");

class Reader{

    Read(filepath){
        fs.readFile(filepath,"utf8", (error, data) =>{

            if(error){
                  
                console.log(error);

            }else{
                console.log(data);
            }

        });
    }

}

module.exports = Reader;