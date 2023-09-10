jQuery.fx.off = true;

document.addEventListener('DOMContentLoaded', function(){
  setTimeout(function(){    
    var filtersTable = document.querySelector("#query_form_content #filters-table");
    if(filtersTable && !filtersTable.children.length){
      var fieldset = filtersTable.parentElement.parentElement;
      fieldset.classList.add("collapsed");
      fieldset.querySelector('legend.icon.icon-expanded').classList.remove('icon-expanded');
      fieldset.querySelector('legend.icon').classList.add('icon-collapsed');
    }    
  }, 1);
}, false);




