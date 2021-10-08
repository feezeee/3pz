        timeTransfer.onclick = function (){           
                let date = new Date();
                
                let time = date.getHours();
                let _dateTransfer = document.getElementById('dateTransfer');
                let dateTransferUsers = new Date(_dateTransfer.value);
                
              if(dateTransferUsers.getMonth() > date.getMonth() || dateTransferUsers.getDate() > date.getDate())
              {
                // ничего не удаляем
                let option = document.getElementById('1');
                    option.parentNode.appendChild(option);
              }
                
              
              
              
              
              if ( 9 <= time )
                {
                    let option = document.getElementById('1');
                    option.parentNode.removeChild(option);
                }
                if ( 12 <= time )
                {
                    let option = document.getElementById('2');
                    option.parentNode.removeChild(option);
                }
                if ( 15 <= time )
                {
                    let option = document.getElementById('3');
                      option.parentNode.removeChild(option);
                }
                if ( 18 <= time )
                {
                  let option = document.getElementById('4');
                      option.parentNode.removeChild(option);
                }
                if ( 21 <= time )
                {
                  let option = document.getElementById('5');
                      option.parentNode.removeChild(option);
                }
              };    