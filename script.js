$(document).ready(function () {
    const check = $(".check");

    check.on("click", function () {
        const num = $(".numOfCourse").val();
        console.log(num);

        if (num > 0) {
            generateCourseTable(num);
        } else {
            alert("Please enter a valid number of courses");
        }
    });

    function generateCourseTable(numCourses) {
        let tableHTML = `
            <table id="courseTable">
                <thead>
                    <tr>
                        <th>Course</th>
                        <th>Score</th>
                        <th>Credits</th>
                        <th>grade</th>
                    </tr>
                </thead>
                <tbody>`;

        for (let i = 1; i <= numCourses; i++) {
            tableHTML += `
                <tr>
                    <td><input placeholder = "Course ${i}" class="course"></input></td>
                    <td><input placeholder = "score out of 100" class="score"></input></td>
                    <td><input type="number" class="credits" min="1"></td>
                    <td><p class="letGrade"></p></td>
                </tr>`;
        }
        tableHTML += `
                </tbody>
            </table>
           <div class="container"> <button id="calculateGPA">Calculate GPA</button>`;

        $("#courseTableContainer").html(tableHTML);

        // Add GPA calculation handler
        $("#calculateGPA").on("click", calculateGPA);


    }

    function calculateGPA() {

        let nums = $(".numOfCourse").val();
        let total = 0;
        let total_point= 0;
        let gpa;
        for (i = 0; i < nums; i++) {
            let score = parseFloat(document.getElementsByClassName("score")[i].value);
            let letGrade = document.getElementsByClassName("letGrade")[i];
            if(score>=90){
                letGrade.textContent = "A+"
                gpa = 4;
            }else if (score >= 85) {
                letGrade.textContent = "A"
                gpa = 4;
            } else if (score >= 80) {
                letGrade.textContent = "A-"
                gpa = 3.75
            } else if (score >= 75) {
                letGrade.textContent = "B+"
                gpa = 3.5
            } else if (score >= 68) {
                letGrade.textContent = "B"
                gpa = 3.0
            } else if (score >= 65) {
                letGrade.textContent = "B-"
                gpa = 2.75
            } else if (score >= 60) {
                letGrade.textContent = "C+"
                gpa = 2.5
            } else if (score >= 50) {
                letGrade.textContent = "C"
                gpa = 2.0
            } else if (score >= 45) {
                letGrade.textContent = "C-"
                gpa = 1.75
            } else if (score >= 40) {
                letGrade.textContent = "D"
                gpa = 1.0
            } else {
                letGrade.textContent = "F"
                gpa = 0
            }
            let credits = parseFloat(document.getElementsByClassName("credits")[i].value);
            total += credits;
            total_point += (gpa * credits);
        }
        console.log(total_point)
        let final_gpa = total_point / total;
       document.getElementById("cummulative").textContent = 'cumulative GPA :' + final_gpa.toFixed(2);
    }


})