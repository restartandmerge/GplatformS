
		
		
       function isMobile(){
            if(window.navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)) {
              return true; 
            }else{
              return false; 
            }
        }
        
        if(isMobile()){
           checkOrientation();
          window.addEventListener("resize", checkOrientation);
			
        }else{


			
        }

	
        


        
        
        // 每隔 3 秒显示和隐藏元素
 

   

  
		
		
function checkOrientation() {
        // 获取当前屏幕的宽度和高度
        const width = window.innerWidth;
        const height = window.innerHeight;

        const orientationDisplay = document.getElementById("orientationDisplay");
		

        // 判断横屏和竖屏
        if (width > height) {
           NO404_Screen_landscape.style.display = 'block'




        } else {

		    NO404_Screen_landscape.style.display = 'none'
 
        }
    }

  
		
		
