// 色卡数据（参考 https://www.pindou.online/colors）
const colorPalette = [
    // A系列
    { code: '#FAF4C8', name: 'Mard_A1' },
    { code: '#FFFFD5', name: 'Mard_A2' },
    { code: '#FEFF8B', name: 'Mard_A3' },
    { code: '#FBED56', name: 'Mard_A4' },
    { code: '#F4D738', name: 'Mard_A5' },
    { code: '#FEAC4C', name: 'Mard_A6' },
    { code: '#FE8B4C', name: 'Mard_A7' },
    { code: '#FFDA45', name: 'Mard_A8' },
    { code: '#FF995B', name: 'Mard_A9' },
    { code: '#F77C31', name: 'Mard_A10' },
    { code: '#FFDD99', name: 'Mard_A11' },
    { code: '#FE9F72', name: 'Mard_A12' },
    { code: '#FFC365', name: 'Mard_A13' },
    { code: '#FD543D', name: 'Mard_A14' },
    { code: '#FFF365', name: 'Mard_A15' },
    { code: '#FFFF9F', name: 'Mard_A16' },
    { code: '#FFE36E', name: 'Mard_A17' },
    { code: '#FEBE7D', name: 'Mard_A18' },
    { code: '#FD7C72', name: 'Mard_A19' },
    { code: '#FFD568', name: 'Mard_A20' },
    { code: '#FFE395', name: 'Mard_A21' },
    { code: '#F4F57D', name: 'Mard_A22' },
    { code: '#E6C9B7', name: 'Mard_A23' },
    { code: '#F7F8A2', name: 'Mard_A24' },
    { code: '#FFD67D', name: 'Mard_A25' },
    { code: '#FFC830', name: 'Mard_A26' },
    // B系列
    { code: '#E6EE31', name: 'Mard_B1' },
    { code: '#63F347', name: 'Mard_B2' },
    { code: '#9EF780', name: 'Mard_B3' },
    { code: '#5DE035', name: 'Mard_B4' },
    { code: '#35E352', name: 'Mard_B5' },
    { code: '#65E2A6', name: 'Mard_B6' },
    { code: '#3DAF80', name: 'Mard_B7' },
    { code: '#1C9C4F', name: 'Mard_B8' },
    { code: '#27523A', name: 'Mard_B9' },
    { code: '#95D3C2', name: 'Mard_B10' },
    { code: '#5D722A', name: 'Mard_B11' },
    { code: '#166F41', name: 'Mard_B12' },
    { code: '#CAEB7B', name: 'Mard_B13' },
    { code: '#ADE946', name: 'Mard_B14' },
    { code: '#2E5132', name: 'Mard_B15' },
    { code: '#C5ED9C', name: 'Mard_B16' },
    { code: '#9BB13A', name: 'Mard_B17' },
    { code: '#E6EE49', name: 'Mard_B18' },
    { code: '#24B88C', name: 'Mard_B19' },
    { code: '#C2F0CC', name: 'Mard_B20' },
    { code: '#156A6B', name: 'Mard_B21' },
    { code: '#0B3C43', name: 'Mard_B22' },
    { code: '#303A21', name: 'Mard_B23' },
    { code: '#EEFCA5', name: 'Mard_B24' },
    { code: '#4E846D', name: 'Mard_B25' },
    { code: '#8D7A35', name: 'Mard_B26' },
    { code: '#CCE1AF', name: 'Mard_B27' },
    { code: '#9EE5B9', name: 'Mard_B28' },
    { code: '#C5E254', name: 'Mard_B29' },
    { code: '#E2FCB1', name: 'Mard_B30' },
    { code: '#B0E792', name: 'Mard_B31' },
    { code: '#9CAB5A', name: 'Mard_B32' },
    // C系列
    { code: '#E8FFE7', name: 'Mard_C1' },
    { code: '#A9F9FC', name: 'Mard_C2' },
    { code: '#A0E2FB', name: 'Mard_C3' },
    { code: '#41CCFF', name: 'Mard_C4' },
    { code: '#01ACEB', name: 'Mard_C5' },
    { code: '#50AAF0', name: 'Mard_C6' },
    { code: '#3677D2', name: 'Mard_C7' },
    { code: '#0F54C0', name: 'Mard_C8' },
    { code: '#324BCA', name: 'Mard_C9' },
    { code: '#3EBCE2', name: 'Mard_C10' },
    { code: '#28DDDE', name: 'Mard_C11' },
    { code: '#1C334D', name: 'Mard_C12' },
    { code: '#CDE8FF', name: 'Mard_C13' },
    { code: '#D5FDFF', name: 'Mard_C14' },
    { code: '#22C4C6', name: 'Mard_C15' },
    { code: '#1557A8', name: 'Mard_C16' },
    { code: '#04D1F6', name: 'Mard_C17' },
    { code: '#1D3344', name: 'Mard_C18' },
    { code: '#1887A2', name: 'Mard_C19' },
    { code: '#176DAF', name: 'Mard_C20' },
    { code: '#BEDDFF', name: 'Mard_C21' },
    { code: '#67B4BE', name: 'Mard_C22' },
    { code: '#C8E2FF', name: 'Mard_C23' },
    { code: '#7CC4FF', name: 'Mard_C24' },
    { code: '#A9E5E5', name: 'Mard_C25' },
    { code: '#3CAED8', name: 'Mard_C26' },
    { code: '#D3DFFA', name: 'Mard_C27' },
    { code: '#BBCFED', name: 'Mard_C28' },
    { code: '#34488E', name: 'Mard_C29' },
    // D系列
    { code: '#AEB4F2', name: 'Mard_D1' },
    { code: '#858EDD', name: 'Mard_D2' },
    { code: '#2F54AF', name: 'Mard_D3' },
    { code: '#182A84', name: 'Mard_D4' },
    { code: '#B843C5', name: 'Mard_D5' },
    { code: '#AC7BDE', name: 'Mard_D6' },
    { code: '#8854B3', name: 'Mard_D7' },
    { code: '#E2D3FF', name: 'Mard_D8' },
    { code: '#D5B9F8', name: 'Mard_D9' },
    { code: '#361851', name: 'Mard_D10' },
    { code: '#B9BAE1', name: 'Mard_D11' },
    { code: '#DE9AD4', name: 'Mard_D12' },
    { code: '#B90095', name: 'Mard_D13' },
    { code: '#8B279B', name: 'Mard_D14' },
    { code: '#2F1F90', name: 'Mard_D15' },
    { code: '#E3E1EE', name: 'Mard_D16' },
    { code: '#C4D4F6', name: 'Mard_D17' },
    { code: '#A45EC7', name: 'Mard_D18' },
    { code: '#D8C3D7', name: 'Mard_D19' },
    { code: '#9C32B2', name: 'Mard_D20' },
    { code: '#9A009B', name: 'Mard_D21' },
    { code: '#333A95', name: 'Mard_D22' },
    { code: '#EBDAFC', name: 'Mard_D23' },
    { code: '#7786E5', name: 'Mard_D24' },
    { code: '#494FC7', name: 'Mard_D25' },
    { code: '#DFC2F8', name: 'Mard_D26' },
    // E系列
    { code: '#FDD3CC', name: 'Mard_E1' },
    { code: '#FEC0DF', name: 'Mard_E2' },
    { code: '#FFB7E7', name: 'Mard_E3' },
    { code: '#E8649E', name: 'Mard_E4' },
    { code: '#F551A2', name: 'Mard_E5' },
    { code: '#F13D74', name: 'Mard_E6' },
    { code: '#C63478', name: 'Mard_E7' },
    { code: '#FFDBE9', name: 'Mard_E8' },
    { code: '#E970CC', name: 'Mard_E9' },
    { code: '#D33793', name: 'Mard_E10' },
    { code: '#FCDDD2', name: 'Mard_E11' },
    { code: '#F78FC3', name: 'Mard_E12' },
    { code: '#B5006D', name: 'Mard_E13' },
    { code: '#FFD1BA', name: 'Mard_E14' },
    { code: '#F8C7C9', name: 'Mard_E15' },
    { code: '#FFF3EB', name: 'Mard_E16' },
    { code: '#FFE2EA', name: 'Mard_E17' },
    { code: '#FFC7DB', name: 'Mard_E18' },
    { code: '#FEBAD5', name: 'Mard_E19' },
    { code: '#D8C7D1', name: 'Mard_E20' },
    { code: '#BD9DA1', name: 'Mard_E21' },
    { code: '#B785A1', name: 'Mard_E22' },
    { code: '#937A8D', name: 'Mard_E23' },
    { code: '#E1BCE8', name: 'Mard_E24' },
    // F系列
    { code: '#FD957B', name: 'Mard_F1' },
    { code: '#FC3D46', name: 'Mard_F2' },
    { code: '#F74941', name: 'Mard_F3' },
    { code: '#FC283C', name: 'Mard_F4' },
    { code: '#E7002F', name: 'Mard_F5' },
    { code: '#943630', name: 'Mard_F6' },
    { code: '#971937', name: 'Mard_F7' },
    { code: '#BC0028', name: 'Mard_F8' },
    { code: '#E698AA', name: 'Mard_F24' },
    { code: '#E54B4F', name: 'Mard_F25' }
];

