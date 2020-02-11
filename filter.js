function getGermanFromEnglish(command,list){
  var matches = list.filter(el=> el.some(ii=> new RegExp(command.replace(/\+/,'\+'),'i').test(ii.command)));
  var exact = list.filter(el=> el.some(ii=> ii.command.toLowerCase() == command.toLowerCase()));

  console.log(exact)
}

getGermanFromEnglish('acadlog',command_table)
