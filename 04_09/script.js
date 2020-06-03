// var course = new Object();
// course.title = 'intro to algo';
// course.rating = '5';
// console.log(course);


var course = {
  title: "Intro to javascript",
  rating: "5",
  trainer: "katyal",
  pulished: true,
  views: 0,
  updateViews: function(){
    return ++course.views;
  }
}


console.log(course);
for (var i = 0; i < 10  ; i++) {
course.updateViews();
}
console.log(course);
