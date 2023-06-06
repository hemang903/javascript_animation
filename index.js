$(document).ready(function () {
    $("button").click(function () {

        // box1
        $(".box1").animate({ left: '1000px', top: '200px' }, "slow");
        // box2
        $(".box2").animate({ left: '200px', top: '200px' }, "slow");
        // box3
        $(".box3").animate({ left: '600px', top: '10px' }, "slow");
        // box4
        $(".box4").animate({ left: '600px', top: '450px' }, "slow");

        // box1 increase height and width -----------
        $(".box1").animate({ height: '200px' }, "slow");
        $(".box1").animate({ width: '200px' }, "slow");
        // box2 increase height and width 
        $(".box2").animate({ height: '200px' }, "slow");
        $(".box2").animate({ width: '200px' }, "slow");
        // box3 increase height and width 
        $(".box3").animate({ height: '200px' }, "slow");
        $(".box3").animate({ width: '200px' }, "slow");
        // box4 increase height and width 
        $(".box4").animate({ height: '200px' }, "slow");
        $(".box4").animate({ width: '200px' }, "slow");

        // box1
        $(".box1").animate({ left: '600px', top: '10px' }, "slow");
        // box2
        $(".box2").animate({ left: '600px', top: '450px' }, "slow");
        // box3
        $(".box3").animate({ left: '200px', top: '200px' }, "slow");
        // box4
        $(".box4").animate({ left: '1000px', top: '200px' }, "slow");

        // box1
        $(".box1").animate({ left: '200px', top: '200px' }, 1000);
        // box2
        $(".box2").animate({ left: '1000px', top: '200px' }, 1600);
        // box3
        $(".box3").animate({ left: '600px', top: '450px' }, 1300);
        // box4
        $(".box4").animate({ left: '600px', top: '10px' }, 1900);


        // box1 decrease height and width ----------------
        $(".box1").animate({ height: '100px' }, "slow");
        $(".box1").animate({ width: '100px' }, "slow");

        // box2 decrease height and width 
        $(".box2").animate({ height: '100px' }, "slow");
        $(".box2").animate({ width: '100px' }, "slow");

        // box3 decrease height and width
        $(".box3").animate({ height: '100px' }, "slow");
        $(".box3").animate({ width: '100px' }, "slow");

        // box4 decrease height and width
        $(".box4").animate({ height: '100px' }, "slow");
        $(".box4").animate({ width: '100px' }, "slow");

        $(".box1").animate({ left: '650px', top: '250px' }, "slow");
        $(".box2").animate({ left: '650px', top: '250px' }, "slow");
        $(".box3").animate({ left: '650px', top: '250px' }, "slow");
        $(".box4").animate({ left: '650px', top: '250px' }, "slow");

    });
});