// 全局变量
let uploadedImage = null;
let canvas = document.getElementById('result-canvas');
let ctx = canvas.getContext('2d');
let colorMatchModal = document.getElementById('color-match-modal');
let colorPreviewCanvas = document.getElementById('color-preview-canvas');
let colorPreviewCtx = colorPreviewCanvas.getContext('2d');
let selectedColorCount = 8; // 默认8种颜色
let colorMap = new Map(); // 颜色映射
let originalImageData = null; // 原始图像数据

// 初始化事件监听
function initEventListeners() {
    // 图片上传
    document.getElementById('image-upload').addEventListener('change', handleImageUpload);
    
    // 生成按钮
    document.getElementById('generate-btn').addEventListener('click', generatePattern);
    
    // 下载按钮
    document.getElementById('download-btn').addEventListener('click', downloadPattern);
    
    // 应用颜色替换按钮
    document.getElementById('apply-color-replace').addEventListener('click', applyColorReplace);
    
    // 重新选择颜色按钮
    document.getElementById('reopen-color-match').addEventListener('click', function() {
        if (uploadedImage) {
            showColorMatchModal(uploadedImage);
        }
    });
    
    // 模态窗口事件
    document.getElementById('modal-close').addEventListener('click', closeColorMatchModal);
    document.getElementById('modal-cancel').addEventListener('click', closeColorMatchModal);
    document.getElementById('modal-confirm').addEventListener('click', confirmColorMatch);
    
    // 颜色数量按钮
    document.querySelectorAll('.color-count-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.color-count-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            selectedColorCount = parseInt(this.dataset.count);
            updateColorPreview();
        });
    });
    
    // 点击模态窗口外部关闭
    colorMatchModal.addEventListener('click', function(e) {
        if (e.target === this) {
            closeColorMatchModal();
        }
    });
}

// 应用颜色替换
function applyColorReplace() {
    const selectElements = document.querySelectorAll('.color-replace-select');
    const colorReplaceMap = new Map();
    
    selectElements.forEach(select => {
        const originalColor = select.dataset.originalColor;
        const newColor = select.value;
        if (originalColor !== newColor) {
            colorReplaceMap.set(originalColor, newColor);
        }
    });
    
    if (colorReplaceMap.size === 0) {
        return;
    }
    
    // 重新生成图纸，应用颜色替换
    generatePatternWithColorReplace(colorReplaceMap);
}

