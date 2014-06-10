var mensch = require('mensch');

parse = function(css) {
  var ast = mensch.parse(css, {comments: false});;
  return {
    ast: JSON.stringify(ast, '', 2),
    str: mensch.stringify(ast, {indentation: '  '})
  };
}

