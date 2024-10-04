document.getElementById('recipeImage').addEventListener('change', function (event) {
    var file = event.target.files[0];
    if (file) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var imagePreview = document.getElementById('imagePreview');
            imagePreview.src = e.target.result;
            imagePreview.style.display = 'block';
        };
        reader.readAsDataURL(file);
    }
});

document.getElementById('recipeVideo').addEventListener('change', function (event) {
    var file = event.target.files[0];
    if (file) {
        var videoPreview = document.getElementById('videoPreview');
        var source = videoPreview.querySelector('source');
        source.src = URL.createObjectURL(file);
        videoPreview.style.display = 'block';
        videoPreview.load();
    }
});

document.getElementById('addIngredientBtn').addEventListener('click', function () {
    // 創建新的欄位組
    var newFieldGroup = document.createElement('div');
    newFieldGroup.className = 'row mb-3';

    // 創建食材欄位
    var ingredientLabel = document.createElement('label');
    ingredientLabel.className = 'col-sm-2 col-form-label';
    ingredientLabel.innerText = '食材';
    newFieldGroup.appendChild(ingredientLabel);

    var ingredientDiv = document.createElement('div');
    ingredientDiv.className = 'col-sm-3';
    var ingredientInput = document.createElement('input');
    ingredientInput.type = 'text';
    ingredientInput.className = 'form-control';
    ingredientInput.placeholder = '食材';
    ingredientDiv.appendChild(ingredientInput);
    newFieldGroup.appendChild(ingredientDiv);

    // 創建份量欄位
    var quantityLabel = document.createElement('label');
    quantityLabel.className = 'col-sm-2 col-form-label';
    quantityLabel.innerText = '份量';
    newFieldGroup.appendChild(quantityLabel);

    var quantityDiv = document.createElement('div');
    quantityDiv.className = 'col-sm-3';
    var quantityInput = document.createElement('input');
    quantityInput.type = 'text';
    quantityInput.className = 'form-control';
    quantityInput.placeholder = '份量';
    quantityDiv.appendChild(quantityInput);
    newFieldGroup.appendChild(quantityDiv);

    // 創建刪除按鈕
    var deleteBtnDiv = document.createElement('div');
    deleteBtnDiv.className = 'col-sm-2';
    var deleteBtn = document.createElement('button');
    deleteBtn.type = 'button';
    deleteBtn.className = 'btn btn-danger';
    deleteBtn.innerHTML = '<i class="bi bi-trash3"></i>';
    deleteBtn.addEventListener('click', function () {
        newFieldGroup.remove();
    });
    deleteBtnDiv.appendChild(deleteBtn);
    newFieldGroup.appendChild(deleteBtnDiv);

    // 將新的欄位組添加到容器中
    document.getElementById('ingredientContainer').appendChild(newFieldGroup);
});

let stepCount = 0;

function addStep() {
    stepCount++;
    const stepContainer = document.createElement('div');
    stepContainer.className = 'step-container row';
    stepContainer.innerHTML = `
                <div class="col-sm-2">
                    <div class="upload-box" onclick="document.getElementById('uploadImage${stepCount}').click()">
                        <input type="file" id="uploadImage${stepCount}" style="display: none;" onchange="previewImage(event, ${stepCount})">
                        <img id="imagePreview${stepCount}" src="#" alt="圖片預覽">
                        <div>點擊新增圖片</div>
                        <div>比例建議 4:3</div>
                    </div>
                </div>
                <div class="col-sm-8">
                    <div class="step-number">步驟 ${stepCount}</div>
                    <textarea class="form-control" rows="3" placeholder="請輸入步驟說明"></textarea>
                </div>
                <div class="col-sm-2 step-actions">
                    <button type="button" class="btn btn-danger" onclick="removeStep(this)"><i class="bi bi-trash3"></i></button>
                </div>
            `;
    document.getElementById('stepsContainer').appendChild(stepContainer);
}

function removeStep(button) {
    button.closest('.step-container').remove();
    updateStepNumbers();
}

function updateStepNumbers() {
    const steps = document.querySelectorAll('.step-container .step-number');
    steps.forEach((step, index) => {
        step.textContent = `步驟 ${index + 1}`;
    });
    stepCount = steps.length;
}

function previewImage(event, stepId) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const imagePreview = document.getElementById(`imagePreview${stepId}`);
            imagePreview.src = e.target.result;
            imagePreview.style.display = 'block';
        };
        reader.readAsDataURL(file);
    }
}

document.getElementById('addStepBtn').addEventListener('click', addStep);

document.getElementById('publishButton').addEventListener('click', function () {
    if (confirm('確認發布?')) {
        // 執行發布操作
        alert('已發布');
        window.location.href = '../HTML/recipe01.html';
    }
});

document.getElementById('saveButton').addEventListener('click', function () {
    if (confirm('儲存後仍可編輯')) {
        // 執行儲存操作
        alert('已儲存');
        window.location.href = '../HTML/recipe01.html';
    }
});

document.getElementById('cancelButton').addEventListener('click', function () {
    if (confirm('確認放棄編輯?')) {
        // 執行取消操作
        alert('已取消');
        window.location.href = '../HTML/recipe01.html';
    }
});