// 使用颜色替换生成图纸
function generatePatternWithColorReplace(colorReplaceMap) {
    if (!uploadedImage) {
        return;
    }
    
    // 获取参数
    const gridSize = parseInt(document.getElementById('grid-size').value);
    const maxWidth = parseInt(document.getElementById('max-width').value);
    const maxHeight = parseInt(document.getElementById('max-height').value);
    const showColorCodes = document.getElementById('show-color-codes').checked;
    const showGridLines = document.getElementById('show-grid-lines').checked;
    
    // 计算缩放比例，保持图片原始比例
    const scale = Math.min(maxWidth / uploadedImage.width, maxHeight / uploadedImage.height);
    
    const scaledWidth = Math.floor(uploadedImage.width * scale);
    const scaledHeight = Math.floor(uploadedImage.height * scale);
    
    // 设置画布大小，确保每个格子都是正方形
    canvas.width = scaledWidth * gridSize;
    canvas.height = scaledHeight * gridSize;
    
    // 清空画布
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // 临时画布用于处理图片
    const tempCanvas = document.createElement('canvas');
    const tempCtx = tempCanvas.getContext('2d');
    tempCanvas.width = scaledWidth;
    tempCanvas.height = scaledHeight;
    
    // 缩放图片到临时画布，保持原始比例
    tempCtx.drawImage(uploadedImage, 0, 0, scaledWidth, scaledHeight);
    
    // 获取像素数据
    const imageData = tempCtx.getImageData(0, 0, scaledWidth, scaledHeight);
    const data = imageData.data;
    
    // 执行颜色量化，与generatePattern函数保持一致
    const quantizedData = quantizeColors(imageData, selectedColorCount);
    const palette = quantizedData.palette;
    
    // 生成格子图案
    const usedColors = new Set();
    const colorMap = new Map(); // 用于颜色缓存，减少重复计算
    
    for (let y = 0; y < scaledHeight; y++) {
        for (let x = 0; x < scaledWidth; x++) {
            const index = (y * scaledWidth + x) * 4;
            const r = data[index];
            const g = data[index + 1];
            const b = data[index + 2];
            const a = data[index + 3];
            
            // 跳过透明像素
            if (a < 128) continue;
            
            // 颜色缓存键
            const colorKey = `${r},${g},${b}`;
            
            // 查找或计算最接近的颜色
            let closestColor;
            if (colorMap.has(colorKey)) {
                closestColor = colorMap.get(colorKey);
            } else {
                // 找到最近的调色板颜色，与generatePattern函数保持一致
                let minDistance = Infinity;
                let selectedColor = palette[0];
                
                palette.forEach(color => {
                    const colorRgb = hexToRgb(color.code);
                    const distance = Math.sqrt(
                        Math.pow(r - colorRgb.r, 2) +
                        Math.pow(g - colorRgb.g, 2) +
                        Math.pow(b - colorRgb.b, 2)
                    );
                    
                    if (distance < minDistance) {
                        minDistance = distance;
                        selectedColor = color;
                    }
                });
                
                closestColor = selectedColor;
                colorMap.set(colorKey, closestColor);
            }
            
            // 应用颜色替换
            let finalColorCode = closestColor.code;
            if (colorReplaceMap.has(closestColor.code)) {
                finalColorCode = colorReplaceMap.get(closestColor.code);
            }
            
            // 应用用户的颜色映射，与generatePattern函数保持一致
            if (userColorMap.has(closestColor.code)) {
                finalColorCode = userColorMap.get(closestColor.code);
            }
            
            // 处理黑白两色
            let finalColor;
            if (finalColorCode === '#000000') {
                finalColor = { code: '#000000', name: 'Black' };
            } else if (finalColorCode === '#FFFFFF') {
                finalColor = { code: '#FFFFFF', name: 'White' };
            } else {
                finalColor = colorPalette.find(c => c.code === finalColorCode) || closestColor;
            }
            
            usedColors.add(finalColor.code);
            
            // 绘制格子（确保是正方形）
            ctx.fillStyle = finalColor.code;
            ctx.fillRect(x * gridSize, y * gridSize, gridSize, gridSize);
            
            // 显示色号代码
            if (showColorCodes) {
                // 找到最终颜色的名称，与generatePattern函数保持一致
                let finalColorName;
                if (finalColorCode === '#000000') {
                    finalColorName = 'Black';
                } else if (finalColorCode === '#FFFFFF') {
                    finalColorName = 'White';
                } else {
                    const colorObj = colorPalette.find(c => c.code === finalColorCode);
                    finalColorName = colorObj ? colorObj.name.replace('Mard_', '') : closestColor.name.replace('Mard_', '');
                }
                
                ctx.fillStyle = '#000';
                ctx.font = `${Math.max(8, gridSize * 0.5)}px Arial`;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(finalColorName, x * gridSize + gridSize/2, y * gridSize + gridSize/2);
            }
        }
    }
    
    // 绘制辅助线
    if (showGridLines) {
        drawGridLines(scaledWidth, scaledHeight, gridSize);
    }
    
    // 生成颜色图例（只更新图例，不重新生成颜色替换控件）
    updateColorLegendOnly(usedColors);
    
    // 显示结果部分
    document.querySelector('.result-section').style.display = 'block';
    
    // 显示下载按钮
    document.getElementById('download-btn').style.display = 'block';
}

// 只更新颜色图例，不重新生成颜色替换控件
function updateColorLegendOnly(usedColors) {
    const legendContainer = document.getElementById('color-legend');
    legendContainer.innerHTML = '';
    
    usedColors.forEach(colorCode => {
        let color;
        if (colorCode === '#000000') {
            color = { code: '#000000', name: 'Black' };
        } else if (colorCode === '#FFFFFF') {
            color = { code: '#FFFFFF', name: 'White' };
        } else {
            color = colorPalette.find(c => c.code === colorCode);
        }
        
        if (color) {
            const swatch = document.createElement('div');
            swatch.className = 'color-swatch';
            
            const colorBox = document.createElement('div');
            colorBox.className = 'color-box';
            colorBox.style.backgroundColor = color.code;
            
            const colorInfo = document.createElement('div');
            colorInfo.className = 'color-info';
            // 只显示颜色代码后缀，去掉"Mard_"前缀
            const displayName = color.name.replace('Mard_', '');
            colorInfo.innerHTML = `<div class="color-code">${color.code}</div><div class="color-name">${displayName}</div>`;
            
            swatch.appendChild(colorBox);
            swatch.appendChild(colorInfo);
            legendContainer.appendChild(swatch);
        }
    });
    
    // 更新颜色替换控件中的选项，确保只显示当前使用的颜色
    updateColorReplaceOptions(usedColors);
}

