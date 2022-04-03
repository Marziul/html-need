
<section id="navbar-main" class="header-bottom">

.header-bottom.affix{
    position: fixed;
    z-index: 9999;
    top: 0;
    -moz-transition: all 0.4s ease 0s;
    -webkit-transition: all 0.4s ease 0s;
    transition: all 0.4s ease 0s;
    width: 100%;    
    background-color: rgba(255, 255, 255, 0.85);
    border-bottom: 1px solid #d1d1d1;
    margin: 0;
    padding: 10px 0 !important;
}



var affixElement = '#navbar-main';

jQuery(affixElement).affix({
  offset: {
    // Distance of between element and top page
    top: function () {
      return (this.top = $(affixElement).offset().top)
    },
    // when start #footer 
    bottom: function () { 
      return (this.bottom = $('#footer').outerHeight(true))
    }
  }
});