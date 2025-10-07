window.onload = function () {

    // add subject coding
    let add_sub_btn = document.getElementById("add-sub-btn");
    let add_container = document.getElementById("add_container");
    let generate_btn = document.getElementById("generate_btn");

    add_sub_btn.onclick = function () {
        generate_btn.style.display = "block";

        let add_box = document.createElement("DIV");
        add_box.className = "flex flex-col gap-2 sm:flex-row sm:justify-between sm:gap-2";

        let sub_inp = document.createElement("input");
        sub_inp.type = "text";
        sub_inp.name = "subject name";
        sub_inp.placeholder = "Subject Name";
        sub_inp.className = "capitalize border border-slate-200 w-full sm:w-[31%] px-2 py-2 rounded hover:shadow-md hover:px-3 transition-all outline-none text-[13px]";

        let mrk_inp = document.createElement("input");
        mrk_inp.type = "number";
        mrk_inp.name = "full marks";
        mrk_inp.placeholder = "Full Mark's";
        mrk_inp.className = "capitalize border border-slate-200 w-full sm:w-[31%] px-2 py-2 rounded hover:shadow-md hover:px-3 transition-all outline-none text-[13px] full_marks";

        let obt_mrk_inp = document.createElement("input");
        obt_mrk_inp.type = "number";
        obt_mrk_inp.name = "obtained marks";
        obt_mrk_inp.placeholder = "Obtained Mark's";
        obt_mrk_inp.className = "capitalize border border-slate-200 w-full sm:w-[31%] px-2 py-2 rounded hover:shadow-md hover:px-3 transition-all outline-none text-[13px] obt_total_marks";

        // preview marks on marksheet
        let pre_sub_name = document.getElementById("pre_sub_name");
        let pre_total_marks = document.getElementById("pre_total_marks");
        let pre_obt_marks = document.getElementById("pre_obt_marks");

        let tr = document.createElement("tr");

        let sub_td = document.createElement("td");
        sub_td.innerText = "Subject Name";
        sub_td.className = "border border-slate-500 sm:px-4 px-[8px] sm:py-[5px] py-[3px] text-[10px] sm:text-[13px] text-left w-1/3 text-gray-300 capitalize";

        let mrk_td = document.createElement("td");
        mrk_td.innerText = "Full Marks";
        mrk_td.className = "border border-slate-500 sm:px-4 px-[8px] sm:py-[5px] py-[3px] text-[10px] sm:text-[13px] text-left w-1/3 text-gray-300 capitalize";

        let obt_mrk_td = document.createElement("td");
        obt_mrk_td.innerText = "Obtained Marks";
        obt_mrk_td.className = "border border-slate-500 sm:px-4 px-[8px] sm:py-[5px] py-[3px] text-[10px] sm:text-[13px] text-left w-1/3 text-gray-300 capitalize";

        tr.append(sub_td);
        tr.append(mrk_td);
        tr.append(obt_mrk_td);

        let mrk_preview_box = document.getElementById("mrk_preview_box");
        mrk_preview_box.append(tr);

        sub_inp.oninput = function () {
            sub_td.innerHTML = this.value;
            sub_td.style.color = "black";
        }
        mrk_inp.oninput = function () {
            mrk_td.innerHTML = this.value;
            mrk_td.style.color = "black";
        }
        obt_mrk_inp.oninput = function () {
            obt_mrk_td.innerHTML = this.value;
            obt_mrk_td.style.color = "black";

            // Calculate total obtained marks
            let total_obtained_marks = 0;
            let obm = document.getElementsByClassName("obt_total_marks");
            for (let i = 0; i < obm.length; i++) {
                let num = Number(obm[i].value);
                total_obtained_marks = total_obtained_marks + num;
            }
            let total_mrk_value = document.getElementById("total_mrk_value");
            total_mrk_value.innerHTML = total_obtained_marks;

            // Calculate total full marks marks
            let total_full_marks = 0;
            let full_marks = document.getElementsByClassName("full_marks");
            for (let i = 0; i < full_marks.length; i++) {
                let full_marks_value = Number(full_marks[i].value);
                total_full_marks = total_full_marks + full_marks_value;
            }
            let percentage_value = document.getElementById("percentage_value");
            percentage = total_obtained_marks / total_full_marks * 100
            percentage_value.innerHTML = percentage.toFixed(2) + ' %';

            // Calculate total full marks marks
            let grade = document.getElementById("grade");

            if (percentage >= 90 && percentage <= 100) {
                grade.innerHTML = "A";
            }
            else if (percentage >= 75 && percentage < 90) {
                grade.innerHTML = "B";
            }
            else if (percentage >= 55 && percentage < 75) {
                grade.innerHTML = "C";
            }
            else if (percentage >= 40 && percentage < 55) {
                grade.innerHTML = "D";
            }
            else if (percentage < 40) {
                grade.innerHTML = "F";
            }
            else {
                grade.innerHTML = "Invalid Grade";
            }

        }

        // delete icon for add subject
        let delete_btn = document.createElement("BUTTON");
        delete_btn.type = "button";
        delete_btn.innerHTML = "<i class='fa-solid fa-trash-can'></i>";
        delete_btn.className = "transition-[3s] text-red-700 border px-2 hover:px-5 py-1 hover:border-gray-700 hover:bg-gray-100 rounded-lg text-[14px] sm:w-auto w-[20%]";


        add_box.append(sub_inp);
        add_box.append(mrk_inp);
        add_box.append(obt_mrk_inp);
        add_box.append(delete_btn);

        add_container.append(add_box);

        delete_btn.onclick = function () {
            add_box.remove();
            tr.remove();
        }
    }

    // student image preview
    let image_file = document.getElementById("image_file");

    image_file.onchange = function () {
        file = this.files[0];
        url = URL.createObjectURL(file);
        let student_img = document.getElementById("student_img");
        student_img.src = url;
    }

    // school image preview
    let school_img_file = document.getElementById("school_img_file");
    school_img_file.onchange = function () {
        file = this.files[0];
        url = URL.createObjectURL(file);
        let school_img = document.getElementById("school_img");
        school_img.src = url;
    }

    // school name preview coding
    let school_name = document.getElementById("school_name");
    let school_name_h1 = document.getElementById("school_name_h1");
    school_name.oninput = function () {
        school_name_h1.innerHTML = school_name.value;
    }

    // school tag name preview coding
    let school_tag = document.getElementById("school_tag");
    let school_tagname_p = document.getElementById("school_tagname_p");
    school_tag.oninput = function () {
        school_tagname_p.innerHTML = school_tag.value;
    }

    // student name preview coding
    let stu_name_inp = document.getElementById("stu_name_inp");
    let stu_name_text = document.getElementById("stu_name_text");
    stu_name_inp.oninput = function () {
        stu_name_text.innerHTML = stu_name_inp.value;
    }

    // father name preview coding
    let father_name_inp = document.getElementById("father_name_inp");
    let father_name_text = document.getElementById("father_name_text");
    father_name_inp.oninput = function () {
        father_name_text.innerHTML = father_name_inp.value;
    }

    // date of barth preview coding
    let dob_inp = document.getElementById("dob_inp");
    let dob_text = document.getElementById("dob_text");
    dob_inp.onchange = function () {
        dob_text.innerHTML = dob_inp.value;
    }

    // gender preview coding
    let gender_inp = document.getElementById("gender_inp");
    let gender_text = document.getElementById("gender_text");
    gender_inp.onchange = function () {
        gender_text.innerHTML = gender_inp.value;
    }

    // class preview coding
    let class_inp = document.getElementById("class_inp");
    let class_text = document.getElementById("class_text");
    class_inp.oninput = function () {
        class_text.innerHTML = class_inp.value;
    }

    // roll preview coding
    let roll_inp = document.getElementById("roll_inp");
    let roll_text = document.getElementById("roll_text");
    roll_inp.oninput = function () {
        roll_text.innerHTML = roll_inp.value;
    }

    let export_btn = document.getElementById("export_btn");
    let mrk_container = document.getElementById("mrk_container");

    export_btn.onclick = function () {
        html2canvas(mrk_container, {
            backgroundColor: "white",  // या null for transparent
            useCORS: true,             // अगर image external है
            scale: 3                  // High resolution screenshot
        }).then(function (canvas) {
            let base64String = canvas.toDataURL("image/png");
            let a = document.createElement("a");
            a.href = base64String;
            a.download = "Marksheet.png";
            a.click();
        });
    };







}