// 更新颜色替换控件中的选项
function updateColorReplaceOptions(usedColors) {
    const selectElements = document.querySelectorAll('.color-replace-select');
    
    // 创建可用颜色集合：当前使用的颜色 + 黑白两色
    const availableColors = new Set(usedColors);
    availableColors.add('#000000');
    availableColors.add('#FFFFFF');
    
    selectElements.forEach(select => {
        const originalColor = select.dataset.originalColor;
        const currentValue = select.value;
        
        // 保存当前选中的值
        let selectedValue = currentValue;
        
        // 清空所有选项
        select.innerHTML = '';
        
        // 添加可用颜色选项
        availableColors.forEach(colorCode => {
            let color;
            if (colorCode === '#000000') {
                color = { code: '#000000', name: 'Black' };
            } else if (colorCode === '#FFFFFF') {
                color = { code: '#FFFFFF', name: 'White' };
            } else {
                color = colorPalette.find(c => c.code === colorCode);
            }
            
            if (color) {
                const option = document.createElement('option');
                option.value = color.code;
                option.textContent = color.name.replace('Mard_', '');
                option.style.backgroundColor = color.code;
                if (color.code === selectedValue) {
                    option.selected = true;
                }
                select.appendChild(option);
            }
        });
    });
}

// 处理图片上传
function handleImageUpload(e) {
    const file = e.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = function(e) {
        const img = new Image();
        img.onload = function() {
            uploadedImage = img;
            displayImagePreview(img);
            
            // 显示颜色匹配模态窗口
            showColorMatchModal(img);
        };
        img.src = e.target.result;
    };
    reader.readAsDataURL(file);
}

// 显示颜色匹配模态窗口
function showColorMatchModal(img) {
    // 设置预览画布大小
    const previewWidth = Math.min(img.width, 300);
    const previewHeight = Math.min(img.height, 300);
    const scale = Math.min(previewWidth / img.width, previewHeight / img.height);
    
    colorPreviewCanvas.width = img.width * scale;
    colorPreviewCanvas.height = img.height * scale;
    
    // 绘制预览图片
    colorPreviewCtx.drawImage(img, 0, 0, colorPreviewCanvas.width, colorPreviewCanvas.height);
    
    // 保存原始图像数据
    originalImageData = colorPreviewCtx.getImageData(0, 0, colorPreviewCanvas.width, colorPreviewCanvas.height);
    
    // 激活默认颜色数量按钮
    document.querySelectorAll('.color-count-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.count === selectedColorCount.toString()) {
            btn.classList.add('active');
        }
    });
    
    // 更新颜色预览
    updateColorPreview();
    
    // 显示模态窗口
    colorMatchModal.style.display = 'flex';
}

// 关闭颜色匹配模态窗口
function closeColorMatchModal() {
    colorMatchModal.style.display = 'none';
}

// 更新颜色预览
function updateColorPreview() {
    if (!originalImageData) return;
    
    // 执行颜色量化
    const quantizedData = quantizeColors(originalImageData, selectedColorCount);
    
    // 绘制量化后的图像
    colorPreviewCtx.putImageData(quantizedData.imageData, 0, 0);
    
    // 生成颜色映射
    generateColorMap(quantizedData.palette);
}

// 绘制像素格子效果
function drawPixelGrid(ctx, width, height, gridSize) {
    ctx.strokeStyle = '#333';
    ctx.lineWidth = 0.5;
    
    // 绘制垂直线
    for (let x = 0; x <= width; x++) {
        ctx.beginPath();
        ctx.moveTo(x * gridSize, 0);
        ctx.lineTo(x * gridSize, height * gridSize);
        ctx.stroke();
    }
    
    // 绘制水平线
    for (let y = 0; y <= height; y++) {
        ctx.beginPath();
        ctx.moveTo(0, y * gridSize);
        ctx.lineTo(width * gridSize, y * gridSize);
        ctx.stroke();
    }
}

// 全局变量：颜色映射
let userColorMap = new Map();

// 确认颜色匹配
function confirmColorMatch() {
    // 收集用户的颜色映射选择
    const selectElements = document.querySelectorAll('.color-replace-select');
    userColorMap.clear();
    
    selectElements.forEach(select => {
        const originalColor = select.dataset.originalColor;
        const targetColor = select.value;
        if (originalColor !== targetColor) {
            userColorMap.set(originalColor, targetColor);
        }
    });
    
    // 更新图片预览区域，显示经过颜色替换后的预览图
    updateImagePreviewWithColorReplace();
    
    // 关闭模态窗口
    closeColorMatchModal();
    
    // 显示重新选择颜色按钮
    document.getElementById('reopen-color-match').style.display = 'block';
    
    // 现在可以生成图纸
    console.log('颜色匹配确认，使用', selectedColorCount, '种颜色');
    console.log('用户颜色映射:', userColorMap);
}

