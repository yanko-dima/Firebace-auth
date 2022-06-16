import * as basicLightbox from 'basiclightbox';

export function onFooterClick(event) {
  event.preventDefault();
  window.addEventListener('keydown', onFooterClose);
  const renderFooter = basicLightbox.create(`
    <div class="footer-modal">
     <ul class="footer-team__list">
     <li class="footer-team__item">
     <img class="footer-team__pic"  src='../images/ukr-flag.jpeg' alt="ukarainien flag" >
     <a class="footer-team__name" href="https://github.com/AleksandroKravchuk">Kravchuk Oleksandr</a>
     <p class="footer-team__prof">Team Leader</p>
     </li>
     <li  class="footer-team__item"><img class="footer-team__pic" src="#" alt="">
     <a class="footer-team__name" href="https://github.com/Ohleh">Oleg</a>
     <p class="footer-team__prof">Scrum Master</p></li>
     <li  class="footer-team__item"><img class="footer-team__pic" src="#" alt="">
     <a class="footer-team__name" href="https://github.com/HryhoriiAndriiets1974">Andriiets Hryhorii</a>
     <p class="footer-team__prof">Developer</p></li>
     <li  class="footer-team__item"><img class="footer-team__pic" src="#" alt="">
     <a class="footer-team__name" href="https://github.com/alfrntlower">Smychenko Oleksiy</a>
     <p class="footer-team__prof">Developer</p></li>
     <li  class="footer-team__item"><img class="footer-team__pic" src="#" alt="">
     <a class="footer-team__name" href="https://github.com/ViacheslavDedov">Dedov Viacheslav</a>
     <p class="footer-team__prof">Developer</p></li>
     <li  class="footer-team__item"><img class="footer-team__pic" src="#" alt="">
     <a class="footer-team__name" href="https://github.com/yanko-dima">Yanko Dmitriy</a>
     <p class="footer-team__prof">Developer</p></li>
     <li  class="footer-team__item"><img class="footer-team__pic" src="#" alt="">
     <a class="footer-team__name" href="https://github.com/TetianaMyslynska">Myslynska Tetiana</a>
     <p class="footer-team__prof">Developer</p></li>
     <li  class="footer-team__item"><img class="footer-team__pic" src="" alt="">
     <a class="footer-team__name" href="#">Name</a>
     <p class="footer-team__prof">Developer</p></li>
     <li  class="footer-team__item"><img class="footer-team__pic" src="#" alt="">
     <a class="footer-team__name" href="https://github.com/KuzkinaOlga">Kuzkina Olga</a>
     <p class="footer-team__prof">Developer</p></li>

    </div>`);
  renderFooter.show();

  function onFooterClose(event) {
    if (event.code === 'Escape') {
      renderFooter.close();
      window.removeEventListener('keydown', onFooterClose);
    }
  }
}
