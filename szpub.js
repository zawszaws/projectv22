import ghpages from 'gh-pages'
ghpages.publish('dist', 
{
  branch: 'main',
  cname: 'testa2.limecomms.gq',
}, 

function(err) {}

);