// 更新图片预览区域，显示经过颜色替换后的预览图
function updateImagePreviewWithColorReplace() {
    if (!uploadedImage) return;
    
    // 创建临时画布
    const tempCanvas = document.createElement('canvas');
    const tempCtx = tempCanvas.getContext('2d');
    
    // 设置临时画布大小为预览大小
    const previewContainer = document.getElementById('image-preview');
    const previewWidth = Math.min(uploadedImage.width, 500);
    const previewHeight = Math.min(uploadedImage.height, 300);
    const scale = Math.min(previewWidth / uploadedImage.width, previewHeight / uploadedImage.height);
    
    tempCanvas.width = uploadedImage.width * scale;
    tempCanvas.height = uploadedImage.height * scale;
    
    // 绘制原始图片
    tempCtx.drawImage(uploadedImage, 0, 0, tempCanvas.width, tempCanvas.height);
    
    // 获取像素数据
    const imageData = tempCtx.getImageData(0, 0, tempCanvas.width, tempCanvas.height);
    const data = imageData.data;
    
    // 执行颜色量化
    const quantizedData = quantizeColors(imageData, selectedColorCount);
    const palette = quantizedData.palette;
    
    // 应用颜色映射
    for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        const a = data[i + 3];
        
        if (a > 128) {
            // 找到最近的调色板颜色
            let minDistance = Infinity;
            let closestColor = palette[0];
            
            palette.forEach(color => {
                const colorRgb = hexToRgb(color.code);
                const distance = Math.sqrt(
                    Math.pow(r - colorRgb.r, 2) +
                    Math.pow(g - colorRgb.g, 2) +
                    Math.pow(b - colorRgb.b, 2)
                );
                
                if (distance < minDistance) {
                    minDistance = distance;
                    closestColor = color;
                }
            });
            
            // 应用用户的颜色映射
            let finalColorCode = closestColor.code;
            if (userColorMap.has(closestColor.code)) {
                finalColorCode = userColorMap.get(closestColor.code);
            }
            
            // 更新像素颜色
            const finalColorRgb = hexToRgb(finalColorCode);
            data[i] = finalColorRgb.r;
            data[i + 1] = finalColorRgb.g;
            data[i + 2] = finalColorRgb.b;
        }
    }
    
    // 绘制处理后的图像
    tempCtx.putImageData(new ImageData(data, tempCanvas.width, tempCanvas.height), 0, 0);
    
    // 将临时画布转换为图片并显示
    const processedImage = new Image();
    processedImage.src = tempCanvas.toDataURL('image/png');
    
    // 清空预览容器，保存按钮引用
    const reopenButton = document.getElementById('reopen-color-match');
    previewContainer.innerHTML = '';
    
    // 添加处理后的图片
    previewContainer.appendChild(processedImage);
    
    // 重新添加重新选择颜色按钮
    if (reopenButton) {
        previewContainer.appendChild(reopenButton);
        reopenButton.style.display = 'block';
    }
}

// 颜色量化（k-means聚类）
function quantizeColors(imageData, colorCount) {
    const data = imageData.data;
    const pixels = [];
    
    // 收集所有非透明像素
    for (let i = 0; i < data.length; i += 4) {
        const alpha = data[i + 3];
        if (alpha > 128) {
            pixels.push({
                r: data[i],
                g: data[i + 1],
                b: data[i + 2],
                a: alpha
            });
        }
    }
    
    // 如果没有像素，返回原始数据
    if (pixels.length === 0) {
        return {
            imageData: imageData,
            palette: []
        };
    }
    
    // 初始化聚类中心
    let centroids = [];
    for (let i = 0; i < colorCount; i++) {
        const randomPixel = pixels[Math.floor(Math.random() * pixels.length)];
        centroids.push({ r: randomPixel.r, g: randomPixel.g, b: randomPixel.b });
    }
    
    // 迭代聚类
    let maxIterations = 10;
    for (let iteration = 0; iteration < maxIterations; iteration++) {
        // 分配像素到最近的聚类中心
        const clusters = Array(colorCount).fill().map(() => []);
        
        pixels.forEach(pixel => {
            let minDistance = Infinity;
            let closestCentroidIndex = 0;
            
            centroids.forEach((centroid, index) => {
                const distance = Math.sqrt(
                    Math.pow(pixel.r - centroid.r, 2) +
                    Math.pow(pixel.g - centroid.g, 2) +
                    Math.pow(pixel.b - centroid.b, 2)
                );
                
                if (distance < minDistance) {
                    minDistance = distance;
                    closestCentroidIndex = index;
                }
            });
            
            clusters[closestCentroidIndex].push(pixel);
        });
        
        // 更新聚类中心
        let newCentroids = centroids.map((centroid, index) => {
            const cluster = clusters[index];
            if (cluster.length === 0) {
                return centroid;
            }
            
            const sum = cluster.reduce((acc, pixel) => {
                return {
                    r: acc.r + pixel.r,
                    g: acc.g + pixel.g,
                    b: acc.b + pixel.b
                };
            }, { r: 0, g: 0, b: 0 });
            
            return {
                r: Math.round(sum.r / cluster.length),
                g: Math.round(sum.g / cluster.length),
                b: Math.round(sum.b / cluster.length)
            };
        });
        
        // 检查收敛
        const converged = centroids.every((centroid, index) => {
            const newCentroid = newCentroids[index];
            return Math.abs(centroid.r - newCentroid.r) < 1 &&
                   Math.abs(centroid.g - newCentroid.g) < 1 &&
                   Math.abs(centroid.b - newCentroid.b) < 1;
        });
        
        if (converged) {
            break;
        }
        
        centroids = newCentroids;
    }
    
    // 为每个聚类中心找到最接近的色卡颜色
    const palette = centroids.map(centroid => {
        return findClosestColor(centroid.r, centroid.g, centroid.b);
    });
    
    // 创建量化后的图像数据
    const quantizedData = new Uint8ClampedArray(data);
    for (let i = 0; i < data.length; i += 4) {
        const alpha = data[i + 3];
        if (alpha > 128) {
            const pixel = {
                r: data[i],
                g: data[i + 1],
                b: data[i + 2]
            };
            
            // 找到最近的聚类中心
            let minDistance = Infinity;
            let closestPaletteIndex = 0;
            
            centroids.forEach((centroid, index) => {
                const distance = Math.sqrt(
                    Math.pow(pixel.r - centroid.r, 2) +
                    Math.pow(pixel.g - centroid.g, 2) +
                    Math.pow(pixel.b - centroid.b, 2)
                );
                
                if (distance < minDistance) {
                    minDistance = distance;
                    closestPaletteIndex = index;
                }
            });
            
            // 使用调色板中的颜色
            const selectedColor = hexToRgb(palette[closestPaletteIndex].code);
            quantizedData[i] = selectedColor.r;
            quantizedData[i + 1] = selectedColor.g;
            quantizedData[i + 2] = selectedColor.b;
        }
    }
    
    const quantizedImageData = new ImageData(quantizedData, imageData.width, imageData.height);
    
    return {
        imageData: quantizedImageData,
        palette: palette
    };
}

