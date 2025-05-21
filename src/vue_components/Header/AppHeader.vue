<template>
    <header class="header" id="up">
        <div class="logo">
            <a href="#" class="logo__link">
                <picture>
                    <source type="image/webp" srcset="@/assets/img/logo_167.webp"  media="(max-width: 412px)">
                    <source type="image/jpg" srcset="@/assets/img/logo_167.jpg" media="(max-width: 412px)">
                    <source type="image/webp" srcset="@/assets/img/logo_111.webp">
                    <img class="logo__img" src="@/assets/img/logo_111.jpg" alt="Logo" width="111" height="111">
                </picture>
            </a>
        </div>

        <nav class="header__nav collapse fadeInLeftMenu" data-toggle-id="dropdown">
            <ul class="menu">
                <li class="menu__item">
                    <a href="#about"  class="menu__link underline-anime text-nobreak">О художнике</a>
                </li>
                <li class="menu__item">
                    <a href="#exhibition"  class="menu__link underline-anime text-nobreak">Выставки</a>
                </li>
                <li class="menu__item">
                    <a href="#paintings"  class="menu__link underline-anime text-nobreak">Работы</a>
                </li>
                <li class="menu__item">
                    <a href="#creative-meetings"  class="menu__link underline-anime text-nobreak">Творческие встречи </a>
                </li>
                <li class="menu__item">
                    <a href="#video"  class="menu__link underline-anime text-nobreak">Видео</a>
                </li>
                <li class="menu__item">
                    <a href="https://vk.com/id256225420"  class="menu__link underline-anime text-nobreak" target="_blank">VK</a>
                </li>
            </ul>
        </nav>
        <div class="navbar-toggle burger" id="dropdown">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
        </div>
    </header>

</template>
