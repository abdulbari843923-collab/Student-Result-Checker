const form = document.getElementById("resultForm");
console.log(form);

form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("form submitted");

    const studentName = document.getElementById("studentName").value;
    console.log(studentName);

    const maths = Number(document.getElementById("maths").value);
    console.log(maths);

    const english = Number(document.getElementById("english").value);
    console.log(english);

    const science = Number(document.getElementById("science").value);
    console.log(science);

    const result = document.getElementById("result")

    if (
        maths < 0 || maths > 100 ||
        english < 0 || english > 100 ||
        science < 0 || science > 100 
     ) {
        result.textContent = "Please enter marks between 0 and 100";
        return;
    }

    const totalMarks = maths + english + science;

    const percentage = (totalMarks / 300) * 100;

    console.log("percentage:", percentage)


    console.log("Total marks :", totalMarks);


    let status = ""
    let grade = ""


    if (maths >= 33 && english >= 33 && science >= 33) {
        status = "Pass";

        if (percentage >= 90) {
            grade = "A+"
        }

        else if (percentage >= 80) {
           grade= "A";
        }

        else if (percentage >= 70) {
            grade = "B"
        }

        else if (percentage >= 60) {
            grade = "C"
        }

        else {
            grade = "D"
        }
    }

    else {
        status = "Fail";

        grade = "not Assigned"
    }

    const report =
    "Student Name: " + studentName +
    "\nTotal Marks: " + totalMarks + " / 300 "+
    "\nPercentage: " + percentage.toFixed(2) + "%" +
    "\nResult: " + status +
    "\nGrade: " + grade ;

    result.textContent = report;


})