// 生成颜色映射
function generateColorMap(palette) {
    const container = document.getElementById('color-map-container');
    container.innerHTML = '';
    
    // 添加颜色映射标题
    const title = document.createElement('h3');
    title.textContent = '颜色映射';
    title.style.marginBottom = '15px';
    container.appendChild(title);
    
    // 创建颜色映射元素
    const colorMapElement = document.createElement('div');
    colorMapElement.style.display = 'grid';
    colorMapElement.style.gridTemplateColumns = 'repeat(auto-fill, minmax(150px, 1fr))';
    colorMapElement.style.gap = '15px';
    
    // 创建去重后的颜色选项集合
    const uniqueColors = new Set();
    palette.forEach(color => uniqueColors.add(color.code));
    
    // 转换为数组
    const uniqueColorArray = Array.from(uniqueColors).map(code => {
        return palette.find(color => color.code === code);
    }).filter(Boolean);
    
    // 为每个颜色创建映射项
    uniqueColorArray.forEach((color, index) => {
        const colorMapItem = document.createElement('div');
        colorMapItem.style.display = 'flex';
        colorMapItem.style.alignItems = 'center';
        colorMapItem.style.gap = '10px';
        
        // 原始颜色
        const originalColorBox = document.createElement('div');
        originalColorBox.style.width = '30px';
        originalColorBox.style.height = '30px';
        originalColorBox.style.backgroundColor = color.code;
        originalColorBox.style.border = '1px solid #ddd';
        originalColorBox.style.borderRadius = '4px';
        
        // 箭头
        const arrow = document.createElement('span');
        arrow.textContent = '→';
        arrow.style.fontSize = '16px';
        
        // 目标颜色选择器
        const targetColorSelect = document.createElement('select');
        targetColorSelect.className = 'color-replace-select';
        targetColorSelect.dataset.originalColor = color.code;
        
        // 添加去重后的颜色选项
        uniqueColorArray.forEach((optionColor, optionIndex) => {
            const option = document.createElement('option');
            option.value = optionColor.code;
            option.textContent = optionColor.name.replace('Mard_', '');
            option.style.backgroundColor = optionColor.code;
            if (optionColor.code === color.code) {
                option.selected = true;
            }
            targetColorSelect.appendChild(option);
        });
        
        // 添加黑色和白色选项
        const blackOption = document.createElement('option');
        blackOption.value = '#000000';
        blackOption.textContent = 'Black';
        blackOption.style.backgroundColor = '#000000';
        blackOption.style.color = '#ffffff';
        targetColorSelect.appendChild(blackOption);
        
        const whiteOption = document.createElement('option');
        whiteOption.value = '#FFFFFF';
        whiteOption.textContent = 'White';
        whiteOption.style.backgroundColor = '#FFFFFF';
        targetColorSelect.appendChild(whiteOption);
        
        // 添加事件监听器，实现实时颜色替换预览
        targetColorSelect.addEventListener('change', function() {
            updateColorPreviewWithReplace();
        });
        
        colorMapItem.appendChild(originalColorBox);
        colorMapItem.appendChild(arrow);
        colorMapItem.appendChild(targetColorSelect);
        colorMapElement.appendChild(colorMapItem);
    });
    
    container.appendChild(colorMapElement);
}

// 实时更新颜色替换预览
function updateColorPreviewWithReplace() {
    if (!originalImageData) return;
    
    // 收集当前的颜色映射选择
    const selectElements = document.querySelectorAll('.color-replace-select');
    const tempColorMap = new Map();
    
    selectElements.forEach(select => {
        const originalColor = select.dataset.originalColor;
        const targetColor = select.value;
        if (originalColor !== targetColor) {
            tempColorMap.set(originalColor, targetColor);
        }
    });
    
    // 创建临时画布数据
    const tempData = new Uint8ClampedArray(originalImageData.data);
    
    // 执行颜色量化获取调色板
    const quantizedData = quantizeColors(originalImageData, selectedColorCount);
    const palette = quantizedData.palette;
    
    // 应用颜色映射
    for (let i = 0; i < tempData.length; i += 4) {
        const alpha = tempData[i + 3];
        if (alpha > 128) {
            const r = tempData[i];
            const g = tempData[i + 1];
            const b = tempData[i + 2];
            
            // 找到最近的调色板颜色
            let minDistance = Infinity;
            let closestColor = palette[0];
            
            palette.forEach(color => {
                const colorRgb = hexToRgb(color.code);
                const distance = Math.sqrt(
                    Math.pow(r - colorRgb.r, 2) +
                    Math.pow(g - colorRgb.g, 2) +
                    Math.pow(b - colorRgb.b, 2)
                );
                
                if (distance < minDistance) {
                    minDistance = distance;
                    closestColor = color;
                }
            });
            
            // 应用颜色映射
            let finalColorCode = closestColor.code;
            if (tempColorMap.has(closestColor.code)) {
                finalColorCode = tempColorMap.get(closestColor.code);
            }
            
            // 更新像素颜色
            const finalColorRgb = hexToRgb(finalColorCode);
            tempData[i] = finalColorRgb.r;
            tempData[i + 1] = finalColorRgb.g;
            tempData[i + 2] = finalColorRgb.b;
        }
    }
    
    // 绘制处理后的图像
    colorPreviewCtx.putImageData(new ImageData(tempData, originalImageData.width, originalImageData.height), 0, 0);
}

// 显示图片预览
function displayImagePreview(img) {
    const previewContainer = document.getElementById('image-preview');
    // 保存按钮引用
    const reopenButton = document.getElementById('reopen-color-match');
    previewContainer.innerHTML = '';
    previewContainer.appendChild(img);
    // 重新添加重新选择颜色按钮
    if (reopenButton) {
        previewContainer.appendChild(reopenButton);
    }
}

