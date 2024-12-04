var digit="0";
       const sc=document.getElementById("screen");
      function addValue(val){
         sc.value=sc.value+val;
        digit=val;
      }

    function addOpe(op){
        if(sc.value==""){
            return;
        }else{
            if (digit!=="+" && digit!=="-" && digit!=="*" && digit!=="/" && digit!=="%") {
                sc.value += op; // Append operator
                digit = op;
            }
            else{
             sc.value=sc.value.slice(0,-1);
                sc.value=sc.value+op;
                digit=op;
            }
        }
    }
     
      function eve(){
        if(sc.value!==""){
        sc.value=eval(sc.value);
        }else{
            return;
        }
     }

     function backspace(){
        sc.value=sc.value.slice(0,-1);
        
     }
      