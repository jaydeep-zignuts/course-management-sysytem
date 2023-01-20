$(document).ready(function () {
  $("form").on("submit", function () {
    var cname = $("#cname").val();
    var cduration = $("#cduration").val();
    var cfees = $("#cfees").val();
    $.ajax({
      type: "POST",
      url: "/addCourse",
      data: {
        course_name: cname,
        course_duration: cduration,
        course_fees: cfees,
      },
      success: function (data) {
        alert("Course Added Successfully.....");
        location.href = "/getCourse";
      }
    });

    return false;
  });

  $(".delete").on("click", function () {
    var course = $(this).val();
    $.ajax({
      type: "DELETE",
      url: "/" + course,
      success: function (data) {
        location.reload();
      },
    });
  });

  $(".update").on("click", function () {
    var course = $(this).val();
    let data;
    alert("id of course :: "+ course);
    
    $.ajax({
      type: "GET",
      url: `/${course}`,
      async: false,
      success: function (course) {
        data = {
          cname : course.course_name,
          cduration : course.course_duration,
          cfees : course.course_fees
                    
        }
        location.href = "updateCourse";
      },
    });
    
  });


});