// 生成拼豆图纸
function generatePattern() {
    if (!uploadedImage) {
        alert('请先上传PNG图片');
        return;
    }
    
    // 获取参数
    const gridSize = parseInt(document.getElementById('grid-size').value);
    const maxWidth = parseInt(document.getElementById('max-width').value);
    const maxHeight = parseInt(document.getElementById('max-height').value);
    const showColorCodes = document.getElementById('show-color-codes').checked;
    const showGridLines = document.getElementById('show-grid-lines').checked;
    
    // 计算缩放比例，保持图片原始比例
    const scale = Math.min(maxWidth / uploadedImage.width, maxHeight / uploadedImage.height);
    
    const scaledWidth = Math.floor(uploadedImage.width * scale);
    const scaledHeight = Math.floor(uploadedImage.height * scale);
    
    // 设置画布大小，确保每个格子都是正方形
    canvas.width = scaledWidth * gridSize;
    canvas.height = scaledHeight * gridSize;
    
    // 清空画布
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // 临时画布用于处理图片
    const tempCanvas = document.createElement('canvas');
    const tempCtx = tempCanvas.getContext('2d');
    tempCanvas.width = scaledWidth;
    tempCanvas.height = scaledHeight;
    
    // 缩放图片到临时画布，保持原始比例
    tempCtx.drawImage(uploadedImage, 0, 0, scaledWidth, scaledHeight);
    
    // 获取像素数据
    const imageData = tempCtx.getImageData(0, 0, scaledWidth, scaledHeight);
    const data = imageData.data;
    
    // 执行颜色量化
    const quantizedData = quantizeColors(imageData, selectedColorCount);
    const palette = quantizedData.palette;
    
    // 生成格子图案
    const usedColors = new Set();
    const colorMap = new Map(); // 用于颜色缓存，减少重复计算
    
    for (let y = 0; y < scaledHeight; y++) {
        for (let x = 0; x < scaledWidth; x++) {
            const index = (y * scaledWidth + x) * 4;
            const r = data[index];
            const g = data[index + 1];
            const b = data[index + 2];
            const a = data[index + 3];
            
            // 跳过透明像素
            if (a < 128) continue;
            
            // 颜色缓存键
            const colorKey = `${r},${g},${b}`;
            
            // 查找或计算最接近的颜色
            let closestColor;
            if (colorMap.has(colorKey)) {
                closestColor = colorMap.get(colorKey);
            } else {
                // 找到最近的调色板颜色
                let minDistance = Infinity;
                let selectedColor = palette[0];
                
                palette.forEach(color => {
                    const colorRgb = hexToRgb(color.code);
                    const distance = Math.sqrt(
                        Math.pow(r - colorRgb.r, 2) +
                        Math.pow(g - colorRgb.g, 2) +
                        Math.pow(b - colorRgb.b, 2)
                    );
                    
                    if (distance < minDistance) {
                        minDistance = distance;
                        selectedColor = color;
                    }
                });
                
                closestColor = selectedColor;
                colorMap.set(colorKey, closestColor);
            }
            
            // 应用用户的颜色映射
            let finalColorCode = closestColor.code;
            if (userColorMap.has(closestColor.code)) {
                finalColorCode = userColorMap.get(closestColor.code);
            }
            
            // 添加最终使用的颜色到集合中
            usedColors.add(finalColorCode);
            
            // 绘制格子（确保是正方形）
            ctx.fillStyle = finalColorCode;
            ctx.fillRect(x * gridSize, y * gridSize, gridSize, gridSize);
            
            // 显示色号代码
            if (showColorCodes) {
                // 找到最终颜色的名称
                let finalColorName;
                if (finalColorCode === '#000000') {
                    finalColorName = 'Black';
                } else if (finalColorCode === '#FFFFFF') {
                    finalColorName = 'White';
                } else {
                    const finalColor = colorPalette.find(c => c.code === finalColorCode);
                    finalColorName = finalColor ? finalColor.name.replace('Mard_', '') : closestColor.name.replace('Mard_', '');
                }
                
                ctx.fillStyle = '#000';
                ctx.font = `${Math.max(8, gridSize * 0.5)}px Arial`;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(finalColorName, x * gridSize + gridSize/2, y * gridSize + gridSize/2);
            }
        }
    }
    
    // 绘制辅助线
    if (showGridLines) {
        drawGridLines(scaledWidth, scaledHeight, gridSize);
    }
    
    // 生成颜色图例
    generateColorLegend(usedColors);
    
    // 显示结果部分
    document.querySelector('.result-section').style.display = 'block';
    
    // 显示下载按钮
    document.getElementById('download-btn').style.display = 'block';
}

// 绘制辅助线
function drawGridLines(width, height, gridSize) {
    // 绘制垂直线
    for (let x = 0; x <= width; x++) {
        if (x % 10 === 0) {
            // 每10个的辅助线：黑色实线，加粗
            ctx.strokeStyle = '#333';
            ctx.lineWidth = 2;
            ctx.setLineDash([]);
        } else {
            // 平常的辅助线：灰色虚线
            ctx.strokeStyle = '#999';
            ctx.lineWidth = 1;
            ctx.setLineDash([3, 3]);
        }
        ctx.beginPath();
        ctx.moveTo(x * gridSize, 0);
        ctx.lineTo(x * gridSize, height * gridSize);
        ctx.stroke();
    }
    
    // 绘制水平线
    for (let y = 0; y <= height; y++) {
        if (y % 10 === 0) {
            // 每10个的辅助线：黑色实线，加粗
            ctx.strokeStyle = '#333';
            ctx.lineWidth = 2;
            ctx.setLineDash([]);
        } else {
            // 平常的辅助线：灰色虚线
            ctx.strokeStyle = '#999';
            ctx.lineWidth = 1;
            ctx.setLineDash([3, 3]);
        }
        ctx.beginPath();
        ctx.moveTo(0, y * gridSize);
        ctx.lineTo(width * gridSize, y * gridSize);
        ctx.stroke();
    }
    
    // 重置线条样式
    ctx.setLineDash([]);
}

