
var footer="Zafer Bayağut 2021"
const hakkinda=function(req, res, next) {
  res.render('hakkinda', { title: 'Hakkında',
  footer:footer,
});
}

module.exports={
hakkinda
}	


