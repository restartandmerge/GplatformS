const textItem = document.getElementById('localization1');
const textItem1 = document.getElementById('localization2');
const textItem2 = document.getElementById('localization3');

let isShaking = false; // 是否正在摇晃
let shakeTimeout; // 存储定时器
let xRotation = 0; // 当前 x 轴旋转角度
let yRotation = 0; // 当前 y 轴旋转角度
const MAX_ROTATION_DEVICE = 10; // 设备倾斜最大翻转角度（减小）
const MAX_ROTATION_MOUSE = 40; // 鼠标移动最大翻转角度（增大）
let isAnimating = false; // 控制动画状态

function resetTransform() {
    xRotation = 0;
    yRotation = 0;
    const transformString = `translateZ(0) perspective(400px) rotateX(0deg) rotateY(0deg)`;
    textItem.style.transform = transformString;
    textItem1.style.transform = transformString;
    textItem2.style.transform = transformString;
}

function updateTransform() {
    const transformString = `translateZ(0) perspective(400px) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
    textItem.style.transform = transformString;
    textItem1.style.transform = transformString;
    textItem2.style.transform = transformString;
    isAnimating = false; // 动画结束
}

function handleShake(beta, gamma) {
    // 处理设备翻转，支持 8 向翻转
    xRotation = Math.max(-MAX_ROTATION_DEVICE, Math.min(MAX_ROTATION_DEVICE, -beta)); // 限制 x 轴旋转
    yRotation = Math.max(-MAX_ROTATION_DEVICE, Math.min(MAX_ROTATION_DEVICE, gamma)); // 限制 y 轴旋转

    if (!isAnimating) {
        isAnimating = true; // 标记正在动画
        requestAnimationFrame(updateTransform);
    }

    clearTimeout(shakeTimeout);
    shakeTimeout = setTimeout(() => {
        resetTransform(); // 恢复为不翻转的状态
        isShaking = false; // 摇晃结束标志
    }, 1000); // 1秒后恢复
}

// 设备方向事件
window.addEventListener('deviceorientation', (event) => {
    if (!isShaking) {
        isShaking = true;
        resetTransform(); // 恢复为不翻转状态
    }
    const { beta, gamma } = event; // 获取 Y 和 Z 轴的倾斜角度
    handleShake(beta, gamma); // 处理摇晃
});

// 鼠标移动事件
document.addEventListener('mousemove', (event) => {
    if (!isShaking) {
        isShaking = true; // 设置摇晃状态
        resetTransform(); // 恢复为不翻转状态
    }
    const { clientX, clientY } = event;
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    // 根据鼠标位置计算旋转角度，限制在最大翻转角度（鼠标移动）
    xRotation = Math.max(-MAX_ROTATION_MOUSE, Math.min(MAX_ROTATION_MOUSE, ((clientY / screenHeight) - 0.5) * MAX_ROTATION_MOUSE));
    yRotation = Math.max(-MAX_ROTATION_MOUSE, Math.min(MAX_ROTATION_MOUSE, ((clientX / screenWidth) - 0.5) * -MAX_ROTATION_MOUSE));

    if (!isAnimating) {
        isAnimating = true; // 标记正在动画
        requestAnimationFrame(updateTransform);
    }

    clearTimeout(shakeTimeout);
    shakeTimeout = setTimeout(() => {
        resetTransform(); // 恢复为不翻转的状态
        isShaking = false; // 摇晃结束标志
    }, 1000); // 1秒后恢复
});
