system.use("com.joyent.Sammy");
system.use("smart-helpers.init");

GET("/", function(){
  return render(this, "index.html", {layout:"docs.html"});
});

GET(/\/docs\/(.+)\/?$/, function(page){
  return render(this, "/docs/" + page + ".html", {layout:"docs.html"});
});
