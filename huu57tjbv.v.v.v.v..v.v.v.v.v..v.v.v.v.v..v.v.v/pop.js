
        var modal = document.getElementById("modal");
        var overlay = document.getElementById("overlay");
        var openBtn = document.getElementById("menuButtongithubcom1");
        var closeBtn = document.getElementById("closeModal1");

        // 点击按钮显示弹窗
        openBtn.onclick = function() {
            overlay.style.display = 'block'; // 显示遮罩
            modal.classList.remove('hide'); // 移除隐藏类
            modal.classList.add('show'); // 添加显示类
        }

        // 关闭弹窗
        closeBtn.onclick = function() {
            modal.classList.remove('show'); // 隐藏弹窗
            modal.classList.add('hide'); // 添加隐藏类
            setTimeout(function() {
                overlay.style.display = 'none'; // 等待动画完成再隐藏遮罩
            }, 100); // 动画持续时间
        }