// 查找最接近的颜色
function findClosestColor(r, g, b) {
    let closestColor = colorPalette[0];
    let minDistance = Infinity;
    
    for (const color of colorPalette) {
        const colorRgb = hexToRgb(color.code);
        const distance = calculateColorDistance(r, g, b, colorRgb.r, colorRgb.g, colorRgb.b);
        
        if (distance < minDistance) {
            minDistance = distance;
            closestColor = color;
        }
    }
    
    return closestColor;
}

// 十六进制颜色转RGB
function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : { r: 0, g: 0, b: 0 };
}

// 计算颜色距离
function calculateColorDistance(r1, g1, b1, r2, g2, b2) {
    const dr = r1 - r2;
    const dg = g1 - g2;
    const db = b1 - b2;
    return Math.sqrt(dr * dr + dg * dg + db * db);
}

// 生成颜色图例
function generateColorLegend(usedColors) {
    const legendContainer = document.getElementById('color-legend');
    legendContainer.innerHTML = '';
    
    usedColors.forEach(colorCode => {
        let color;
        if (colorCode === '#000000') {
            color = { code: '#000000', name: 'Black' };
        } else if (colorCode === '#FFFFFF') {
            color = { code: '#FFFFFF', name: 'White' };
        } else {
            color = colorPalette.find(c => c.code === colorCode);
        }
        
        if (color) {
            const swatch = document.createElement('div');
            swatch.className = 'color-swatch';
            
            const colorBox = document.createElement('div');
            colorBox.className = 'color-box';
            colorBox.style.backgroundColor = color.code;
            
            const colorInfo = document.createElement('div');
            colorInfo.className = 'color-info';
            // 只显示颜色代码后缀，去掉"Mard_"前缀
            const displayName = color.name.replace('Mard_', '');
            colorInfo.innerHTML = `<div class="color-code">${color.code}</div><div class="color-name">${displayName}</div>`;
            
            swatch.appendChild(colorBox);
            swatch.appendChild(colorInfo);
            legendContainer.appendChild(swatch);
        }
    });
    
    // 生成颜色替换控件
    generateColorReplaceControls(usedColors);
}

// 生成颜色替换控件
function generateColorReplaceControls(usedColors) {
    const controlsContainer = document.getElementById('color-replace-controls');
    controlsContainer.innerHTML = '';
    
    // 创建可用颜色集合：已使用的颜色 + 黑白两色
    const availableColors = new Set(usedColors);
    
    // 添加黑色和白色
    const blackColor = { code: '#000000', name: 'Black' };
    const whiteColor = { code: '#FFFFFF', name: 'White' };
    availableColors.add(blackColor.code);
    availableColors.add(whiteColor.code);
    
    usedColors.forEach(colorCode => {
        const color = colorPalette.find(c => c.code === colorCode);
        if (color) {
            const control = document.createElement('div');
            control.className = 'color-replace-control';
            control.style.display = 'flex';
            control.style.alignItems = 'center';
            control.style.gap = '10px';
            control.style.margin = '10px 0';
            
            const originalColorBox = document.createElement('div');
            originalColorBox.className = 'color-box';
            originalColorBox.style.backgroundColor = color.code;
            
            const label = document.createElement('span');
            // 只显示颜色代码后缀，去掉"Mard_"前缀
            const displayName = color.name.replace('Mard_', '');
            label.textContent = `替换 ${displayName}:`;
            label.style.width = '120px';
            
            const select = document.createElement('select');
            select.className = 'color-replace-select';
            select.dataset.originalColor = color.code;
            
            // 添加可用颜色选项
            availableColors.forEach(availableColorCode => {
                let optionColor;
                if (availableColorCode === blackColor.code) {
                    optionColor = blackColor;
                } else if (availableColorCode === whiteColor.code) {
                    optionColor = whiteColor;
                } else {
                    optionColor = colorPalette.find(c => c.code === availableColorCode);
                }
                
                if (optionColor) {
                    const option = document.createElement('option');
                    option.value = optionColor.code;
                    // 只显示颜色代码后缀，去掉"Mard_"前缀
                    const optionDisplayName = optionColor.name.replace('Mard_', '');
                    option.textContent = optionDisplayName;
                    option.style.backgroundColor = optionColor.code;
                    if (optionColor.code === color.code) {
                        option.selected = true;
                    }
                    select.appendChild(option);
                }
            });
            
            // 添加事件监听器，实现实时颜色替换
            select.addEventListener('change', function() {
                applyRealTimeColorReplace();
            });
            
            control.appendChild(originalColorBox);
            control.appendChild(label);
            control.appendChild(select);
            controlsContainer.appendChild(control);
        }
    });
    
    // 显示颜色替换部分
    document.getElementById('color-replace-section').style.display = 'block';
}

// 实时应用颜色替换
function applyRealTimeColorReplace() {
    const selectElements = document.querySelectorAll('.color-replace-select');
    const colorReplaceMap = new Map();
    
    // 收集所有颜色替换选择
    selectElements.forEach(select => {
        const originalColor = select.dataset.originalColor;
        const newColor = select.value;
        if (originalColor !== newColor) {
            colorReplaceMap.set(originalColor, newColor);
        }
    });
    
    if (colorReplaceMap.size === 0) {
        return;
    }
    
    // 重新生成图纸，应用颜色替换
    generatePatternWithColorReplace(colorReplaceMap);
}

// 下载图纸
function downloadPattern() {
    if (!canvas.width || !canvas.height) {
        alert('请先生成图纸');
        return;
    }
    
    const link = document.createElement('a');
    link.download = '拼豆图纸.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
}

// 初始化应用
function initApp() {
    initEventListeners();
    console.log('拼豆图纸生成器已初始化');
}

// 启动应用
window.onload = initApp;