 
        // 获取div元素
        const B_WIN10_XZBBB2OK3210 = document.getElementById('B_WIN10_XZBBB2OK321');
        
        let opacityValue = 1;  // 初始透明度值

        // 定义一个函数，用来改变透明度
        function changeOpacity() {
            // 每次调用时，改变透明度
            if (opacityValue <= 0) {
                opacityValue = 1; // 当透明度降到0时，恢复到1
            } else {
                opacityValue -= 0.05; // 逐渐减少透明度
            }

            // 设置新的透明度值
            B_WIN10_XZBBB2OK3210.style.opacity = opacityValue;
        }

        // 使用setInterval来循环改变透明度
        setInterval(changeOpacity, 100);  // 每100毫秒改变一次透明度

   