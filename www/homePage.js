document.addEventListener('deviceready', function () {
    admob.banner.config({
        id: 'ca-app-pub-4178489843750814/2195493355',
         })
        
         // Create banner
         admob.banner.prepare()
        
         // Show the banner
         admob.banner.show()
        
         admob.interstitial.config({
              id: 'ca-app-pub-4178489843750814/4610617712',
             })
            
             admob.interstitial.prepare()
            
             admob.interstitial.show()
            

    // admob.banner.prepare();
    // admob.banner.show({
    //     id: 'ca-app-pub-4178489843750814/2195493355',
    //     autoShow: true
    // });
    // admob.interstitial.prepare();
    // admob.interstitial.show({
    //     id: 'ca-app-pub-4178489843750814/4610617712',
    //     autoShow: true
    // });
}, false);

// document.getElementById('interstitialad').addEventListener('click', interstitialAd)

// function interstitialAd() {

//     admob.interstitial.prepare();

// }
function Calculator() {
    var selectedValue = document.getElementById("plane").value;
    var calculator = document.getElementById("calculator");
    calculator.innerHTML = `
    <div class="gender" id="genderDiv">
        <span>יש לבחור מין:</span>
        <div id="Gender">
            <label class="genderText"> 
                <input onclick="mallFem()" type="radio" name="gender" value="f" class="genderRadio" id="F">
                <span>נקבה</span>
            </label>
            <label class="genderText">
                <input onclick="mallFem()" type="radio" name="gender" value="m" class="genderRadio" id="M">
                <span>זכר</span>
            </label>
        </div>
    </div>
    `;
    // BMI
    if (selectedValue == "BMI") {
        calculator.innerHTML = `
                <div>
                    <span>גובה:</span>
                    <input type="text" name="" id="BMIHeight" placeholder='ס"מ' class="Input">
                </div>
                <div>
                    <span>משקל:</span>
                    <input type="text" name="" id="BMIWeight" placeholder='ק"ג' class="Input">
                </div>
                <div id="result">
                    <button onclick="BMI()" type="button" class="btn" name="result">חשב</button>
                    <p id="ansP">
                        ה-BMI שלך יוצג כאן
                    </p>
                    <div id="ul">
                        <ul>
                            <li id="li1">תת משקל
                                <span id="liSpan1">BMI קטן מ-18.5</span>
                            </li>
                            <li id="li2">
                                משקל תקין   
                                <span id="liSpan2">BMI  נע בין 18.5 ל-25</span>
                            </li>
                            <li id="li3">
                                עודף משקל   
                                <span id="liSpan3">BMI  נע בין 25 ל-30</span>
                            </li>
                            <li id="li4">
                                השמנת יתר
                                <span id="liSpan4">BMI  גדול מ-30</span>
                            </li>
                        </ul>
                    </div>
                </div>
                `;
        if (localStorage.height > 0) {
            document.getElementById('BMIHeight').value = localStorage.height;
        }
        if (localStorage.weight > 0) {
            document.getElementById('BMIWeight').value = localStorage.weight;
        }
    }
    //אחוז שומן
    else if (selectedValue == "bodyFat") {
        calculator.innerHTML += `
                <div>
                    <span>גובה:</span>
                    <input id="bodyFatHeight" class="Input" type="text" placeholder='ס"מ'>
                </div>
                <div>
                    <span>היקף צוואר:</span>
                    <input type="text" name="" id="bodyFatNeck" placeholder='ס"מ' class="Input">
                </div>
                <div>
                    <span>היקף מותניים:</span>
                    <input type="text" name="" id="bodyFatAbdominal" placeholder='ס"מ' class="Input">
                </div>
                <div id="Hip"></div>
                <div id="result">
                    <button onclick="bodyFat()" type="button" class="btn" name="result">חשב</button>
                    <p id="ansP">
                    אחוז השומן שלך יוצג כאן
                    </p>
                    <div id="ul"</div>
                </div>
            `;
        ls();
        mallFem();
        if (localStorage.height > 0) {
            document.getElementById('bodyFatHeight').value = localStorage.height;
        }
        if (localStorage.neck > 0) {
            document.getElementById('bodyFatNeck').value = localStorage.neck;
        }
        if (localStorage.abdominal > 0) {
            document.getElementById('bodyFatAbdominal').value = localStorage.abdominal;
        }
    }
    // כמות חלבון לחיזוק השריר
    else if (selectedValue == "protain") {
        calculator.innerHTML = `
            <div>
                <span>משקל:</span>
                <input type="text" name="" id="protainWeight" placeholder='ק"ג' class="Input">
            </div>
            <div>
                <span>סוג הפעילות:</span>

                <select name="מטרת האימון" id="protSelect" class="Select">
                    <option value="no practice">לא מתאמן</option>
                    <option value="slow training">אימון לשם בריאות </option>
                    <option value="increase muscle mass">העלאת מסת שריר</option>
                </select>
            </div>
            <div id="result">
                <button onclick="protain()" type="button" class="btn" name="result">חשב</button>
                <p id="ansP">כמות החלבונים שמקובל לאכול כדי לפתח מסת שריר תופיע כאן</p>
            </div> 
        `
        if (localStorage.weight > 0) {
            document.getElementById('protainWeight').value = localStorage.weight;
        }
    }
    //שתיית מים יומית
    else if (selectedValue == "water") {
        calculator.innerHTML = `
        <div>
            <span>בחר פעילות:</span>
            <select name="practice" id="waterSelect" onchange="selectpract()" class="Select">
                <option value="noPractice">לא מתאמן</option>
                <option value="training">מתאמן</option>
           </select>
        </div>
        <div>
        <span>משקל:</span>
            <input type="text" name="" id="waterWeight"  placeholder='ק"ג' class="Input">
        </div>
            <div id="training"></div>
            <div id="result">
                <button onclick="wather()" type="button" class="btn" name="result">חשב</button>
                <p id="ansP">
                הכמות שמקובל לשתות כדי לסייע בתהליך ההרזיה תופיע כאן
                </p>
            </div>
        `;
        if (localStorage.weight > 0) {
            document.getElementById('waterWeight').value = localStorage.weight;
        }

    }
    // צריכת קלוריות יומית 
    else if (selectedValue == "calories") {
        calculator.innerHTML += `
            <div id="box">
                <span>אורח חיים:</span>
                <select id="caloriesSelect" class="Select">
                    <option id="op1" value="not practic">לא מתאמן</option>
                    <option id="op3" value="practic">אימון לשם הבריאות (3-5 ימים בשבוע)</option>
                    <option id="op2" value="athlete">אימון במאמץ גבוה (כל יום)</option>
                </select>
            </div>
            <div>
                <span>גיל:</span>
                <input id="caloriesAge" class="Input" type="text" placeholder="הכנס גיל">
            </div>
            <div>
                <span>גובה:</span>
                <input id="caloriesHeight" class="Input" type="text" placeholder='ס"מ'>
            </div>
            <div>
                <span>משקל:</span>
                <input id="caloriesWeight" class="Input" type="text" placeholder='ק"ג'>
            </div>
            <div id="result">
                <button onclick="calorie()" type="button" class="btn" name="result">חשב</button>
                <p id="ansP"> כמות הקלוריות לצריכה לשם הרזיה תופיע כאן</P>
            </div>
        `;
        ls();
        if (localStorage.age > 0) {
            document.getElementById('caloriesAge').value = localStorage.age;
        }

        if (localStorage.height > 0) {
            document.getElementById('caloriesHeight').value = localStorage.height;
        }
        if (localStorage.weight > 0) {
            document.getElementById('caloriesWeight').value = localStorage.weight;
        }
    }
    // היסטוריית חישוב 
    else if (selectedValue == "history") {
        var bmi, bodyFat, protain, water, calorie;
        if (localStorage.bmi > 0) {
            bmi = localStorage.bmi;
        }
        else {
            bmi = "דרוש חישוב"
        }
        if (localStorage.bodyFat > 0) {
            bodyFat = localStorage.bodyFat;
        }
        else {
            bodyFat = "דרוש חישוב"
        }
        if (localStorage.protain != null || localStorage.protain != undefined) {
            protain = localStorage.protain;
        }
        else {
            protain = "דרוש חישוב"
        }
        if (localStorage.water > 0) {
            water = localStorage.water;
        }
        else {
            water = "דרוש חישוב"
        }
        if (localStorage.calorie > 0) {
            calorie = localStorage.calorie;
        }
        else {
            calorie = "דרוש חישוב"
        }
        calculator.innerHTML = `
            <ul class="historyUl"> 
                <li> 
                    <span style="float:right;">
                        BMI:
                    </span>
                    <span>
                        ${bmi}
                    </span>
                </li>
                <li>
                    <span>
                       אחוז שומן:
                    </span>
                    <span>
                        ${bodyFat}
                    </span>
                </li>
                <li>
                    <span>
                        כמות חלבון ליום: 
                   </span>
                   <span>
                        ${protain}
                    </span>
                </li>
                <li>
                    <span>
                        כמות מים כדי לרזות:
                    </span>
                   <span>
                        ${water}
                    </span>
                </li>
                <li>
                    <span>
                        כמות קלוריות יומית להרזיה:  
                    </span>
                    <span>
                        ${calorie} 
                    </span>
                </li>
            </ul>
            
        `;
    }
    //צור קשר
    else if (selectedValue == "contact") {
        calculator.innerHTML = `
        <div class="contactDiv" id="contactDiv">
            <form id="form" action="https://muscle-app-heroku.herokuapp.com/" method="POST" target="confirm">
            <div class="gender" id="genderDiv">
            <span>יש לבחור מין:</span>
                    <div id="Gender">
                        <label class="genderText"> 
                            <input type="radio" name="gender" value="f" class="genderRadio" id="F">
                            <span>נקבה</span>
                        </label>
                        <label class="genderText">
                            <input type="radio" name="gender" value="m" class="genderRadio" id="M">
                            <span>זכר</span>
                        </label>
                    </div>
                </div>
                <input id="name" name="name" class="contactInputs" required type="text" placeholder="שם מלא:">
                <input id="mail" name="mail" class="contactInputs" type="text" placeholder="מייל:">
                <textarea id="FormInfo" name="message" required class="contactInputs" placeholder="כתוב לנו:"></textarea>
                <iframe name="confirm" id="confirm"></iframe>
                <button class="btn contactInputs" id="senderBtn">
                    שלח
                </button>
            </form>
        </div>
    `;
        //הצגת אישור שליחה
        let myButton = document.getElementById('senderBtn');
        myButton.addEventListener('click', function () {
            alert('תגובתך נשלחה בהצלחה');
            // setTimeout(function () { location.reload() }, 50);
        });
    }
    else if (selectedValue == "homePage"){
        setTimeout(function () { location.reload() });
    }
}




