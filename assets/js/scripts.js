function Util(){}Util.hasClass=function(e,t){return e.classList.contains(t)},Util.addClass=function(e,t){t=t.split(" ");e.classList.add(t[0]),1<t.length&&Util.addClass(e,t.slice(1).join(" "))},Util.removeClass=function(e,t){t=t.split(" ");e.classList.remove(t[0]),1<t.length&&Util.removeClass(e,t.slice(1).join(" "))},Util.toggleClass=function(e,t,i){i?Util.addClass(e,t):Util.removeClass(e,t)},Util.setAttributes=function(e,t){for(var i in t)e.setAttribute(i,t[i])},Util.getChildrenByClassName=function(e,t){for(var i=e.children,o=[],s=0;s<i.length;s++)Util.hasClass(i[s],t)&&o.push(i[s]);return o},Util.is=function(e,t){if(t.nodeType)return e===t;for(var i="string"==typeof t?document.querySelectorAll(t):t,o=i.length;o--;)if(i[o]===e)return!0;return!1},Util.setHeight=function(i,o,s,n,a,l){function r(e){var e=e-(d=d||e),t=(n<e&&(e=n),parseInt(e/n*c+i));l&&(t=Math[l](e,i,o-i,n)),s.style.height=t+"px",e<n?window.requestAnimationFrame(r):a&&a()}var c=o-i,d=null;s.style.height=i+"px",window.requestAnimationFrame(r)},Util.scrollTo=function(i,o,s,e){function n(e){var e=e-(r=r||e),t=(o<e&&(e=o),Math.easeInOutQuad(e,l,i-l,o));a.scrollTo(0,t),e<o?window.requestAnimationFrame(n):s&&s()}var a=e||window,l=a.scrollTop||document.documentElement.scrollTop,r=null;e||(l=window.scrollY||document.documentElement.scrollTop);window.requestAnimationFrame(n)},Util.moveFocus=function(e){(e=e||document.getElementsByTagName("body")[0]).focus(),document.activeElement!==e&&(e.setAttribute("tabindex","-1"),e.focus())},Util.getIndexInArray=function(e,t){return Array.prototype.indexOf.call(e,t)},Util.cssSupports=function(e,t){return"CSS"in window?CSS.supports(e,t):e.replace(/-([a-z])/g,function(e){return e[1].toUpperCase()})in document.body.style},Util.extend=function(){var e={},t=!1,i=0,o=arguments.length;for("[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],i++);i<o;i++){s=void 0;var s,n=arguments[i];for(s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t&&"[object Object]"===Object.prototype.toString.call(n[s])?e[s]=extend(!0,e[s],n[s]):e[s]=n[s])}return e},Util.osHasReducedMotion=function(){if(!window.matchMedia)return!1;var e=window.matchMedia("(prefers-reduced-motion: reduce)");return!!e&&e.matches},Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(e){var t=this;if(!document.documentElement.contains(t))return null;do{if(t.matches(e))return t}while(null!==(t=t.parentElement||t.parentNode)&&1===t.nodeType);return null});{function CustomEvent(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var i=document.createEvent("CustomEvent");return i.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),i}"function"!=typeof window.CustomEvent&&(CustomEvent.prototype=window.Event.prototype,window.CustomEvent=CustomEvent)}function resetFocusTabsStyle(){window.dispatchEvent(new CustomEvent("initFocusTabs"))}Math.easeInOutQuad=function(e,t,i,o){return(e/=o/2)<1?i/2*e*e+t:-i/2*(--e*(e-2)-1)+t},Math.easeInQuart=function(e,t,i,o){return i*(e/=o)*e*e*e+t},Math.easeOutQuart=function(e,t,i,o){return e/=o,-i*(--e*e*e*e-1)+t},Math.easeInOutQuart=function(e,t,i,o){return(e/=o/2)<1?i/2*e*e*e*e+t:-i/2*((e-=2)*e*e*e-2)+t},Math.easeOutElastic=function(e,t,i,o){var s=1.70158,n=.7*o,a=i;return 0==e?t:1==(e/=o)?t+i:(n=n||.3*o,s=a<Math.abs(i)?(a=i,n/4):n/(2*Math.PI)*Math.asin(i/a),a*Math.pow(2,-10*e)*Math.sin((e*o-s)*(2*Math.PI)/n)+i+t)},function(){var o=document.getElementsByClassName("js-tab-focus"),e=!1,t=!1,i=!1;function s(){0<o.length&&(a(!1),window.addEventListener("keydown",n)),window.removeEventListener("mousedown",s),i=!(t=!1)}function n(e){9===e.keyCode&&(a(!0),window.removeEventListener("keydown",n),window.addEventListener("mousedown",s),t=!0)}function a(e){for(var t=e?"":"none",i=0;i<o.length;i++)o[i].style.setProperty("outline",t)}function l(){e?i&&a(t):(e=0<o.length,window.addEventListener("mousedown",s))}l(),window.addEventListener("initFocusTabs",l)}(),function(){function e(e){this.element=e,this.items=Util.getChildrenByClassName(this.element,"js-accordion__item"),this.version=this.element.getAttribute("data-version")?"-"+this.element.getAttribute("data-version"):"",this.showClass="accordion"+this.version+"__item--is-open",this.animateHeight="on"==this.element.getAttribute("data-animation"),this.multiItems=!("off"==this.element.getAttribute("data-multi-items")),this.deepLinkOn="on"==this.element.getAttribute("data-deep-link"),this.initAccordion()}e.prototype.initAccordion=function(){for(var e=0;e<this.items.length;e++){var t=this.items[e].getElementsByTagName("button")[0],i=this.items[e].getElementsByClassName("js-accordion__panel")[0],o=Util.hasClass(this.items[e],this.showClass)?"true":"false";Util.setAttributes(t,{"aria-expanded":o,"aria-controls":"accordion-content-"+e,id:"accordion-header-"+e}),Util.addClass(t,"js-accordion__trigger"),Util.setAttributes(i,{"aria-labelledby":"accordion-header-"+e,id:"accordion-content-"+e})}this.initAccordionEvents(),this.initDeepLink()},e.prototype.initAccordionEvents=function(){var t=this;this.element.addEventListener("click",function(e){e=e.target.closest(".js-accordion__trigger");e&&0<=Util.getIndexInArray(t.items,e.parentElement)&&t.triggerAccordion(e)})},e.prototype.triggerAccordion=function(e){var t="true"===e.getAttribute("aria-expanded");this.animateAccordion(e,t,!1),!t&&this.deepLinkOn&&history.replaceState(null,"","#"+e.getAttribute("aria-controls"))},e.prototype.animateAccordion=function(e,t,i){var o=e.closest(".js-accordion__item"),s=o.getElementsByClassName("js-accordion__panel")[0],n=t?"false":"true";t||Util.addClass(o,this.showClass),e.setAttribute("aria-expanded",n),this.resetContentVisibility(o,s,t),(this.multiItems||t)&&!i||this.closeSiblings(o)},e.prototype.resetContentVisibility=function(e,t,i){Util.toggleClass(e,this.showClass,!i),t.removeAttribute("style"),i&&!this.multiItems&&this.moveContent()},e.prototype.closeSiblings=function(e){for(var t=Util.getIndexInArray(this.items,e),i=0;i<this.items.length;i++)if(Util.hasClass(this.items[i],this.showClass)&&i!=t)return this.animateAccordion(this.items[i].getElementsByClassName("js-accordion__trigger")[0],!0,!1),!1},e.prototype.moveContent=function(){var e,t=this.element.getElementsByClassName(this.showClass);0!=t.length&&((t=t[0].getBoundingClientRect()).top<0||t.top>window.innerHeight)&&(e=window.scrollY||document.documentElement.scrollTop,window.scrollTo(0,t.top+e))},e.prototype.initDeepLink=function(){var e,t;this.deepLinkOn&&(e=window.location.hash.substr(1))&&""!=e&&(t=this.element.querySelector('.js-accordion__trigger[aria-controls="'+e+'"]'))&&"true"!==t.getAttribute("aria-expanded")&&(this.animateAccordion(t,!1,!0),setTimeout(function(){t.scrollIntoView(!0)}))},window.Accordion=e;var t=document.getElementsByClassName("js-accordion");if(0<t.length)for(var i=0;i<t.length;i++)new e(t[i])}(),function(){this.CookiePlugin=function(){arguments[0]&&"object"==typeof arguments[0]&&(this.options=function(e,t){let i;for(i in t)t.hasOwnProperty(i)&&(e[i]=t[i]);return e}({notification:{link1:{label:"Privacy  default",url:"/test"},link2:{label:"Contact def",url:"#"},notificationPreTitle:"Copyright 2022 def",notificationtitle:"We use cookies def",mainText:"Default Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore repudiandae a velit eveniet quibusdam cupiditate, reiciendis doloribus doloremque odit nobis.",buttons:{acceptAll:{label:"Accept All d",action:"accept-all"},deny:{label:"Deny d",action:"deny"},adjust:{label:"Adjust settings d",action:"adjust-settings"}}},modal:{modalTitle:"Privacy settings",link:{label:"Privacy policy",url:"#"},tabs:[{name:"cookie-settings",tabTitle:"Settings",description:"We would like your permission to use your data for the following purposes:"},{name:"cookie-descriptions",tabTitle:"Cookies",description:"This cookie list generally shows all cookies found on this website. It does not reflect the user's individual opt-out choices.",updated:"03.04.2021 09:14"},{name:"cookie-policy",tabTitle:"Cookie policy",description:"This cookie policy has been created and updated by linkobox.de.",updated:"03.04.2021 09:14",textBlocks:[{title:"What are cookies?",text:"Cookies and similar technologies are very small text documents or pieces of code that often contain a unique identification code. When you visit a website or use a mobile application, a computer asks your computer or mobile device for permission to save this file on your computer or mobile device and gain access to information. Information collected through cookies and similar technologies may include the date and time of the visit and how you use a particular website or mobile application."},{title:"Why do we use cookies?",text:"Cookies make sure that during your visit of our online shop you remain logged in, all items remain stored in your shopping cart, you can shop safely and the website keeps running smoothly. The cookies also ensure that we can see how our website is used and how we can improve it. Furthermore, depending on your preferences our own cookies may be used to present you with targeted advertisements that match your personal interests."}]}],buttons:{acceptAll:{label:"Accept All",action:"accept-all"},save:{label:"Save settings",action:"save-settings"},deny:{label:"Deny",action:"deny"}}},settings:{siteName:"Linkobox",cookies:[{name:"necessery",label:"Necessery",description1:"These cookies are required for good functionality of our website and can't be switched off in our system.",description2:"Usually these cookies are set by your actions in your requests for our services. Examples of these actions are logging in, filling in forms or setting your privacy preferences. It is possible to make your browser block these cookies, but some parts of our website may not work properly when these are blocked.",disabled:!0,checked:!0,cookiesList:[{name:"__cfduid",domainName:".app-us1.com",description:"Cookie is set on websites using Cloudflare to speed up their load times and for threat defense services. It is does not collect or share user identification information."},{name:"__cfduid",domainName:".app-us1.com",description:"Cookie is set on websites using Cloudflare to speed up their load times and for threat defense services. It is does not collect or share user identification information."},{name:"__cfduid",domainName:".app-us1.com",description:"Cookie is set on websites using Cloudflare to speed up their load times and for threat defense services. It is does not collect or share user identification information."}]},{name:"performance",label:"Performance",description1:"We use these cookies to provide statistical information about our website - they are used for performance measurement and improvement.",description2:"This category is also known as Analytics. Activities like page visits counting, page loading speed, bounce rate and technologies used to access our site are included in this category.",disabled:!1,checked:!1,cookiesList:[{name:"_hjid",domainName:".linkobox.de",description:"Hotjar cookie. This cookie is set when the customer first lands on a page with the Hotjar script. It is used to persist the random user ID, unique to that site on the browser. This ensures that behavior in subsequent visits to the same site will be attributed to the same user ID."}]},{name:"functional",label:"Functional",description1:"We use these cookies to enhance functionality and allow for personalisation, such as live chats, videos and the use of social media.",description2:"These cookies can be set by ourselves or by our third party service providers, whose digital services we have added. If you do not allow these cookies, some of these functionalities may not work properly.",disabled:!1,checked:!1,cookiesList:[{name:"lang",domainName:".linkedin.com",description:"There are many different types of cookies associated with this name, and a more detailed look at how it is used on a particular website is generally recommended. However, in most cases it will likely be used to store language preferences, potentially to serve up content in the stored language."}]},{name:"advertising",label:"Advertising",description1:"These cookies are set through our site by our advertising partners.",description2:"",disabled:!1,checked:!1,cookiesList:[{name:"m",domainName:"m.stripe.com",description:"This cookie is being set for advertising purposes."}]}]},parentSelector:null},arguments[0])),this.init()},CookiePlugin.prototype.initCodyHouseModal=function(){var e=document.getElementById("modal-cookie-consent");new Modal(e)},CookiePlugin.prototype.initCodyHouseTabs=function(){var e=document.getElementById("tabs-cookie-consent");new Tab(e)},CookiePlugin.prototype.initCodyHouseAccordion=function(){var e=document.getElementsByClassName("accordion")[0];new Accordion(e)},CookiePlugin.prototype.renderParentSelector=function(){const e=document.body.getElementsByTagName("script")[0];e.insertAdjacentHTML("beforebegin",`<div id="cookie-container"></div>
    `)},CookiePlugin.prototype.renderCookiesSettings=function(){var e="";for(cookie of this.options.settings.cookies)e+=`
      <li class="accordion__item js-accordion__item">
        <button class="reset accordion__header js-tab-focus" type="button">
          <div class="text-md font-bold">${cookie.label}</div>
    
          <div class="accordion-more color-primary">
            <div class="margin-right-xxs">more</div>
            <svg class="icon" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
              <rect x="4.22192" y="5.2749" width="6" height="1" rx="0.5" transform="rotate(45 4.22192 5.2749)" />
              <rect width="6" height="1" rx="0.5" transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 7.75732 10.2246)" />
            </svg>
          </div>
        </button>
    
        <div class="flex justify-between gap-md">
          <div>
            ${cookie.description1}
          </div>
          <div class="switch ${cookie.disabled?"switch--disabled":""}">
            <input class="switch__input" type="checkbox" id="switch-checkbox-${cookie.name}" ${cookie.checked?"checked":""} ${cookie.disabled?"disabled":""}>
            <label class="switch__label" for="switch-checkbox-${cookie.name}" aria-hidden="true">Option label</label>
            <div class="switch__marker" aria-hidden="true"></div>
          </div>
        </div>
    
        <div class="accordion__panel padding-top-xxs js-accordion__panel">
          <div class="text-component">
            <p>
              ${cookie.description2}
            </p>
            ${"necessery"===cookie.name?"<p>Shared with "+this.options.settings.siteName+".</p>":"<p>Shared with Google Analytics.</p>"}
          </div>
        </div>
      </li>
      `;return e},CookiePlugin.prototype.renderCookiesItems=function(e){var t,i="";for(t of this.options.settings.cookies[e].cookiesList)i+=`
      <li class="cookies-list__item">
        <div class="font-bold margin-bottom-xxxs">${t.name}</div>
        <div class="font-italic margin-bottom-xxxs">${t.domainName}</div>
        <div>${t.description}
        </div>
      </li>
      `;return i},CookiePlugin.prototype.renderCookiesDescriptions=function(){var e,t,i="";for([e,t]of this.options.settings.cookies.entries())i+=`
      <li class="margin-bottom-md">
        <div class="text-md font-bold margin-bottom-xs">${t.label}</div>
        <ul class="cookies-list">
          ${this.renderCookiesItems(e)}
        </ul>
      </li>
      `;return i},CookiePlugin.prototype.renderCookiePolicy=function(){var e,t="";for(e of this.options.modal.tabs[2].textBlocks)t+=`
        <li class="cookie-policy__item">
          <div class="text-md font-bold margin-bottom-xs">${e.title}</div>
          <div>${e.text}</div>
        </li>
      `;return t},CookiePlugin.prototype.renderCookieModule=function(){this.options.parentSelector.innerHTML=`
    <!-- Notification --> 
      <div class="notice-overlay bg-contrast-higher bg-opacity-30% notice-overlay--active grid" >
        <div class="notice notice--v3 lbc-notification col-6@sm col-4@md flash-message js-flash-message js-notice flash-message--is-visible">
          <div class="container max-width-lg">
            <div class="notice__banner bg-contrast-lower padding-y-md shadow-md">
              <div class="container max-width-lg">
                <div class="notice__header color-primary flex justify-between items-center text-sm">
                  <div class="margin-left-auto">
                    <a href="${this.options.notification.link1.url}">${this.options.notification.link1.label}</a> | <a href="${this.options.notification.link2.url}">${this.options.notification.link2.label}</a>
                  </div>
                </div>
                <div class="notice__body">
                    <div class="notice__pretitle">${this.options.notification.notificationPreTitle}</div>
                    <div class="notice__title">${this.options.notification.notificationtitle}</div>
                    <div class="notice__text margin-bottom-sm">${this.options.notification.mainText}</div>
                </div>
                <div class="notice__footer">
                    <button class="btn btn--primary width-100% margin-bottom-xs" id="cookie-accept-btn"
                    @click="selectCookieStatus()">
                    ${this.options.notification.buttons.acceptAll.label}
                    </button>
                    <div class="grid gap-xs">
                        <button class="btn col-6 color-primary">
                          ${this.options.notification.buttons.deny.label}
                        <button class="btn btn--border-primary col-6"
                        id="lbc-open-modal" aria-controls="modal-cookie-consent" @click="openModal()">
                          ${this.options.notification.buttons.adjust.label}
                        </button>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>  
      </div>
    <!-- Modal --> 
      <div id="modal-cookie-consent" class="modal modal--animate-translate-down flex flex-center bg-black bg-opacity-90% padding-md js-modal">
        <div class="modal__content width-100% max-width-sm max-height-100% overflow-auto bg radius-md inner-glow shadow-md flex flex-column" role="alertdialog" aria-labelledby="modal-title-4" aria-describedby="modal-description-4">
          <header class="bg-contrast-lower bg-opacity-50% padding-y-sm padding-x-md flex items-center justify-between flex-shrink-0">
            <h1 id="modal-title-4" class="text-truncate text-md">${this.options.modal.modalTitle}</h1>

            <button class="reset modal__close-btn modal__close-btn--inner js-modal__close js-tab-focus">
              <svg class="icon icon--xs" viewBox="0 0 16 16">
                <title>Close modal window</title>
                <g stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10">
                  <line x1="13.5" y1="2.5" x2="2.5" y2="13.5"></line>
                  <line x1="2.5" y1="2.5" x2="13.5" y2="13.5"></line>
                </g>
              </svg>
            </button>
          </header>
        <!-- Tabs --> 
          <div id="tabs-cookie-consent" class="padding-y-md padding-x-md flex-grow overflow-auto momentum-scrolling">
          <div class="margin-bottom-sm flex items-center justify-between">
            <a href="${this.options.modal.link.url}">${this.options.modal.link.label}</a>
          </div>
            <div class="tabs js-tabs">
              <ul class="tab-btns grid js-tabs__controls" aria-label="Tabs Interface">
                <li class="tab-btns__btn col-4@xs"><a href="#tab1Panel1" class="tabs__control btn tab-btns__btn btn--border-primary btn-tab width-100% radius-md-left" aria-selected="true">${this.options.modal.tabs[0].tabTitle}</a></li>
                <li class="tab-btns__btn col-4@xs"><a href="#tab1Panel2" class="tabs__control btn tab-btns__btn btn--border-primary btn-tab width-100% radius-0">${this.options.modal.tabs[1].tabTitle}</a></li>
                <li class="tab-btns__btn col-4@xs"><a href="#tab1Panel3" class="tabs__control btn tab-btns__btn btn--border-primary btn-tab width-100% radius-md-right">${this.options.modal.tabs[2].tabTitle}</a></li>
              </ul>
              <div class="js-tabs__panels">
                <section id="tab1Panel1" class="padding-top-md js-tabs__panel">
                  <div class="margin-bottom-md">${this.options.modal.tabs[0].description}</div>
                  <ul class="accordion  js-accordion" data-animation="on" data-multi-items="on">
                    ${this.renderCookiesSettings()}            
                  </ul>
                </section>
            
                <section id="tab1Panel2" class="padding-top-md js-tabs__panel">
                  <div class="text-component margin-bottom-md">
                    <div class="margin-bottom-sm">${this.options.modal.tabs[1].description}</div>
                    <p><span class="font-bold">updated:</span> ${this.options.modal.tabs[1].updated}</p>
                  </div>

                  <ul>
                    ${this.renderCookiesDescriptions()}
                  </ul>
                </section>
            
                <section id="tab1Panel3" class="padding-top-md js-tabs__panel">
                  <div class="text-component margin-bottom-md">
                    <div class="margin-bottom-sm">${this.options.modal.tabs[2].description}</div>
                    <p><span class="font-bold">updated:</span> ${this.options.modal.tabs[2].updated}</p>
                  </div>
                  <ul class="cookie-policy">
                  ${this.renderCookiePolicy()}
                  </ul>
                </section>
              </div>
            </div>
          </div>
        <!-- Modal butons -->
          <footer class="lbc-modal-footer padding-y-sm padding-x-md bg shadow-md flex-shrink-0">
            <button class="btn btn--primary width-100% margin-bottom-xs" id="lbc-cookieconsent-status"
                @click="selectCookieStatus()">
                ${this.options.modal.buttons.acceptAll.label}
            </button>

            <div class="grid gap-sm">
                <button class="btn btn--border-primary col-6"
                @click="lbcSetCookie()">
                ${this.options.modal.buttons.save.label}
                </button>
                <button class="btn col-6 color-primary"
                id="lbc-open-modal" aria-controls="lbc-modal">
                ${this.options.modal.buttons.deny.label}
                </button>
            </div>
        </footer>
        </div>
      </div>
    `},CookiePlugin.prototype.init=function(){this.options.parentSelector||(this.renderParentSelector(),this.options.parentSelector=document.getElementById("cookie-container")),this.renderCookieModule(),this.initCodyHouseModal(),this.initCodyHouseTabs(),this.initCodyHouseAccordion()}}(),function(){function e(e){this.element=e,this.select=this.element.getElementsByTagName("select")[0],this.optGroups=this.select.getElementsByTagName("optgroup"),this.options=this.select.getElementsByTagName("option"),this.selectedOption=function(e){var t="";t=("selectedIndex"in e.select?e.options[e.select.selectedIndex]:e.select.querySelector("option[selected]")).text;return t}(this),this.selectId=this.select.getAttribute("id"),this.trigger=!1,this.dropdown=!1,this.customOptions=!1,this.arrowIcon=this.element.getElementsByTagName("svg"),this.label=document.querySelector('[for="'+this.selectId+'"]'),this.optionIndex=0;(e=this).element.insertAdjacentHTML("beforeend",function(e){var t=e.element.getAttribute("data-trigger-class")?" "+e.element.getAttribute("data-trigger-class"):"",i=e.options[e.select.selectedIndex].innerHTML+", "+e.label.textContent,t='<button type="button" class="js-select__button select__button'+t+'" aria-label="'+i+'" aria-expanded="false" aria-controls="'+e.selectId+'-dropdown"><span aria-hidden="true" class="js-select__label select__label">'+e.selectedOption+"</span>";0<e.arrowIcon.length&&e.arrowIcon[0].outerHTML&&(i=e.arrowIcon[0].cloneNode(!0),Util.removeClass(i,"select__icon"),t+=i.outerHTML);return t+"</button>"}(e)+function(e){var t='<div class="js-select__dropdown select__dropdown" aria-describedby="'+e.selectId+'-description" id="'+e.selectId+'-dropdown">';if(t+=function(e){return e.label?'<p class="sr-only" id="'+e.selectId+'-description">'+e.label.textContent+"</p>":""}(e),0<e.optGroups.length)for(var i=0;i<e.optGroups.length;i++){var o=e.optGroups[i].getElementsByTagName("option"),s='<li><span class="select__item select__item--optgroup">'+e.optGroups[i].getAttribute("label")+"</span></li>";t=t+'<ul class="select__list" role="listbox">'+s+r(e,o)+"</ul>"}else t=t+'<ul class="select__list" role="listbox">'+r(e,e.options)+"</ul>";return t}(e)),e.dropdown=e.element.getElementsByClassName("js-select__dropdown")[0],e.trigger=e.element.getElementsByClassName("js-select__button")[0],e.customOptions=e.dropdown.getElementsByClassName("js-select__item"),Util.addClass(e.select,"is-hidden"),0<e.arrowIcon.length&&(e.arrowIcon[0].style.display="none"),a(e);var o=this,s=o;s.dropdown.addEventListener("click",function(e){e=e.target.closest(".js-select__item");if(e){var t=s;if(e.hasAttribute("aria-selected")&&"true"==e.getAttribute("aria-selected"))t.trigger.setAttribute("aria-expanded","false");else{(i=t.dropdown.querySelector('[aria-selected="true"]'))&&i.setAttribute("aria-selected","false"),e.setAttribute("aria-selected","true"),t.trigger.getElementsByClassName("js-select__label")[0].textContent=e.textContent,t.trigger.setAttribute("aria-expanded","false");{var i=t;e=e.getAttribute("data-index");i.select.selectedIndex=e,i.select.dispatchEvent(new CustomEvent("change",{bubbles:!0})),i.select.dispatchEvent(new CustomEvent("input",{bubbles:!0}))}l(t)}t.trigger.focus()}}),o.trigger.addEventListener("click",function(){n(o,!1)}),o.label&&o.label.addEventListener("click",function(){Util.moveFocus(o.trigger)}),o.dropdown.addEventListener("keydown",function(e){e.keyCode&&38==e.keyCode||e.key&&"arrowup"==e.key.toLowerCase()?t(o,"prev",e):(e.keyCode&&40==e.keyCode||e.key&&"arrowdown"==e.key.toLowerCase())&&t(o,"next",e)}),o.element.addEventListener("select-updated",function(e){var t=o,i=t.dropdown.querySelector('[aria-selected="true"]');i&&i.setAttribute("aria-selected","false"),(i=t.dropdown.querySelector('.js-select__item[data-index="'+t.select.selectedIndex+'"]')).setAttribute("aria-selected","true"),t.trigger.getElementsByClassName("js-select__label")[0].textContent=i.textContent,t.trigger.setAttribute("aria-expanded","false"),l(t)})}function n(t,e){var i,e=e||("true"==t.trigger.getAttribute("aria-expanded")?"false":"true");t.trigger.setAttribute("aria-expanded",e),"true"==e&&(i=(e=t).dropdown.querySelector('[aria-selected="true"]')||e.dropdown.getElementsByClassName("js-select__item")[0],Util.moveFocus(i),t.dropdown.addEventListener("transitionend",function e(){Util.moveFocus(i),t.dropdown.removeEventListener("transitionend",e)}),a(t))}function a(e){Util.removeClass(e.dropdown,"select__dropdown--right select__dropdown--up");var t=e.trigger.getBoundingClientRect(),i=(Util.toggleClass(e.dropdown,"select__dropdown--right",document.documentElement.clientWidth-5<t.left+e.dropdown.offsetWidth),window.innerHeight-t.bottom-5<t.top),i=(Util.toggleClass(e.dropdown,"select__dropdown--up",i),i?t.top-20:window.innerHeight-t.bottom-20);e.dropdown.setAttribute("style","max-height: "+i+"px; width: "+t.width+"px;")}function t(e,t,i){i.preventDefault();i=Util.getIndexInArray(e.customOptions,document.activeElement);(i=(i="next"==t?i+1:i-1)<0?e.customOptions.length-1:i)>=e.customOptions.length&&(i=0),Util.moveFocus(e.customOptions[i])}function l(e){e.trigger.setAttribute("aria-label",e.options[e.select.selectedIndex].innerHTML+", "+e.label.textContent)}function r(e,t){for(var i="",o=0;o<t.length;o++){var s=t[o].hasAttribute("selected")?' aria-selected="true"':' aria-selected="false"',n=t[o].hasAttribute("disabled")?" disabled":"",i=i+'<li><button type="button" class="reset js-select__item select__item select__item--option" role="option" data-value="'+t[o].value+'" '+s+n+' data-index="'+e.optionIndex+'">'+t[o].text+"</button></li>";e.optionIndex=e.optionIndex+1}return i}var i,o=document.getElementsByClassName("js-select");if(0<o.length){for(var s=[],c=0;c<o.length;c++)i=c,s.push(new e(o[i]));window.addEventListener("keyup",function(e){(e.keyCode&&27==e.keyCode||e.key&&"escape"==e.key.toLowerCase())&&s.forEach(function(e){var t;t=e,document.activeElement.closest(".js-select")&&t.trigger.focus(),n(e,"false")})}),window.addEventListener("click",function(i){s.forEach(function(e){var t;e=e,t=i.target,e.element.contains(t)||n(e,"false")})})}}(),function(){function e(e){this.element=e,this.triggers=document.querySelectorAll('[aria-controls="'+this.element.getAttribute("id")+'"]'),this.firstFocusable=null,this.lastFocusable=null,this.moveFocusEl=null,this.modalFocus=this.element.getAttribute("data-modal-first-focus")?this.element.querySelector(this.element.getAttribute("data-modal-first-focus")):null,this.selectedTrigger=null,this.preventScrollEl=this.getPreventScrollEl(),this.showClass="modal--is-visible",this.initModal()}function i(e){return e.offsetWidth||e.offsetHeight||e.getClientRects().length}e.prototype.getPreventScrollEl=function(){var e=!1,t=this.element.getAttribute("data-modal-prevent-scroll");return e=t?document.querySelector(t):e},e.prototype.initModal=function(){var t=this;if(this.triggers)for(var e=0;e<this.triggers.length;e++)this.triggers[e].addEventListener("click",function(e){e.preventDefault(),Util.hasClass(t.element,t.showClass)?t.closeModal():(t.selectedTrigger=e.currentTarget,t.showModal(),t.initModalEvents())});this.element.addEventListener("openModal",function(e){e.detail&&(t.selectedTrigger=e.detail),t.showModal(),t.initModalEvents()}),this.element.addEventListener("closeModal",function(e){e.detail&&(t.selectedTrigger=e.detail),t.closeModal()}),Util.hasClass(this.element,this.showClass)&&this.initModalEvents()},e.prototype.showModal=function(){var i=this;Util.addClass(this.element,this.showClass),this.getFocusableElements(),this.moveFocusEl&&(this.moveFocusEl.focus(),this.element.addEventListener("transitionend",function e(t){i.moveFocusEl.focus(),i.element.removeEventListener("transitionend",e)})),this.emitModalEvents("modalIsOpen"),this.preventScrollEl&&(this.preventScrollEl.style.overflow="hidden")},e.prototype.closeModal=function(){Util.hasClass(this.element,this.showClass)&&(Util.removeClass(this.element,this.showClass),this.firstFocusable=null,this.lastFocusable=null,this.moveFocusEl=null,this.selectedTrigger&&this.selectedTrigger.focus(),this.cancelModalEvents(),this.emitModalEvents("modalIsClose"),this.preventScrollEl&&(this.preventScrollEl.style.overflow=""))},e.prototype.initModalEvents=function(){this.element.addEventListener("keydown",this),this.element.addEventListener("click",this)},e.prototype.cancelModalEvents=function(){this.element.removeEventListener("keydown",this),this.element.removeEventListener("click",this)},e.prototype.handleEvent=function(e){switch(e.type){case"click":this.initClick(e);case"keydown":this.initKeyDown(e)}},e.prototype.initKeyDown=function(e){e.keyCode&&9==e.keyCode||e.key&&"Tab"==e.key?this.trapFocus(e):(e.keyCode&&13==e.keyCode||e.key&&"Enter"==e.key)&&e.target.closest(".js-modal__close")&&(e.preventDefault(),this.closeModal())},e.prototype.initClick=function(e){(e.target.closest(".js-modal__close")||Util.hasClass(e.target,"js-modal"))&&(e.preventDefault(),this.closeModal())},e.prototype.trapFocus=function(e){this.firstFocusable==document.activeElement&&e.shiftKey&&(e.preventDefault(),this.lastFocusable.focus()),this.lastFocusable!=document.activeElement||e.shiftKey||(e.preventDefault(),this.firstFocusable.focus())},e.prototype.getFocusableElements=function(){var e=this.element.querySelectorAll(s);this.getFirstVisible(e),this.getLastVisible(e),this.getFirstFocusable()},e.prototype.getFirstVisible=function(e){for(var t=0;t<e.length;t++)if(i(e[t])){this.firstFocusable=e[t];break}},e.prototype.getLastVisible=function(e){for(var t=e.length-1;0<=t;t--)if(i(e[t])){this.lastFocusable=e[t];break}},e.prototype.getFirstFocusable=function(){if(this.modalFocus&&Element.prototype.matches)if(this.modalFocus.matches(s))this.moveFocusEl=this.modalFocus;else{this.moveFocusEl=!1;for(var e=this.modalFocus.querySelectorAll(s),t=0;t<e.length;t++)if(i(e[t])){this.moveFocusEl=e[t];break}this.moveFocusEl||(this.moveFocusEl=this.firstFocusable)}else this.moveFocusEl=this.firstFocusable},e.prototype.emitModalEvents=function(e){e=new CustomEvent(e,{detail:this.selectedTrigger});this.element.dispatchEvent(e)},window.Modal=e;var t,o=document.getElementsByClassName("js-modal"),s='[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex]:not([tabindex="-1"]), [contenteditable], audio[controls], video[controls], summary';if(0<o.length){for(var n=[],a=0;a<o.length;a++)t=a,n.push(new e(o[t]));window.addEventListener("keydown",function(e){if(e.keyCode&&27==e.keyCode||e.key&&"escape"==e.key.toLowerCase())for(var t=0;t<n.length;t++)n[t].closeModal()})}}(),function(){var e=document.getElementsByClassName("js-notice");if(0<e.length)for(var i=0;i<e.length;i++)!function(){var t;(t=e[i]).addEventListener("click",function(e){e.target.closest(".js-notice__hide-control")&&(e.preventDefault(),Util.addClass(t,"notice--hide"))})}()}(),function(){function e(e){this.element=e,this.tabList=this.element.getElementsByClassName("js-tabs__controls")[0],this.listItems=this.tabList.getElementsByTagName("li"),this.triggers=this.tabList.getElementsByTagName("a"),this.panelsList=this.element.getElementsByClassName("js-tabs__panels")[0],this.panels=Util.getChildrenByClassName(this.panelsList,"js-tabs__panel"),this.hideClass="is-hidden",this.customShowClass=!!this.element.getAttribute("data-show-panel-class")&&this.element.getAttribute("data-show-panel-class"),this.layout=this.element.getAttribute("data-tabs-layout")?this.element.getAttribute("data-tabs-layout"):"horizontal",this.deepLinkOn="on"==this.element.getAttribute("data-deep-link"),this.initTab()}e.prototype.initTab=function(){this.tabList.setAttribute("role","tablist");for(var e=0;e<this.triggers.length;e++){var t=0==e,i=this.panels[e].getAttribute("id");this.listItems[e].setAttribute("role","presentation"),Util.setAttributes(this.triggers[e],{role:"tab","aria-selected":t,"aria-controls":i,id:"tab-"+i}),Util.addClass(this.triggers[e],"js-tabs__trigger"),Util.setAttributes(this.panels[e],{role:"tabpanel","aria-labelledby":"tab-"+i}),Util.toggleClass(this.panels[e],this.hideClass,!t),t||this.triggers[e].setAttribute("tabindex","-1")}this.initTabEvents(),this.initDeepLink()},e.prototype.initTabEvents=function(){var t=this;this.tabList.addEventListener("click",function(e){e.target.closest(".js-tabs__trigger")&&t.triggerTab(e.target.closest(".js-tabs__trigger"),e)}),this.tabList.addEventListener("keydown",function(e){e.target.closest(".js-tabs__trigger")&&(!function(e,t){{if("horizontal"==t&&(e.keyCode&&39==e.keyCode||e.key&&"ArrowRight"==e.key))return 1;if("vertical"==t&&(e.keyCode&&40==e.keyCode||e.key&&"ArrowDown"==e.key))return 1}}(e,t.layout)?function(e,t){{if("horizontal"==t&&(e.keyCode&&37==e.keyCode||e.key&&"ArrowLeft"==e.key))return 1;if("vertical"==t&&(e.keyCode&&38==e.keyCode||e.key&&"ArrowUp"==e.key))return 1}}(e,t.layout)&&(e.preventDefault(),t.selectNewTab("prev")):(e.preventDefault(),t.selectNewTab("next")))})},e.prototype.selectNewTab=function(e){var t=this.tabList.querySelector('[aria-selected="true"]'),t=Util.getIndexInArray(this.triggers,t);(t=(t="next"==e?t+1:t-1)<0?this.listItems.length-1:t)>=this.listItems.length&&(t=0),this.triggerTab(this.triggers[t]),this.triggers[t].focus()},e.prototype.triggerTab=function(e,t){t&&t.preventDefault();var i=Util.getIndexInArray(this.triggers,e);if("true"!=this.triggers[i].getAttribute("aria-selected")){for(var o=0;o<this.triggers.length;o++){var s=o==i;Util.toggleClass(this.panels[o],this.hideClass,!s),this.customShowClass&&Util.toggleClass(this.panels[o],this.customShowClass,s),this.triggers[o].setAttribute("aria-selected",s),s?this.triggers[o].setAttribute("tabindex","0"):this.triggers[o].setAttribute("tabindex","-1")}this.deepLinkOn&&history.replaceState(null,"","#"+e.getAttribute("aria-controls"))}},e.prototype.initDeepLink=function(){if(this.deepLinkOn){var e=window.location.hash.substr(1),t=this;if(e&&""!=e)for(var i=0;i<this.panels.length;i++)if(this.panels[i].getAttribute("id")==e){this.triggerTab(this.triggers[i],!1),setTimeout(function(){t.panels[i].scrollIntoView(!0)});break}}},window.Tab=e;var t=document.getElementsByClassName("js-tabs");if(0<t.length)for(var i=0;i<t.length;i++)new e(t[i])}();