        timeTransfer.onclick = function (){           
                let date = new Date();
                
                let time = date.getHours();
                let _dateTransfer = document.getElementById('dateTransfer'); 
                let dateTransferUsers = new Date(_dateTransfer.value);// Получаем выбранную дату
                
              if(dateTransferUsers.getMonth() > date.getMonth() || dateTransferUsers.getDate() > date.getDate())
              {
                // ничего не удаляем
                let optionList = document.getElementById('timeTransfer').getElementsByTagName('option');

                  for (i = 0; i < optionList.length; i++) {                      
                      
                    optionList[i].disabled = false;                      
                  }
                
                    
              }
              else {
                
                if ( 9 <= time )
                {
                    let option = document.getElementById('1');
                    option.disabled = true;
                    option = document.getElementById('2');                    
                    option.parentNode.value = option;
                }
                if ( 12 <= time )
                {
                    let option = document.getElementById('2');
                    option.disabled = true;
                    option = document.getElementById('3');                    
                    option.parentNode.value = option;
                                     
                  option.parentNode.disabled = false;
                }
                if ( 15 <= time )
                {
                  let option = document.getElementById('3');
                  option.disabled = true;    
                  option = document.getElementById('4');                    
                  option.parentNode.value = option;                
                }
                if ( 18 <= time )
                {
                  let option = document.getElementById('4');
                  option.disabled = true;
                  option = document.getElementById('5');                    
                  option.parentNode.disabled = false;
                }
                if ( 21 <= time )
                {
                  let option = document.getElementById('5');
                  option.disabled = true;          
                }
              }              
        };    