//חישוב BMI בדוק
function BMI() {
    var weight = document.getElementById("BMIWeight").value,
        height = document.getElementById("BMIHeight").value,
        ansP = document.getElementById("ansP");
    document.getElementById("BMIWeight").style.border = "none";
    document.getElementById("BMIHeight").style.border = "none";
    if (weight == "" || weight == null || isNaN(weight)) {
        document.getElementById("BMIWeight").style.border = "2px solid red";
    }
    if (height == "" || height == null || isNaN(height)) {
        document.getElementById("BMIHeight").style.border = "2px solid red";
    }
    else if (height != "" && weight != "" && !isNaN(weight) && !isNaN(height)) {
        ans = (weight / Math.pow((height / 100), 2)).toFixed(2);
        if (ans < 18.5) {
            ansP.style.background = "rgb(199, 199, 199)";
        }
        else if (ans >= 18.5 && ans <= 25) {
            ansP.style.background = "rgb(202, 248, 202)";
        }
        else if (ans > 25 && ans <= 30) {
            ansP.style.background = "rgb(250, 222, 190)";
        }
        else if (ans > 30) {
            ansP.style.background = "rgb(253, 174, 174)";
        }
        document.getElementById("ansP").innerHTML = `
        <h3>ה-BMI שלך</h3>
        <h3>${ans}</h3>
    `;
        // הזנה בLS
        localStorage.setItem("bmi", ans);
        localStorage.setItem("weight", weight);
        localStorage.setItem("height", height);
    }
}
//חישוב אחוז שומן בדוק
function bodyFat() {
    var ans,
        height = document.getElementById("bodyFatHeight").value,
        abdominal = document.getElementById("bodyFatAbdominal").value,
        neck = document.getElementById("bodyFatNeck").value;
    document.getElementById("bodyFatHeight").style.border = "none";
    document.getElementById("bodyFatAbdominal").style.border = "none";
    document.getElementById("bodyFatNeck").style.border = "none";
    document.getElementById("M").style.border = "none";
    document.getElementById("F").style.border = "none";
    if (document.getElementById("M").checked == false && document.getElementById("F").checked == false) {
        document.getElementById("M").style.border = "2px solid red";
        document.getElementById("F").style.border = "2px solid red";
    }
    else if (document.getElementById("M").checked == true) {
        if (height == "" || height == null || isNaN(height)) {
            document.getElementById("bodyFatHeight").style.border = "2px solid red";
        }
        if (abdominal == "" || abdominal == null || isNaN(abdominal)) {
            document.getElementById("bodyFatAbdominal").style.border = "2px solid red";
        }
        if (neck == "" || neck == null || isNaN(neck)) {
            document.getElementById("bodyFatNeck").style.border = "2px solid red";
        }
        else if (height != "" && abdominal != "" && neck != "" && !isNaN(height) && !isNaN(abdominal) && !isNaN(neck)) {
            localStorage.setItem("height", height);
            localStorage.setItem("neck", neck);
            localStorage.setItem("abdominal", abdominal);
            neck = parseFloat(neck) / 2.54;
            height = parseFloat(height) / 2.54;
            abdominal = parseFloat(abdominal) / 2.54;
            ans = 86.010 * Math.log10(abdominal - neck) - 70.041 * Math.log10(height) + 36.76;
            if (ans < 14) {
                ansP.style.background = "#c4e2fd";
            }
            else if (ans > 14 && ans < 18) {
                ansP.style.background = "rgb(202, 248, 202)";
            }
            else if (ans > 18 && ans < 26) {
                ansP.style.background = "rgb(250, 222, 190)";
            }
            else if (ans > 26) {
                ansP.style.background = "rgb(253, 174, 174)";
            }

        }
    }
    else if (document.getElementById("F").checked == true) {
        hip = document.getElementById("bodyFatHip").value;
        document.getElementById("bodyFatHip").style.border = "none";
        if (height == "" || height == null || isNaN(height)) {
            document.getElementById("bodyFatHeight").style.border = "2px solid red";
        }
        if (abdominal == "" || abdominal == null || isNaN(abdominal)) {
            document.getElementById("bodyFatAbdominal").style.border = "2px solid red";
        }
        if (neck == "" || neck == null || isNaN(neck)) {
            document.getElementById("bodyFatNeck").style.border = "2px solid red";
        }
        if (hip == "" || hip == null || isNaN(hip)) {
            document.getElementById("bodyFatHip").style.border = "2px solid red";
        }
        else if (height != "" && abdominal != "" && neck != "" && hip != "" && !isNaN(height) && !isNaN(abdominal) && !isNaN(neck) && !isNaN(hip)) {
            localStorage.setItem("hip", hip);
            localStorage.setItem("height", height);
            localStorage.setItem("neck", neck);
            localStorage.setItem("abdominal", abdominal);
            neck = parseFloat(neck) / 2.54;
            height = parseFloat(height) / 2.54;
            abdominal = parseFloat(abdominal) / 2.54;
            hip = parseFloat(hip) / 2.54;
            ans = 163.205 * Math.log10(abdominal + hip - neck) - 97.684 * Math.log10(height) - 78.387;
            if (ans < 20) {
                ansP.style.background = "#c4e2fd";
            }
            else if (ans > 21 && ans < 33) {
                ansP.style.background = "rgb(202, 248, 202)";
            }
            else if (ans > 33 && ans < 39) {
                ansP.style.background = "rgb(250, 222, 190)";
            }
            else if (ans > 39) {
                ansP.style.background = "rgb(253, 174, 174)";
            }
        }
    }
    document.getElementById("ansP").innerHTML = `<h3>אחוז השומן שלך על פי נוסחאת חיל הים האמריקאי הוא ${ans.toFixed(2)}</h3>`;
    localStorage.setItem("bodyFat", ans.toFixed(2));

}
//חישוב צריכת חלבון יומית מומלצת בדוק
function protain() {
    var selectVal = document.getElementById("protSelect").value,
        weight = document.getElementById("protainWeight").value;
    document.getElementById("protainWeight").style.border = "none";
    if (weight == "" || weight == null || isNaN(weight)) {
        document.getElementById("protainWeight").style.border = "2px solid red";
    }
    else if (weight != "" && !isNaN(weight)) {
        weight = parseFloat(weight);
        if (selectVal == "no practice") {
            min = weight * 0.8;
            max = weight * 1.0;
        }
        else if (selectVal == "slow training") {
            min = weight * 1.1;
            max = weight * 1.6;
        }
        else if (selectVal == "increase muscle mass") {
            min = weight * 1.5;
            max = weight * 2;
        }
        document.getElementById("ansP").innerHTML = `<h3>אכילה בין ${min.toFixed(2)} ל- ${max.toFixed(2)}  גרם חלבונים ליום תסייע לפתח מסת שריר</h3>`;
        localStorage.setItem("protain", `בין- ${min.toFixed(2)} ל- ${max.toFixed(2)}`);
        localStorage.setItem('weight', weight);
    }
}
//חישוב ליטר מים בדוק 
function wather() {
    var waterSelect = document.getElementById("waterSelect").value,
        waterWeight = document.getElementById("waterWeight").value,
        ansP = document.getElementById("ansP");
    document.getElementById("waterWeight").style.border = "none";
    if (waterSelect == "noPractice") {

        if (waterWeight == "" || waterWeight == null || isNaN(waterWeight)) {
            document.getElementById("waterWeight").style.border = "2px solid red";
        }
        else if (waterWeight != "" && !isNaN(waterWeight)) {
            waterWeight = parseFloat(waterWeight);
            sum = waterWeight * 0.03;
        }
    }
    if (waterSelect == "training") {
        var trainMaim = document.getElementById("trainMaim").value;
        document.getElementById("trainMaim").style.border = "none";
        document.getElementById("waterWeight").style.border = "none";
        if (waterWeight == "" || waterWeight == null || isNaN(waterWeight)) {
            document.getElementById("waterWeight").style.border = "2px solid red";
        }
        if (trainMaim == "" || trainMaim == null || isNaN(trainMaim)) {
            document.getElementById("trainMaim").style.border = "2px solid red";
        }
        else if (trainMaim != "" && waterWeight != "" && !isNaN(waterWeight) && !isNaN(trainMaim)) {
            trainMaim = parseFloat(trainMaim);
            waterWeight = parseFloat(waterWeight);
            sum = waterWeight * 0.03 + (trainMaim / 60);
        }
        localStorage.setItem('trainingMin', trainMaim);
    }
    ansP.innerHTML = `<h3>מומלץ לשתות ${sum.toFixed(2)} ליטר ליום כדי לסייע בתהליך ההרזיה</h3>`;
    localStorage.setItem("water", sum.toFixed(2));
    localStorage.setItem('weight', waterWeight);

}
//הוספת כמות דקות לחישוב כמות המים במידת הצורך
function selectpract() {
    var waterSelect = document.getElementById("waterSelect").value;
    training = document.getElementById("training");
    if (waterSelect == "training") {
        training.innerHTML = `
        <span>זמן האימון:</span>
        <input type="text" id="trainMaim" placeholder="דקות" class="Input">
        `;
        if (localStorage.trainingMin > 0) {
            document.getElementById('trainMaim').value = localStorage.trainingMin;
        }
    }
    else {
        training.innerHTML = '';
    }
}
//חישוב צריכת קלוריות יומית מומלצת בדוק
function calorie() {
    var BMR,
        select = document.getElementById("caloriesSelect").value,
        age = document.getElementById("caloriesAge").value,
        height = document.getElementById("caloriesHeight").value,
        weight = document.getElementById("caloriesWeight").value,
        ansP = document.getElementById("ansP");
    document.getElementById("caloriesAge").style.border = "none";
    document.getElementById("caloriesHeight").style.border = "none";
    document.getElementById("caloriesWeight").style.border = "none";
    document.getElementById("M").style.border = "none";
    document.getElementById("F").style.border = "none";
    if (age == "" || age == null || isNaN(age)) {
        document.getElementById("caloriesAge").style.border = "2px solid red";
    }
    if (height == "" || height == null || isNaN(height)) {
        document.getElementById("caloriesHeight").style.border = "2px solid red";
    }
    if (weight == "" || weight == null || isNaN(weight)) {
        document.getElementById("caloriesWeight").style.border = "2px solid red";
    }
    if (document.getElementById("M").checked == false && document.getElementById("F").checked == false) {
        document.getElementById("M").style.border = "2px solid red";
        document.getElementById("F").style.border = "2px solid red";
    }
    else if (age != "" && height != "" && weight != "" && !isNaN(age) && !isNaN(height) && !isNaN(weight) && (document.getElementById("M").checked == true || document.getElementById("F").checked == true)) {
        age = parseFloat(age);
        height = parseFloat(height);
        weight = parseFloat(weight);
        if (document.getElementById("M").checked == true) {
            valMin = (66 + (13.8 * weight) + (5 * height) - (6.8 * age));
            BMR = (10 * weight) + (6.25 * height) - (5 * age) + 5;
            if (select == "not practic") {
                BMR = BMR.toFixed(2);
            }
            else if (select == "practic") {
                BMR = (BMR * 1.375).toFixed(2);
            }
            else if (select == "athlete") {
                BMR = (BMR * 1.725).toFixed(2);
            }
        }
        else if (document.getElementById("F").checked == true) {
            valMin = (655 + (9.563 * weight) + (1.85 * height) - (4.676 * age));
            BMR = (10 * weight) + (6.25 * height) - (5 * age) - 161;
            if (select == "not practic") {
                BMR = BMR.toFixed(2);
            }
            else if (select == "practic") {
                BMR = (BMR * 1.375).toFixed(2);
            }
            else if (select == "athlete") {
                BMR = (BMR * 1.725).toFixed(2);
            }
        }
        ansP.innerHTML = `<h3> כמות הקלוריות היומית שהגוף שלך שורף היא: ${BMR}</h3><h3> כדי לרזות מקובל לצרוך פחות קלוריות</h3>`;
        localStorage.setItem("calorie", BMR);
        localStorage.setItem("weight", weight);
        localStorage.setItem("height", height);
        localStorage.setItem("age", age);

    }
}
// עדכון הLS והצגת ערכים רלונטיים
function mallFem() {
    var mal = document.getElementById("M"),
        fem = document.getElementById("F"),
        selectedValue = document.getElementById("plane").value;
    document.getElementById("ansP").style.background = ``;
    if (fem.checked) {
        localStorage.setItem("gender", "checkedf");
        //הצגת נתוני נשים במידת הצורך באחוזי שומן
        if (selectedValue == "bodyFat") {
            document.getElementById("Hip").innerHTML = `
                <span>היקף ירך:</span>
                <input type="text" name="" id="bodyFatHip" placeholder='ס"מ' class="Input">
            `;
            document.getElementById("ul").innerHTML = `
                <ul>
                    <li id="li5BodyFat">ספורטאים
                        <span id="li5SpanBodyFat">14% – 20%</span>
                    </li>
                    <li id="li2">בריאים     
                        <span id="liSpan2">21% - 33%</span>
                    </li>
                    <li id="li3">
                        השמנת יתר   
                        <span id="liSpan3">33% - 39%</span>
                    </li>
                    <li id="li4">
                        משקל עודף
                        <span id="liSpan4">39%+</span>
                    </li>
                </ul>
            `;
        }
        if (localStorage.hip > 0) {
            document.getElementById('bodyFatHip').value = localStorage.hip;
        }

    }
    else if (mal.checked) {
        localStorage.setItem("gender", "checkedm");
        //ביטול הצגת נתוני נשים באחוז שומן
        if (selectedValue == "bodyFat") {
            document.getElementById("Hip").innerHTML = ``;
            document.getElementById("ul").innerHTML = `
                <ul>
                    <li id="li5BodyFat">ספורטאים
                    <span id="li5SpanBodyFat">6% – 13%</span>
                    </li>
                    <li id="li2">בריאים     
                        <span id="liSpan2">14% – 17%</span>
                    </li>
                    <li id="li3">
                        השמנת יתר   
                        <span id="liSpan3">18%-25%</span>
                    </li>
                    <li id="li4">
                        משקל עודף
                        <span id="liSpan4">26%+</span>
                    </li>
                </ul>
            `;
        }
    }
}
//בדיקה בטעינת דף מולLS 
function ls() {
    if (localStorage.gender == "checkedm") {
        document.getElementById("M").checked = true;
    }
    else if (localStorage.gender == "checkedf") {
        document.getElementById("F").checked = true;
    }
}



//טעינת דף
function showPage() {
    document.getElementById('loader-wrapper').style.display = 'none';
}

//ניקוי הזיכרון
// localStorage.clear()