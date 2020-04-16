jQuery.fx.off = true;

document.addEventListener('DOMContentLoaded', function(){ 
  if(document.querySelector('body.controller-issues')){
    var filtersTable = document.querySelector("#query_form_content #filters-table");
    if(!filtersTable.children.length){
      var fieldset = filtersTable.parentElement.parentElement;
      fieldset.classList.add("collapsed");
      fieldset.querySelector('legend.icon.icon-expended').classList.remove('icon-expended');
      fieldset.querySelector('legend.icon').classList.add('icon-collapsed');
    }
  }
}, false);




